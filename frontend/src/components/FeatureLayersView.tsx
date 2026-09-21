import { useState, useEffect, useRef, type FC } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { CityName } from '../simulation/types';

interface FeatureLayersViewProps {
  currentCity: CityName;
}

interface LayerOption {
  id: string;
  name: string;
  category: 'remote_sensing' | 'built' | 'osm';
  defaultActive: boolean;
  color: string;
}

const LAYERS: LayerOption[] = [
  { id: 'lst', name: 'LST (Land Surface Temp.)', category: 'remote_sensing', defaultActive: true, color: '#ef4444' },
  { id: 'ndvi', name: 'NDVI (Normalized Difference Veg)', category: 'remote_sensing', defaultActive: true, color: '#10b981' },
  { id: 'ndbi', name: 'NDBI (Built-up Index)', category: 'remote_sensing', defaultActive: false, color: '#f59e0b' },
  { id: 'ndwi', name: 'NDWI (Water Index)', category: 'remote_sensing', defaultActive: false, color: '#06b6d4' },
  { id: 'ndmi', name: 'NDMI (Moisture Index)', category: 'remote_sensing', defaultActive: false, color: '#8b5cf6' },
  { id: 'lulc', name: 'Land Use / Land Cover', category: 'built', defaultActive: true, color: '#eab308' },
  { id: 'ghsl', name: 'Built-up (GHSL Global Human Settlement)', category: 'built', defaultActive: false, color: '#f97316' },
  { id: 'dem', name: 'Elevation (SRTM DEM)', category: 'built', defaultActive: false, color: '#a855f7' },
  { id: 'roads', name: 'Roads (OSM High Capacity)', category: 'osm', defaultActive: false, color: '#64748b' },
  { id: 'buildings', name: 'Buildings (OSM / Overture)', category: 'osm', defaultActive: false, color: '#ef4444' },
  { id: 'parks', name: 'Parks & Oases (OSM)', category: 'osm', defaultActive: true, color: '#22c55e' },
  { id: 'water', name: 'Water Bodies & Canals (OSM)', category: 'osm', defaultActive: true, color: '#3b82f6' },
];

const CITY_COORDS: Record<CityName, [number, number]> = {
  Delhi: [28.65, 77.18],
  Bengaluru: [12.97, 77.59],
  Lucknow: [26.85, 80.94],
  Kanpur: [26.46, 80.33],
};

export const FeatureLayersView: FC<FeatureLayersViewProps> = ({ currentCity }) => {
  const [activeLayers, setActiveLayers] = useState<Set<string>>(
    new Set(LAYERS.filter((l) => l.defaultActive).map((l) => l.id))
  );

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const dynamicLayersGroupRef = useRef<L.LayerGroup | null>(null);

  const toggleLayer = (id: string) => {
    setActiveLayers((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: CITY_COORDS[currentCity],
      zoom: 11,
      zoomControl: false,
    });

    L.control.zoom({ position: 'topright' }).addTo(map);

    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: '&copy; Esri, DeLorme, NAVTEQ',
        maxZoom: 16,
      }
    ).addTo(map);

    const layerGroup = L.layerGroup().addTo(map);
    dynamicLayersGroupRef.current = layerGroup;
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update center when city changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.setView(CITY_COORDS[currentCity], 11);
  }, [currentCity]);

  // Dynamically redraw active feature layers
  useEffect(() => {
    if (!dynamicLayersGroupRef.current || !mapInstanceRef.current) return;

    dynamicLayersGroupRef.current.clearLayers();
    const [cLat, cLng] = CITY_COORDS[currentCity];

    // 1. LST thermal circles
    if (activeLayers.has('lst')) {
      const heatOffsets = [
        [0.02, 0.02, 47.2, '#ef4444'],
        [-0.03, 0.04, 45.8, '#f97316'],
        [0.05, -0.02, 44.1, '#eab308'],
        [-0.02, -0.04, 43.5, '#eab308'],
        [0.01, -0.05, 46.4, '#ef4444'],
      ];
      heatOffsets.forEach(([dLat, dLng, temp, col]) => {
        const marker = L.circle([cLat + (dLat as number), cLng + (dLng as number)], {
          radius: 1200,
          fillColor: col as string,
          color: '#ffffff',
          weight: 1,
          fillOpacity: 0.55,
        }).bindTooltip(`LST Surface Heat: ${temp}°C`, { className: 'overview-map-tooltip' });
        dynamicLayersGroupRef.current?.addLayer(marker);
      });
    }

    // 2. NDVI Vegetation
    if (activeLayers.has('ndvi') || activeLayers.has('parks')) {
      const vegOffsets = [
        [-0.04, 0.01, 'Protected Forest & Park Reserve', 1400],
        [0.03, 0.05, 'Botanical Garden & Urban Canopy', 1100],
        [-0.01, 0.06, 'Avenue Green Corridor', 900],
      ];
      vegOffsets.forEach(([dLat, dLng, name, rad]) => {
        const marker = L.circle([cLat + (dLat as number), cLng + (dLng as number)], {
          radius: rad as number,
          fillColor: '#10b981',
          color: '#059669',
          weight: 2,
          fillOpacity: 0.45,
        }).bindTooltip(`${name} (High NDVI > 0.65)`, { className: 'overview-map-tooltip' });
        dynamicLayersGroupRef.current?.addLayer(marker);
      });
    }

    // 3. Water Bodies (NDWI / OSM Water)
    if (activeLayers.has('water') || activeLayers.has('ndwi')) {
      const waterLine = L.polyline(
        [
          [cLat - 0.08, cLng - 0.03],
          [cLat - 0.02, cLng + 0.01],
          [cLat + 0.04, cLng + 0.03],
          [cLat + 0.09, cLng + 0.06],
        ],
        { color: '#0284c7', weight: 6, opacity: 0.7 }
      ).bindTooltip(`River Drainage & Retention Water Corridor`, { className: 'overview-map-tooltip' });
      dynamicLayersGroupRef.current?.addLayer(waterLine);
    }

    // 4. Roads
    if (activeLayers.has('roads')) {
      const roadLine = L.polyline(
        [
          [cLat - 0.05, cLng - 0.07],
          [cLat, cLng],
          [cLat + 0.06, cLng + 0.07],
        ],
        { color: '#475569', weight: 4, dashArray: '6 4' }
      ).bindTooltip('High-Capacity Arterial Corridor', { className: 'overview-map-tooltip' });
      dynamicLayersGroupRef.current?.addLayer(roadLine);
    }
  }, [activeLayers, currentCity]);

  return (
    <div className="feature-layers-container">
      <header className="view-header">
        <h1 className="page-heading">Feature Layers</h1>
        <p className="page-subheading">
          Toggle and visualize satellite, atmospheric &amp; urban morphology layers across {currentCity}
        </p>
      </header>

      <div className="feature-layers-grid">
        {/* Left Checkboxes List */}
        <div className="card layers-sidebar-card">
          <div className="layers-checklist">
            {LAYERS.map((layer) => {
              const checked = activeLayers.has(layer.id);
              return (
                <label key={layer.id} className="layer-checkbox-item">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleLayer(layer.id)}
                    className="custom-layer-checkbox"
                  />
                  <span
                    className="layer-color-dot"
                    style={{ background: layer.color }}
                  />
                  <span className={`layer-title ${checked ? 'active-text' : ''}`}>
                    {layer.name}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Right Interactive Layer Map */}
        <div className="card layers-map-card">
          <div className="layers-map-wrapper">
            <div ref={mapContainerRef} className="layers-leaflet-canvas" />

            {/* Active Layers Pill Overlay */}
            <div className="active-layers-overlay-pill">
              <span>
                Active GIS Layers: <b>{activeLayers.size} / {LAYERS.length}</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
