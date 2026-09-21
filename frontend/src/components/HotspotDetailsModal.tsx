import { useState, type FC } from 'react';
import { ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';
import type { HotspotFeature } from '../simulation/types';

interface HotspotDetailsModalProps {
  hotspot: HotspotFeature | null;
  onBack: () => void;
  onOpenSimulator?: (hotspot: HotspotFeature) => void;
}

export const HotspotDetailsModal: FC<HotspotDetailsModalProps> = ({
  hotspot,
  onBack,
  onOpenSimulator,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'factors' | 'mitigation'>('overview');

  const id = hotspot?.properties.id || 'HS-045';
  const severity = hotspot?.properties.severity || 'Critical';
  const lst = hotspot?.properties.lst ?? 45.8;
  const predLst = hotspot?.properties.predicted_lst ?? 44.9;
  const city = hotspot?.properties.city || 'Delhi';
  const driver = hotspot?.properties.primary_driver || 'High Built-up Density';
  const action = hotspot?.properties.recommended_action || 'Implement cool roofs and urban canopy';
  const ndvi = hotspot?.properties.ndvi ?? 0.12;
  const ndbi = hotspot?.properties.ndbi ?? 0.38;
  const distVeg = hotspot?.properties.dist_to_veg ?? 185;
  const bldgDensity = hotspot?.properties.building_density ?? 0.74;
  const imperv = hotspot?.properties.impervious_surface_ratio ?? 0.82;
  const airTemp = hotspot?.properties.air_temp ?? 38.4;

  return (
    <div className="hotspot-details-page-wrapper">
      {/* Top Header Bar */}
      <div className="details-header-bar">
        <button type="button" className="details-back-btn" onClick={onBack}>
          <ArrowLeft size={18} />
          <span>Hotspot Details</span>
        </button>

        {/* Tab Navigation */}
        <div className="details-nav-tabs">
          <button
            type="button"
            className={`details-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            type="button"
            className={`details-tab-btn ${activeTab === 'factors' ? 'active' : ''}`}
            onClick={() => setActiveTab('factors')}
          >
            Contributing Factors
          </button>
          <button
            type="button"
            className={`details-tab-btn ${activeTab === 'mitigation' ? 'active' : ''}`}
            onClick={() => setActiveTab('mitigation')}
          >
            Mitigation Suggestions
          </button>
        </div>
      </div>

      {/* Main Details Card */}
      <div className="card hotspot-details-card">
        {/* Left Column: Mini Map & Attributes */}
        <div className="details-left-column">
          {/* Mini Satellite Map View */}
          <div className="mini-boundary-map">
            <svg viewBox="0 0 240 140" className="mini-map-svg">
              {/* Background map grid */}
              <rect width="240" height="140" fill="#f1f5f9" />
              <path d="M 0 40 Q 120 70 240 30" stroke="#cbd5e1" strokeWidth="3" fill="none" />
              <path d="M 50 0 Q 70 70 90 140" stroke="#e2e8f0" strokeWidth="2" fill="none" />
              <path d="M 160 0 Q 150 70 180 140" stroke="#e2e8f0" strokeWidth="2" fill="none" />
              {/* Hotspot polygon boundary */}
              <polygon
                points="85,45 145,35 165,75 130,105 80,90"
                fill="rgba(239, 68, 68, 0.25)"
                stroke="#ef4444"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
              <circle cx="120" cy="65" r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
            </svg>
          </div>

          <div className="hotspot-meta-block">
            <div className="meta-id-row">
              <div>
                <span className="meta-sublabel">Hotspot ID</span>
                <div className="meta-id-text">{id}</div>
              </div>
              <span className={`risk-badge-pill badge-${severity.toLowerCase()}`}>
                {severity === 'Critical' ? 'Very High Risk' : `${severity} Risk`}
              </span>
            </div>

            <div className="meta-stats-grid">
              <div className="meta-stat-item">
                <span className="meta-stat-label">Area</span>
                <span className="meta-stat-val">2.34 km²</span>
              </div>
              <div className="meta-stat-item">
                <span className="meta-stat-label">Avg LST</span>
                <span className="meta-stat-val text-red">{lst}°C</span>
              </div>
              <div className="meta-stat-item">
                <span className="meta-stat-label">Population (Est.)</span>
                <span className="meta-stat-val">18,520</span>
              </div>
              <div className="meta-stat-item">
                <span className="meta-stat-label">Location</span>
                <span className="meta-stat-val">{city} ({driver})</span>
              </div>
            </div>

            {onOpenSimulator && hotspot && (
              <button
                type="button"
                className="btn-open-sim-cta"
                onClick={() => onOpenSimulator(hotspot)}
              >
                <Sparkles size={15} />
                <span>Test in Mitigation Simulator</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Dynamic Content by Tab */}
        <div className="details-right-column">
          {/* TAB 1: OVERVIEW (Shows both factors and actions) */}
          {activeTab === 'overview' && (
            <>
              <div className="details-section">
                <h4 className="section-title">Contributing Factors</h4>
                <div className="factors-bars-stack">
                  <div className="factor-bar-row">
                    <span className="factor-name">Built-up Density</span>
                    <div className="factor-track">
                      <div className="factor-fill" style={{ width: '81%', background: '#ef4444' }} />
                    </div>
                    <span className="factor-score">0.81</span>
                  </div>
                  <div className="factor-bar-row">
                    <span className="factor-name">Low Vegetation</span>
                    <div className="factor-track">
                      <div className="factor-fill" style={{ width: '76%', background: '#f97316' }} />
                    </div>
                    <span className="factor-score">0.76</span>
                  </div>
                  <div className="factor-bar-row">
                    <span className="factor-name">Low Water Bodies</span>
                    <div className="factor-track">
                      <div className="factor-fill" style={{ width: '32%', background: '#f59e0b' }} />
                    </div>
                    <span className="factor-score">0.32</span>
                  </div>
                  <div className="factor-bar-row">
                    <span className="factor-name">Low Wind Speed</span>
                    <div className="factor-track">
                      <div className="factor-fill" style={{ width: '28%', background: '#22c55e' }} />
                    </div>
                    <span className="factor-score">0.28</span>
                  </div>
                </div>
              </div>

              <div className="details-section">
                <h4 className="section-title">Recommended Actions</h4>
                <ul className="recommended-actions-list">
                  <li>
                    <span className="action-bullet">&bull;</span>
                    <span>Increase tree canopy and green cover along road buffers and pocket parks</span>
                  </li>
                  <li>
                    <span className="action-bullet">&bull;</span>
                    <span>Implement high-albedo cool roofs on large commercial and institutional buildings</span>
                  </li>
                  <li>
                    <span className="action-bullet">&bull;</span>
                    <span>Introduce water retention bodies and urban blue infrastructure to enhance micro-evaporation</span>
                  </li>
                  <li>
                    <span className="action-bullet">&bull;</span>
                    <span>Use permeable, high-albedo materials for pavements and transit parking corridors</span>
                  </li>
                  <li>
                    <span className="action-bullet">&bull;</span>
                    <span>{action}</span>
                  </li>
                </ul>
              </div>
            </>
          )}

          {/* TAB 2: CONTRIBUTING FACTORS (Detailed Telemetry & Local SHAP Attribution) */}
          {activeTab === 'factors' && (
            <div className="details-section">
              <h4 className="section-title">Detailed Local Attribution &amp; Satellite Telemetry</h4>
              <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '14px' }}>
                Extracted from Landsat-8 TIRS thermal band, Sentinel-2 spectral indices, and OpenStreetMap building morphology.
              </p>

              <div className="telemetry-sensor-grid-light">
                <div className="telemetry-sensor-card">
                  <span className="sensor-card-label">Observed vs Model Pred</span>
                  <div className="sensor-card-val">
                    <span className="text-red">{lst}°C</span>
                    <span className="val-sub">/ {predLst}°C</span>
                  </div>
                </div>
                <div className="telemetry-sensor-card">
                  <span className="sensor-card-label">NDBI (Built-up Index)</span>
                  <div className="sensor-card-val text-amber">{ndbi.toFixed(3)}</div>
                </div>
                <div className="telemetry-sensor-card">
                  <span className="sensor-card-label">NDVI (Canopy Index)</span>
                  <div className="sensor-card-val text-emerald">{ndvi.toFixed(3)}</div>
                </div>
                <div className="telemetry-sensor-card">
                  <span className="sensor-card-label">Impervious Surface Ratio</span>
                  <div className="sensor-card-val">{(imperv * 100).toFixed(1)}%</div>
                </div>
                <div className="telemetry-sensor-card">
                  <span className="sensor-card-label">Building Density</span>
                  <div className="sensor-card-val">{(bldgDensity * 100).toFixed(1)}%</div>
                </div>
                <div className="telemetry-sensor-card">
                  <span className="sensor-card-label">Distance to Canopy</span>
                  <div className="sensor-card-val">{distVeg.toFixed(0)} meters</div>
                </div>
                <div className="telemetry-sensor-card">
                  <span className="sensor-card-label">Ambient Air Temp</span>
                  <div className="sensor-card-val">{airTemp.toFixed(1)}°C</div>
                </div>
                <div className="telemetry-sensor-card">
                  <span className="sensor-card-label">Primary Driver</span>
                  <div className="sensor-card-val text-blue" style={{ fontSize: '12px' }}>{driver}</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MITIGATION SUGGESTIONS (Policy Checklist & Implementation Roadmap) */}
          {activeTab === 'mitigation' && (
            <div className="details-section">
              <h4 className="section-title">Targeted Mitigation Roadmap</h4>
              <div className="mitigation-cards-list">
                <div className="mitigation-action-card">
                  <div className="action-icon-circle green">🌳</div>
                  <div className="action-body">
                    <div className="action-heading">Tier 1: Urban Canopy Corridors</div>
                    <div className="action-desc">
                      Plant native avenue tree species (e.g. Neem, Peepal) with high shade factor to drop distance to canopy from {distVeg.toFixed(0)}m to &lt;60m. Estimated cooling: <b>-1.8°C</b>.
                    </div>
                  </div>
                </div>

                <div className="mitigation-action-card">
                  <div className="action-icon-circle blue">🏢</div>
                  <div className="action-body">
                    <div className="action-heading">Tier 2: Cool Roof High-Albedo Retrofits</div>
                    <div className="action-desc">
                      Apply high-solar-reflectance index (&gt;104 SRI) elastomeric coatings on residential and industrial rooftops across this {bldgDensity > 0.5 ? 'dense' : 'moderate'} building cluster. Estimated cooling: <b>-1.4°C</b>.
                    </div>
                  </div>
                </div>

                <div className="mitigation-action-card">
                  <div className="action-icon-circle cyan">🏞️</div>
                  <div className="action-body">
                    <div className="action-heading">Tier 3: Pocket Oases &amp; Permeable Pavers</div>
                    <div className="action-desc">
                      Convert non-permeable parking areas (currently {(imperv * 100).toFixed(0)}% impervious) into permeable bio-retention swales to enhance micro-evaporation.
                    </div>
                  </div>
                </div>
              </div>

              {onOpenSimulator && hotspot && (
                <div className="mitigation-cta-footer">
                  <button
                    type="button"
                    className="btn-open-sim-cta"
                    onClick={() => onOpenSimulator(hotspot)}
                    style={{ width: '100%', marginTop: '16px' }}
                  >
                    <CheckCircle2 size={16} />
                    <span>Run Full Simulation for {id} in Simulator &rarr;</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
