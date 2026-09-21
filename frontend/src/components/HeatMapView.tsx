import { useEffect, useMemo, useRef, useState, type FC } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Layers, Maximize2 } from 'lucide-react';
import type {
  CityName,
  HotspotFeature,
  ThermalFieldStatus,
  ThermalPointFeature,
} from '../simulation/types';
import {
  getHotspotColor,
  getLSTColor,
  HOTSPOT_SCALE,
  THERMAL_SCALE,
} from '../simulation/thermalScale';

interface HeatMapViewProps {
  currentCity: CityName;
  onCityChange: (city: CityName) => void;
  hotspots: HotspotFeature[];
  totalHotspots: number;
  thermalPoints: ThermalPointFeature[];
  thermalFieldStatus: ThermalFieldStatus;
  selectedHotspot: HotspotFeature | null;
  onSelectHotspot: (hotspot: HotspotFeature) => void;
  onViewHotspotDetails: (hotspot: HotspotFeature) => void;
}

type HotspotFilter = 'P90_PLUS' | 'ALL' | 'Critical' | 'Severe' | 'High' | 'Moderate';

const CITY_COORDINATES: Record<CityName, [number, number]> = {
  Delhi: [28.65, 77.18],
  Bengaluru: [12.97, 77.59],
  Lucknow: [26.85, 80.94],
  Kanpur: [26.46, 80.33],
};

export const HeatMapView: FC<HeatMapViewProps> = ({
  currentCity,
  onCityChange,
  hotspots,
  totalHotspots,
  thermalPoints,
  thermalFieldStatus,
  onSelectHotspot,
  onViewHotspotDetails,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const initialCenterRef = useRef(CITY_COORDINATES[currentCity]);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const thermalLayerRef = useRef<L.LayerGroup | null>(null);
  const hotspotLayerRef = useRef<L.LayerGroup | null>(null);
  const [filterSeverity, setFilterSeverity] = useState<HotspotFilter>('P90_PLUS');
  const [showThermalField, setShowThermalField] = useState(true);
  const [showHotspots, setShowHotspots] = useState(true);

  const filteredHotspots = useMemo(() => {
    if (filterSeverity === 'ALL') return hotspots;
    if (filterSeverity === 'P90_PLUS') {
      return hotspots.filter((hotspot) => hotspot.properties.severity !== 'Moderate');
    }
    return hotspots.filter((hotspot) => hotspot.properties.severity === filterSeverity);
  }, [filterSeverity, hotspots]);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: initialCenterRef.current,
      zoom: 11,
      zoomControl: false,
      preferCanvas: true,
    });

    L.control.zoom({ position: 'topright' }).addTo(map);

    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: '&copy; Esri, DeLorme, NAVTEQ',
        maxZoom: 16,
      }
    ).addTo(map);

    map.createPane('thermalFieldPane');
    map.getPane('thermalFieldPane')!.style.zIndex = '410';
    map.createPane('hotspotPane');
    map.getPane('hotspotPane')!.style.zIndex = '430';

    thermalLayerRef.current = L.layerGroup().addTo(map);
    hotspotLayerRef.current = L.layerGroup().addTo(map);
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
      thermalLayerRef.current = null;
      hotspotLayerRef.current = null;
    };
  }, []);

  useEffect(() => {
    mapInstanceRef.current?.setView(CITY_COORDINATES[currentCity], 11);
  }, [currentCity]);

  // Base layer: every observed city sample, colored by its absolute LST value.
  useEffect(() => {
    if (!thermalLayerRef.current) return;
    thermalLayerRef.current.clearLayers();
    if (!showThermalField) return;

    thermalPoints.forEach((point) => {
      const [lon, lat] = point.geometry.coordinates;
      L.circleMarker([lat, lon], {
        pane: 'thermalFieldPane',
        radius: 3,
        stroke: false,
        fillColor: getLSTColor(point.properties.lst),
        fillOpacity: 0.62,
        interactive: false,
      }).addTo(thermalLayerRef.current!);
    });
  }, [showThermalField, thermalPoints]);

  // Overlay layer: city-relative anomaly points, styled by percentile severity.
  useEffect(() => {
    if (!hotspotLayerRef.current) return;
    hotspotLayerRef.current.clearLayers();
    if (!showHotspots) return;

    filteredHotspots.forEach((hotspot) => {
      const [lon, lat] = hotspot.geometry.coordinates;
      const { lst, severity, id, primary_driver, city_percentile } = hotspot.properties;
      const color = getHotspotColor(severity);

      const circle = L.circleMarker([lat, lon], {
        pane: 'hotspotPane',
        radius: severity === 'Critical' ? 9 : severity === 'Severe' ? 8 : 6,
        fillColor: color,
        color: '#ffffff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.88,
      });

      circle.bindTooltip(
        `<strong>${id}</strong> · ${severity}<br/>Observed LST: <b>${lst}°C</b><br/>City percentile: <b>P${city_percentile.toFixed(1)}</b><br/>${primary_driver}<br/><span style="color:#2563eb; font-size:10px;">Click for full drilldown &rarr;</span>`,
        { direction: 'top', className: 'overview-map-tooltip' }
      );

      circle.on('click', () => {
        onSelectHotspot(hotspot);
        onViewHotspotDetails(hotspot);
      });

      hotspotLayerRef.current?.addLayer(circle);
    });
  }, [filteredHotspots, onSelectHotspot, onViewHotspotDetails, showHotspots]);

  const fieldCountText = (() => {
    if (thermalFieldStatus === 'loading') return 'Loading complete LST field…';
    if (thermalFieldStatus === 'unavailable') return 'LST field unavailable · hotspot-only mode';
    return `${thermalPoints.length.toLocaleString()} observed LST samples`;
  })();

  const loadedHotspotText = `${filteredHotspots.length.toLocaleString()} hotspot overlays`;
  const hotspotCoverageText =
    totalHotspots > hotspots.length
      ? `${hotspots.length.toLocaleString()} of ${totalHotspots.toLocaleString()} anomaly records loaded`
      : `${hotspots.length.toLocaleString()} anomaly records loaded`;

  return (
    <div className="heatmap-view-container">
      <header className="view-header heatmap-header">
        <div>
          <h1 className="page-heading">Geospatial Heat Map</h1>
          <p className="page-subheading">
            Complete observed LST field with city-relative hotspot anomalies
          </p>
        </div>

        <div className="heatmap-toolbar">
          <select
            className="city-select-inline heatmap-select"
            value={currentCity}
            onChange={(event) => onCityChange(event.target.value as CityName)}
            aria-label="Select city"
          >
            <option value="Delhi">Delhi</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Kanpur">Kanpur</option>
          </select>

          <select
            className="heatmap-select"
            value={filterSeverity}
            onChange={(event) => setFilterSeverity(event.target.value as HotspotFilter)}
            aria-label="Filter hotspot overlay"
          >
            <option value="P90_PLUS">P90+ Hotspots</option>
            <option value="ALL">All P75+ Anomalies</option>
            <option value="Critical">Critical (≥P99)</option>
            <option value="Severe">Severe (P95–P99)</option>
            <option value="High">High (P90–P95)</option>
            <option value="Moderate">Elevated (P75–P90)</option>
          </select>

          <button
            type="button"
            className="map-fullscreen-icon-btn heatmap-recenter"
            onClick={() => mapInstanceRef.current?.setView(CITY_COORDINATES[currentCity], 11)}
            title="Recenter"
            aria-label="Recenter map"
          >
            <Maximize2 size={16} />
          </button>
        </div>
      </header>

      <div className="card heatmap-map-card">
        <div className="heatmap-map-frame">
          <div ref={mapContainerRef} className="heatmap-leaflet-map" />

          <div className="heatmap-count-pill">
            <Layers size={14} />
            <div>
              <strong>{fieldCountText}</strong>
              <span>
                {showHotspots ? loadedHotspotText : 'Hotspot overlay hidden'} · {hotspotCoverageText}
              </span>
            </div>
          </div>

          <div className="heatmap-layer-switcher" aria-label="Map layers">
            <label>
              <input
                type="checkbox"
                checked={showThermalField}
                onChange={(event) => setShowThermalField(event.target.checked)}
              />
              Complete LST field
            </label>
            <label>
              <input
                type="checkbox"
                checked={showHotspots}
                onChange={(event) => setShowHotspots(event.target.checked)}
              />
              Hotspot overlay
            </label>
          </div>

          <div className="floating-lst-legend heatmap-combined-legend">
            <div className="legend-head">Observed LST · all samples</div>
            {THERMAL_SCALE.map((stop) => (
              <div className="legend-row" key={stop.band}>
                <span className="legend-box" style={{ background: stop.color }} />
                <span>{stop.label} · {stop.band}</span>
              </div>
            ))}

            <div className="legend-divider" />
            <div className="legend-head">Hotspot overlay · city percentile</div>
            {HOTSPOT_SCALE.map((stop) => (
              <div className="legend-row" key={stop.severity}>
                <span className="hotspot-legend-dot" style={{ background: stop.color }} />
                <span>{stop.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
