import { useState, useEffect, useRef, type FC } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  Thermometer,
  Leaf,
  Wind,
  Droplets,
  Calendar,
  Bell,
  ChevronDown,
  Maximize2,
  X,
  AlertTriangle,
} from 'lucide-react';
import type { CityName, HotspotFeature } from '../simulation/types';
import { getHotspotColor, HOTSPOT_SCALE } from '../simulation/thermalScale';

interface OverviewViewProps {
  currentCity: CityName;
  onCityChange: (city: CityName) => void;
  hotspots: HotspotFeature[];
  selectedHotspot: HotspotFeature | null;
  onSelectHotspot: (hotspot: HotspotFeature) => void;
  onViewHotspotDetails: (hotspot: HotspotFeature) => void;
}

const CITY_COORDINATES: Record<CityName, [number, number]> = {
  Delhi: [28.65, 77.18],
  Bengaluru: [12.97, 77.59],
  Lucknow: [26.85, 80.94],
  Kanpur: [26.46, 80.33],
};

const CITY_LANDMARKS: Record<CityName, Array<{ name: string; lat: number; lng: number }>> = {
  Delhi: [
    { name: 'Rohini', lat: 28.71, lng: 77.12 },
    { name: 'Connaught Place', lat: 28.63, lng: 77.22 },
    { name: 'Noida', lat: 28.57, lng: 77.33 },
    { name: 'Gurugram', lat: 28.46, lng: 77.03 },
  ],
  Bengaluru: [
    { name: 'Electronic City', lat: 12.84, lng: 77.66 },
    { name: 'Whitefield', lat: 12.97, lng: 77.75 },
    { name: 'Koramangala', lat: 12.93, lng: 77.62 },
    { name: 'Indiranagar', lat: 12.98, lng: 77.64 },
    { name: 'Peenya', lat: 13.03, lng: 77.52 },
  ],
  Lucknow: [
    { name: 'Gomti Nagar', lat: 26.86, lng: 81.00 },
    { name: 'Hazratganj', lat: 26.85, lng: 80.94 },
    { name: 'Alambagh', lat: 26.81, lng: 80.90 },
    { name: 'Charbagh', lat: 26.83, lng: 80.92 },
  ],
  Kanpur: [
    { name: 'Kalyanpur', lat: 26.50, lng: 80.24 },
    { name: 'Civil Lines', lat: 26.48, lng: 80.35 },
    { name: 'Govind Nagar', lat: 26.44, lng: 80.30 },
    { name: 'Jajmau', lat: 26.43, lng: 80.40 },
  ],
};

const CITY_METRICS: Record<
  CityName,
  {
    temp: number;
    ndvi: number;
    wind: number;
    humidity: number;
    totalZones: number;
    veryHigh: number;
    high: number;
    moderate: number;
    low: number;
    factors: Array<{ name: string; score: number; color: string }>;
  }
> = {
  Delhi: {
    temp: 42.3,
    ndvi: 0.32,
    wind: 3.6,
    humidity: 46,
    totalZones: 115,
    veryHigh: 32,
    high: 83,
    moderate: 61,
    low: 24,
    factors: [
      { name: 'Built-up Density', score: 0.72, color: '#ef4444' },
      { name: 'Low Vegetation', score: 0.64, color: '#f97316' },
      { name: 'High LST', score: 0.61, color: '#f59e0b' },
      { name: 'Low Wind Speed', score: 0.38, color: '#22c55e' },
      { name: 'Low Water Bodies', score: 0.27, color: '#3b82f6' },
    ],
  },
  Bengaluru: {
    temp: 36.8,
    ndvi: 0.48,
    wind: 4.2,
    humidity: 58,
    totalZones: 94,
    veryHigh: 18,
    high: 62,
    moderate: 74,
    low: 35,
    factors: [
      { name: 'High Built-up', score: 0.68, color: '#ef4444' },
      { name: 'Concrete Surface Growth', score: 0.62, color: '#f97316' },
      { name: 'Low Canopy Buffer', score: 0.54, color: '#f59e0b' },
      { name: 'Lake Encroachment', score: 0.44, color: '#3b82f6' },
      { name: 'Road Thermal Mass', score: 0.35, color: '#22c55e' },
    ],
  },
  Lucknow: {
    temp: 41.5,
    ndvi: 0.35,
    wind: 3.1,
    humidity: 49,
    totalZones: 102,
    veryHigh: 28,
    high: 71,
    moderate: 55,
    low: 20,
    factors: [
      { name: 'Built-up Density', score: 0.70, color: '#ef4444' },
      { name: 'Low Vegetation', score: 0.65, color: '#f97316' },
      { name: 'Low Wind Velocity', score: 0.40, color: '#22c55e' },
      { name: 'Dry Soil Load', score: 0.36, color: '#f59e0b' },
      { name: 'River Buffer Distance', score: 0.25, color: '#3b82f6' },
    ],
  },
  Kanpur: {
    temp: 42.8,
    ndvi: 0.29,
    wind: 3.4,
    humidity: 44,
    totalZones: 110,
    veryHigh: 35,
    high: 79,
    moderate: 58,
    low: 18,
    factors: [
      { name: 'Industrial Built Load', score: 0.76, color: '#ef4444' },
      { name: 'Low Vegetation Ratio', score: 0.69, color: '#f97316' },
      { name: 'High Impervious Mass', score: 0.65, color: '#f59e0b' },
      { name: 'Low Water Bodies', score: 0.31, color: '#3b82f6' },
      { name: 'Thermal Exhaust Flux', score: 0.29, color: '#22c55e' },
    ],
  },
};

export const OverviewView: FC<OverviewViewProps> = ({
  currentCity,
  onCityChange,
  hotspots,
  onSelectHotspot,
  onViewHotspotDetails,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const initialCenterRef = useRef(CITY_COORDINATES[currentCity]);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersGroupRef = useRef<L.LayerGroup | null>(null);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [alertsPopoverOpen, setAlertsPopoverOpen] = useState(false);

  const cityData = CITY_METRICS[currentCity] || CITY_METRICS['Delhi'];

  // Initialize Map with clean light/warm tiles
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: initialCenterRef.current,
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

    const markersGroup = L.layerGroup().addTo(map);
    markersGroupRef.current = markersGroup;
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update center when city changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.setView(CITY_COORDINATES[currentCity], 11, { animate: true });
  }, [currentCity]);

  // Render heat colored circles and landmarks
  useEffect(() => {
    if (!markersGroupRef.current || !mapInstanceRef.current) return;

    markersGroupRef.current.clearLayers();

    // Prominent landmark labels for current city
    const landmarks = CITY_LANDMARKS[currentCity] || [];
    landmarks.forEach((lm) => {
      const labelMarker = L.marker([lm.lat, lm.lng], {
        icon: L.divIcon({
          className: 'map-neighborhood-label',
          html: `<span>${lm.name}</span>`,
          iconSize: [110, 20],
        }),
      });
      markersGroupRef.current?.addLayer(labelMarker);
    });

    // Render hotspot zones
    hotspots.forEach((hs) => {
      const [lon, lat] = hs.geometry.coordinates;
      const { lst, severity, id, primary_driver } = hs.properties;

      const color = getHotspotColor(severity);

      const circle = L.circleMarker([lat, lon], {
        radius: severity === 'Critical' ? 9 : severity === 'Severe' ? 7 : 5,
        fillColor: color,
        color: '#ffffff',
        weight: 1.5,
        opacity: 0.9,
        fillOpacity: 0.85,
      });

      circle.bindTooltip(
        `<strong>${id}</strong> (${severity})<br/>LST: <b>${lst}°C</b><br/>${primary_driver}<br/><span style="color:#2563eb; font-size:10px;">Click to inspect &rarr;</span>`,
        { direction: 'top', className: 'overview-map-tooltip' }
      );

      circle.on('click', () => {
        onSelectHotspot(hs);
        onViewHotspotDetails(hs);
      });

      markersGroupRef.current?.addLayer(circle);
    });
  }, [hotspots, currentCity, onSelectHotspot, onViewHotspotDetails]);

  return (
    <div className="overview-container">
      {/* Top Header Row */}
      <header className="overview-header">
        <div className="header-titles">
          <h1 className="page-heading">Overview</h1>
          <p className="page-subheading">Monitor, Analyze &amp; Mitigate Urban Heat Islands</p>
        </div>

        <div className="header-actions">
          {/* City Selector Dropdown */}
          <div className="city-dropdown-wrapper">
            <button
              type="button"
              className="city-selector-btn"
              onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
            >
              <span className="pin-icon">📍</span>
              <span className="current-city-text">{currentCity}</span>
              <ChevronDown size={15} />
            </button>

            {cityDropdownOpen && (
              <div className="city-dropdown-menu">
                {(['Delhi', 'Bengaluru', 'Lucknow', 'Kanpur'] as CityName[]).map((city) => (
                  <div
                    key={city}
                    className={`dropdown-city-item ${currentCity === city ? 'active' : ''}`}
                    onClick={() => {
                      onCityChange(city);
                      setCityDropdownOpen(false);
                    }}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Date Picker Badge */}
          <div className="date-indicator-badge">
            <Calendar size={15} className="date-icon" />
            <span>24 May 2025</span>
          </div>

          {/* Notifications Button with Popover */}
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              className="notifications-bell-btn"
              title="View Alerts"
              onClick={() => setAlertsPopoverOpen(!alertsPopoverOpen)}
            >
              <Bell size={18} />
              <span className="bell-badge-indicator" />
            </button>

            {alertsPopoverOpen && (
              <div className="alerts-dropdown-popover">
                <div className="popover-head">
                  <span>Satellite Thermal Alerts</span>
                  <button
                    type="button"
                    className="close-popover-btn"
                    onClick={() => setAlertsPopoverOpen(false)}
                  >
                    <X size={14} />
                  </button>
                </div>
                <div className="popover-body">
                  <div className="alert-pop-item">
                    <AlertTriangle size={15} className="text-red" />
                    <div>
                      <div className="alert-pop-title">Connaught Place Thermal Spike</div>
                      <div className="alert-pop-sub">LST reached 46.2°C (P99 exceeded)</div>
                    </div>
                  </div>
                  <div className="alert-pop-item">
                    <AlertTriangle size={15} className="text-orange" />
                    <div>
                      <div className="alert-pop-title">Industrial Corridor Heat Advisory</div>
                      <div className="alert-pop-sub">Kanpur Jajmau LST 45.4°C</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Top 4 KPI Cards */}
      <div className="kpi-cards-grid">
        {/* Card 1: LST */}
        <div className="kpi-metric-card">
          <div className="kpi-card-header">
            <span className="kpi-label">Avg Land Surface Temp.</span>
            <div className="kpi-icon-circle icon-red">
              <Thermometer size={18} />
            </div>
          </div>
          <div className="kpi-value-row">
            <span className="kpi-main-val">{cityData.temp} °C</span>
          </div>
          <div className="kpi-trend text-trend-red">
            ↑ 2.6 °C vs last year
          </div>
        </div>

        {/* Card 2: NDVI */}
        <div className="kpi-metric-card">
          <div className="kpi-card-header">
            <span className="kpi-label">Avg NDVI</span>
            <div className="kpi-icon-circle icon-green">
              <Leaf size={18} />
            </div>
          </div>
          <div className="kpi-value-row">
            <span className="kpi-main-val">{cityData.ndvi}</span>
          </div>
          <div className="kpi-trend text-trend-green">
            ↑ 8% vs last year
          </div>
        </div>

        {/* Card 3: Wind Speed */}
        <div className="kpi-metric-card">
          <div className="kpi-card-header">
            <span className="kpi-label">Avg Wind Speed</span>
            <div className="kpi-icon-circle icon-blue">
              <Wind size={18} />
            </div>
          </div>
          <div className="kpi-value-row">
            <span className="kpi-main-val">{cityData.wind} m/s</span>
          </div>
          <div className="kpi-trend text-trend-gray">
            ↔ Similar to last year
          </div>
        </div>

        {/* Card 4: Humidity */}
        <div className="kpi-metric-card">
          <div className="kpi-card-header">
            <span className="kpi-label">Avg Humidity</span>
            <div className="kpi-icon-circle icon-purple">
              <Droplets size={18} />
            </div>
          </div>
          <div className="kpi-value-row">
            <span className="kpi-main-val">{cityData.humidity} %</span>
          </div>
          <div className="kpi-trend text-trend-purple">
            ↓ 3% vs last year
          </div>
        </div>
      </div>

      {/* Main Grid: LST Map & Hotspot Summary */}
      <div className="overview-main-row">
        {/* Left Map Card */}
        <div className="card overview-map-card">
          <div className="card-title-bar">
            <h3 className="card-title">City-relative Thermal Hotspots</h3>
            <button
              type="button"
              className="map-fullscreen-icon-btn"
              onClick={() => mapInstanceRef.current?.setView(CITY_COORDINATES[currentCity], 11)}
              title="Recenter Map View"
            >
              <Maximize2 size={16} />
            </button>
          </div>

          <div className="map-view-wrapper">
            <div ref={mapContainerRef} className="overview-leaflet-map" />

            {/* This overview plots hotspot anomalies, so its legend is percentile-based. */}
            <div className="floating-lst-legend">
              <div className="legend-head">Hotspot Severity</div>
              {HOTSPOT_SCALE.map((stop) => (
                <div className="legend-row" key={stop.severity}>
                  <span className="hotspot-legend-dot" style={{ background: stop.color }} />
                  <span>{stop.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Hotspot Summary Card */}
        <div className="card hotspot-summary-card">
          <h3 className="card-title">Hotspot Summary</h3>

          {/* Semi-circular radial gauge */}
          <div className="radial-gauge-wrapper">
            <svg viewBox="0 0 200 110" className="gauge-svg">
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d="M 20 100 A 80 80 0 0 1 155 45"
                fill="none"
                stroke="url(#gaugeGradient)"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="40%" stopColor="#eab308" />
                  <stop offset="80%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
            </svg>

            <div className="gauge-inner-content">
              <span className="gauge-big-num">{cityData.totalZones}</span>
              <span className="gauge-sub">Hotspot Zones</span>
              <span className="gauge-risk-tag">High Risk</span>
            </div>
          </div>

          {/* Breakdown List */}
          <div className="hotspot-breakdown-list">
            <div className="breakdown-row">
              <div className="breakdown-label">
                <span className="bullet-dot" style={{ background: '#ef4444' }} />
                <span>Very High</span>
              </div>
              <span className="breakdown-num">{cityData.veryHigh}</span>
            </div>

            <div className="breakdown-row">
              <div className="breakdown-label">
                <span className="bullet-dot" style={{ background: '#f97316' }} />
                <span>High</span>
              </div>
              <span className="breakdown-num">{cityData.high}</span>
            </div>

            <div className="breakdown-row">
              <div className="breakdown-label">
                <span className="bullet-dot" style={{ background: '#eab308' }} />
                <span>Moderate</span>
              </div>
              <span className="breakdown-num">{cityData.moderate}</span>
            </div>

            <div className="breakdown-row">
              <div className="breakdown-label">
                <span className="bullet-dot" style={{ background: '#22c55e' }} />
                <span>Low</span>
              </div>
              <span className="breakdown-num">{cityData.low}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row (3 Cards): Top Factors, Mitigation Impact, Data Sources */}
      <div className="overview-bottom-grid">
        {/* 1. Top Contributing Factors */}
        <div className="card factors-card">
          <h3 className="card-title">Top Contributing Factors ({currentCity})</h3>
          <div className="factors-bars-stack">
            {cityData.factors.map((f) => (
              <div key={f.name} className="factor-bar-row">
                <span className="factor-name">{f.name}</span>
                <div className="factor-track">
                  <div
                    className="factor-fill"
                    style={{ width: `${f.score * 100}%`, background: f.color }}
                  />
                </div>
                <span className="factor-score">{f.score.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Mitigation Impact (Potential) */}
        <div className="card mitigation-impact-card">
          <h3 className="card-title">Mitigation Impact (Potential)</h3>
          <div className="mitigation-chart-wrapper">
            <svg viewBox="0 0 320 150" className="mitigation-svg-chart">
              <line x1="35" y1="20" x2="300" y2="20" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="35" y1="55" x2="300" y2="55" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="35" y1="90" x2="300" y2="90" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="35" y1="125" x2="300" y2="125" stroke="#e2e8f0" strokeWidth="1" />

              <text x="25" y="24" fontSize="10" fill="#94a3b8" textAnchor="end">4</text>
              <text x="25" y="59" fontSize="10" fill="#94a3b8" textAnchor="end">3</text>
              <text x="25" y="94" fontSize="10" fill="#94a3b8" textAnchor="end">2</text>
              <text x="25" y="129" fontSize="10" fill="#94a3b8" textAnchor="end">0</text>

              <polyline
                points="45,125 125,85 205,65 285,30"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <circle cx="45" cy="125" r="4" fill="#3b82f6" />
              <circle cx="125" cy="85" r="4" fill="#3b82f6" />
              <circle cx="205" cy="65" r="4" fill="#3b82f6" />
              <circle cx="285" cy="30" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />

              <text x="285" y="18" fontSize="11" fontWeight="bold" fill="#3b82f6" textAnchor="middle">
                3.8 °C
              </text>

              <text x="45" y="142" fontSize="9" fill="#94a3b8" textAnchor="middle">Current</text>
              <text x="125" y="142" fontSize="9" fill="#94a3b8" textAnchor="middle">+10% Green</text>
              <text x="205" y="142" fontSize="9" fill="#94a3b8" textAnchor="middle">Cool Roofs</text>
              <text x="285" y="142" fontSize="9" fill="#94a3b8" textAnchor="middle">+ Water Bodies</text>
            </svg>
          </div>
        </div>

        {/* 3. Data Sources */}
        <div className="card data-sources-card">
          <h3 className="card-title">Data Sources</h3>
          <div className="sources-badges-grid">
            <div className="source-item">
              <span className="source-icon-badge">🛰️</span>
              <span className="source-title">Landsat 8/9</span>
            </div>
            <div className="source-item">
              <span className="source-icon-badge">🛰️</span>
              <span className="source-title">Sentinel-2</span>
            </div>
            <div className="source-item">
              <span className="source-icon-badge">🌐</span>
              <span className="source-title">ERA5-Land</span>
            </div>
            <div className="source-item">
              <span className="source-icon-badge">🗺️</span>
              <span className="source-title">OpenStreetMap</span>
            </div>
            <div className="source-item">
              <span className="source-icon-badge">🏢</span>
              <span className="source-title">GHSL Built-up</span>
            </div>
            <div className="source-item">
              <span className="source-icon-badge">⛰️</span>
              <span className="source-title">SRTM DEM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
