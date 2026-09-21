import { useState, type FC } from 'react';
import type { HotspotFeature, InterventionType, InterventionResponse } from '../simulation/types';
import { runInterventionSimulation } from '../simulation/apiService';

interface OptimizerPanelProps {
  selectedHotspot: HotspotFeature | null;
}

const INTERVENTIONS: Array<{ id: InterventionType; icon: string; name: string; desc: string }> = [
  {
    id: 'urban_greening',
    icon: '🌳',
    name: 'Urban Greening & Tree Canopy',
    desc: 'Dense tree planting coupling +NDVI, -NDBI, -DistToVeg, and -Imperviousness',
  },
  {
    id: 'cool_roof_coating',
    icon: '🏢',
    name: 'Cool Roof High-Albedo Coating',
    desc: 'Reflective roof coatings reducing sensible heat flux and thermal built-up index (NDBI)',
  },
  {
    id: 'pocket_park',
    icon: '🏞️',
    name: 'Pocket Parks & Micro-Oases',
    desc: 'Localized micro-parks increasing park coverage ratio and evapotranspirative cooling',
  },
  {
    id: 'canopy_corridor',
    icon: '🌿',
    name: 'Canopy Corridors & Road Buffers',
    desc: 'Linear roadside canopy reducing distance to vegetation and asphalt solar exposure',
  },
];

export const OptimizerPanel: FC<OptimizerPanelProps> = ({ selectedHotspot }) => {
  const [interventionType, setInterventionType] = useState<InterventionType>('urban_greening');
  const [intensity, setIntensity] = useState<number>(25);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<InterventionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSimulate = async () => {
    if (!selectedHotspot) return;
    setLoading(true);
    setError(null);
    try {
      const res = await runInterventionSimulation(
        selectedHotspot,
        interventionType,
        intensity / 100
      );
      setResult(res);
    } catch (e: any) {
      setError(e.message || 'Simulation error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="optimizer-tab-pane">
      <div className="pane-title-row">
        <div>
          <h4>Counterfactual Scenario Studio</h4>
          <p className="pane-subtitle">Simulate microclimate mitigation interventions via coupled ML feature adjustments</p>
        </div>
        <span className="badge-pill badge-ml">XGBoost Heuristics</span>
      </div>

      {!selectedHotspot ? (
        <div className="empty-selection-callout">
          <div className="callout-icon">🎯</div>
          <div className="callout-text">Select any hotspot on the map or registry to launch mitigation scenarios</div>
        </div>
      ) : (
        <div className="optimizer-content-flow">
          {/* Target Hotspot Bar */}
          <div className="target-hotspot-card">
            <div className="card-top">
              <span className="target-id">{selectedHotspot.properties.id}</span>
              <span className={`badge-pill badge-${selectedHotspot.properties.severity.toLowerCase()}`}>
                {selectedHotspot.properties.severity} Hotspot
              </span>
            </div>
            <div className="card-values">
              <div>Observed LST: <strong className="text-amber">{selectedHotspot.properties.lst}°C</strong></div>
              <div>Pred: <strong>{selectedHotspot.properties.predicted_lst}°C</strong></div>
              <div>Driver: <span className="driver-pill">{selectedHotspot.properties.primary_driver}</span></div>
            </div>
          </div>

          {/* Intervention Selection */}
          <div className="control-group">
            <label className="control-label">SELECT MITIGATION SCENARIO</label>
            <div className="interventions-vertical-list">
              {INTERVENTIONS.map((item) => (
                <div
                  key={item.id}
                  className={`intervention-card-item ${interventionType === item.id ? 'active' : ''}`}
                  onClick={() => {
                    setInterventionType(item.id);
                    setResult(null);
                  }}
                >
                  <span className="item-emoji">{item.icon}</span>
                  <div className="item-text">
                    <div className="item-name">{item.name}</div>
                    <div className="item-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Intensity Slider */}
          <div className="control-group">
            <div className="slider-header-row">
              <label className="control-label">INTERVENTION INTENSITY</label>
              <span className="intensity-badge">{intensity}% Magnitude</span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="5"
              value={intensity}
              onChange={(e) => {
                setIntensity(Number(e.target.value));
                setResult(null);
              }}
              className="intensity-slider"
            />
            <div className="slider-labels">
              <span>10% (Low)</span>
              <span>25% (Standard Plan)</span>
              <span>50% (Aggressive Target)</span>
            </div>
          </div>

          <button
            type="button"
            className="btn-primary-simulate"
            onClick={handleSimulate}
            disabled={loading}
          >
            {loading ? 'Simulating Feature Shifts...' : '⚡ Run Counterfactual ML Simulation'}
          </button>

          {error && <div className="sim-alert-box error">{error}</div>}

          {result && (
            <div className="simulation-results-deck">
              <div className="cooling-hero-banner">
                <span className="hero-label">PREDICTED SURFACE COOLING</span>
                <div className="hero-delta">
                  -{result.cooling_effect_degC.toFixed(2)}°C
                </div>
                <div className="hero-transition">
                  Baseline: <b>{result.baseline_lst.toFixed(1)}°C</b> &rarr; Mitigated: <b>{result.scenario_lst.toFixed(1)}°C</b>
                </div>
              </div>

              {/* Coupled physical shifts table */}
              <div className="shifts-table-container">
                <div className="shifts-header">Coupled Physical Feature Shifts</div>
                <div className="shifts-rows">
                  {Object.entries(result.coupled_feature_changes).map(([k, v]) => (
                    <div key={k} className="shift-line">
                      <span className="shift-key">{k}</span>
                      <span className="shift-val">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="methodology-footnote">
                <strong>Methodology:</strong> {result.methodology}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
