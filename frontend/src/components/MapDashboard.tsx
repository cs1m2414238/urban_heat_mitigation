import { useEffect, useRef, useState, type FC } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { CityName, HotspotFeature, SeverityLevel } from '../simulation/types';

interface MapDashboardProps {
  city: CityName;
  hotspots: HotspotFeature[];
  selectedHotspot: HotspotFeature | null;
  onSelectHotspot: (hotspot: HotspotFeature) => void;
  onTriggerSimulator?: () => void;
}

type BasemapStyle = 'dark' | 'satellite' | 'street';

const CITY_COORDINATES: Record<CityName, [number, number]> = {
  Delhi: [28.65, 77.15],
  Bengaluru: [12.97, 77.60],
  Lucknow: [26.85, 80.94],
  Kanpur: [26.46, 80.33],
};

const BASEMAP_PROVIDERS: Record<BasemapStyle, { url: string; attribution: string; maxZoom: number }> = {
  dark: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16,
  },
  satellite: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Source: Esri, Maxar, Earthstar Geographics, GIS User Community',
    maxZoom: 18,
  },
  street: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  },
};

const SEVERITY_COLORS: Record<SeverityLevel, string> = {
  Critical: '#ef4444', // Red
  Severe: '#f97316',   // Orange
  High: '#eab308',     // Yellow
  Moderate: '#3b82f6', // Blue
};

export const MapDashboard: FC<MapDashboardProps> = ({
  city,
  hotspots,
  selectedHotspot,
  onSelectHotspot,
  onTriggerSimulator,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const selectedHighlightRef = useRef<L.CircleMarker | null>(null);

  const [activeBasemap, setActiveBasemap] = useState<BasemapStyle>('satellite');
  const [cursorCoords, setCursorCoords] = useState<{ lat: number; lng: number } | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const center = CITY_COORDINATES[city];
    const map = L.map(mapContainerRef.current, {
      center: center,
      zoom: 11,
      zoomControl: false, // We place custom zoom or use top-left
    });

    // Custom zoom control in bottom-right
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // Initial tile layer (Esri Satellite)
    const provider = BASEMAP_PROVIDERS[activeBasemap];
    const tileLayer = L.tileLayer(provider.url, {
      attribution: provider.attribution,
      maxZoom: provider.maxZoom,
    }).addTo(map);

    tileLayerRef.current = tileLayer;

    // Hotspot markers layer
    const markersLayer = L.layerGroup().addTo(map);
    markersLayerRef.current = markersLayer;

    // Track cursor coordinates
    map.on('mousemove', (e: L.LeafletMouseEvent) => {
      setCursorCoords({
        lat: Number(e.latlng.lat.toFixed(4)),
        lng: Number(e.latlng.lng.toFixed(4)),
      });
    });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Basemap Provider
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    if (tileLayerRef.current) {
      tileLayerRef.current.remove();
    }

    const provider = BASEMAP_PROVIDERS[activeBasemap];
    const newTileLayer = L.tileLayer(provider.url, {
      attribution: provider.attribution,
      maxZoom: provider.maxZoom,
    }).addTo(mapInstanceRef.current);

    tileLayerRef.current = newTileLayer;

    newTileLayer.bringToBack();
  }, [activeBasemap]);

  // Update Center when City Changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const center = CITY_COORDINATES[city];
    mapInstanceRef.current.flyTo(center, 11, { duration: 1.2 });
  }, [city]);

  // Render Hotspots Markers
  useEffect(() => {
    if (!markersLayerRef.current || !mapInstanceRef.current) return;

    markersLayerRef.current.clearLayers();

    hotspots.forEach((hs) => {
      const [lon, lat] = hs.geometry.coordinates;
      const { severity, lst, predicted_lst, id, primary_driver } = hs.properties;
      const color = SEVERITY_COLORS[severity] || '#3b82f6';
      const radius = severity === 'Critical' ? 8 : severity === 'Severe' ? 7 : severity === 'High' ? 5 : 4;

      const marker = L.circleMarker([lat, lon], {
        radius: radius,
        fillColor: color,
        color: severity === 'Critical' ? '#ffffff' : '#0f172a',
        weight: severity === 'Critical' ? 2 : 1,
        opacity: 0.95,
        fillOpacity: 0.85,
      });

      marker.bindTooltip(
        `<div style="font-family: sans-serif; line-height: 1.4;">
          <strong style="color: #38bdf8;">${id}</strong> &bull; <span style="color: ${color}; font-weight: bold;">${severity}</span><br/>
          Observed LST: <b>${lst}°C</b> (Pred: ${predicted_lst}°C)<br/>
          <span style="color: #94a3b8; font-size: 11px;">${primary_driver}</span>
        </div>`,
        { className: 'leaflet-tooltip-dark', direction: 'top', offset: [0, -6] }
      );

      marker.on('click', () => {
        onSelectHotspot(hs);
      });

      markersLayerRef.current?.addLayer(marker);
    });
  }, [hotspots, onSelectHotspot]);

  // Highlight Selected Hotspot
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    if (selectedHighlightRef.current) {
      selectedHighlightRef.current.remove();
      selectedHighlightRef.current = null;
    }

    if (selectedHotspot) {
      const [lon, lat] = selectedHotspot.geometry.coordinates;
      const highlight = L.circleMarker([lat, lon], {
        radius: 16,
        fillColor: 'transparent',
        color: '#38bdf8',
        weight: 3,
        dashArray: '5, 5',
      }).addTo(mapInstanceRef.current);

      selectedHighlightRef.current = highlight;
      mapInstanceRef.current.panTo([lat, lon], { animate: true, duration: 0.6 });
    }
  }, [selectedHotspot]);

  const handleResetView = () => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo(CITY_COORDINATES[city], 11);
  };

  return (
    <div className="map-workstation-container">
      {/* Top Map Control Toolbar */}
      <div className="map-toolbar">
        <div className="toolbar-left">
          <span className="mission-tag">RADAR SENSOR VIEW</span>
          <span className="hotspot-count-pill">{hotspots.length} Thermal Hotspots In View</span>
        </div>

        <div className="toolbar-right">
          {/* Basemap Switcher */}
          <div className="basemap-button-group">
            <button
              type="button"
              className={`basemap-btn ${activeBasemap === 'satellite' ? 'active' : ''}`}
              onClick={() => setActiveBasemap('satellite')}
              title="True-Color Satellite Imagery (Esri World Imagery)"
            >
              🛰️ Satellite
            </button>
            <button
              type="button"
              className={`basemap-btn ${activeBasemap === 'dark' ? 'active' : ''}`}
              onClick={() => setActiveBasemap('dark')}
              title="High-Contrast Dark Canvas (Esri Canvas)"
            >
              🌌 Dark Slate
            </button>
            <button
              type="button"
              className={`basemap-btn ${activeBasemap === 'street' ? 'active' : ''}`}
              onClick={() => setActiveBasemap('street')}
              title="OpenStreetMap Street Grid"
            >
              🗺️ Street
            </button>
          </div>

          <button
            type="button"
            className="recenter-btn"
            onClick={handleResetView}
            title="Recenter Map View"
          >
            🎯 Recenter
          </button>
        </div>
      </div>

      {/* Main Leaflet Canvas */}
      <div className="map-canvas-wrapper">
        <div ref={mapContainerRef} className="leaflet-map-canvas" />

        {/* Floating HUD Inspector Overlay */}
        {selectedHotspot && (
          <div className="floating-hud-inspector">
            <div className="hud-header">
              <span className="hud-id">{selectedHotspot.properties.id}</span>
              <span className={`hud-severity-badge badge-${selectedHotspot.properties.severity.toLowerCase()}`}>
                {selectedHotspot.properties.severity} (&gt;P{selectedHotspot.properties.city_percentile.toFixed(0)})
              </span>
            </div>

            <div className="hud-metrics-row">
              <div className="hud-stat">
                <span className="stat-name">Observed LST</span>
                <span className="stat-val text-amber">{selectedHotspot.properties.lst}°C</span>
              </div>
              <div className="hud-stat">
                <span className="stat-name">Model Prediction</span>
                <span className="stat-val text-cyan">{selectedHotspot.properties.predicted_lst}°C</span>
              </div>
              <div className="hud-stat">
                <span className="stat-name">Est. Air Temp</span>
                <span className="stat-val">{selectedHotspot.properties.air_temp.toFixed(1)}°C</span>
              </div>
            </div>

            <div className="hud-driver-row">
              <span className="driver-label">Primary Driver:</span>
              <span className="driver-text">{selectedHotspot.properties.primary_driver}</span>
            </div>

            <div className="hud-action-row">
              <span className="action-label">Recommendation:</span>
              <span className="action-text">{selectedHotspot.properties.recommended_action}</span>
            </div>

            {onTriggerSimulator && (
              <button
                type="button"
                className="btn-hud-simulate"
                onClick={onTriggerSimulator}
              >
                ⚡ Open Counterfactual Scenario Studio &rarr;
              </button>
            )}
          </div>
        )}

        {/* Thermal Color Scale Bar (Bottom-Right) */}
        <div className="thermal-scale-legend">
          <div className="scale-title">Thermal Scale (LST)</div>
          <div className="scale-gradient-bar"></div>
          <div className="scale-labels">
            <span>35°C</span>
            <span>42°C</span>
            <span>46°C</span>
            <span>52°C+</span>
          </div>
          <div className="scale-legend-dots">
            <span><i className="dot dot-critical"></i> &gt;P99</span>
            <span><i className="dot dot-severe"></i> P95-99</span>
            <span><i className="dot dot-high"></i> P90-95</span>
            <span><i className="dot dot-moderate"></i> P75-90</span>
          </div>
        </div>

        {/* Live Coordinate Cursor Readout (Bottom-Left) */}
        {cursorCoords && (
          <div className="cursor-coords-hud">
            <span>LAT: <b>{cursorCoords.lat}°N</b></span>
            <span>LON: <b>{cursorCoords.lng}°E</b></span>
            <span>RES: <b>100m Grid</b></span>
          </div>
        )}
      </div>
    </div>
  );
};
