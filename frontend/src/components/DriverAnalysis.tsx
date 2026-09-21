import type { FC } from 'react';
import type { ShapDriver, HotspotFeature } from '../simulation/types';

interface DriverAnalysisProps {
  drivers: ShapDriver[];
  selectedHotspot: HotspotFeature | null;
}

const DEFAULT_DRIVERS: ShapDriver[] = [
  { Feature: 'NDBI', Mean_Abs_SHAP_degC: 1.731, Relative_Contribution_Pct: 29.15 },
  { Feature: 'LULC', Mean_Abs_SHAP_degC: 0.665, Relative_Contribution_Pct: 11.20 },
  { Feature: 'NDWI', Mean_Abs_SHAP_degC: 0.650, Relative_Contribution_Pct: 10.94 },
  { Feature: 'DistToVeg', Mean_Abs_SHAP_degC: 0.519, Relative_Contribution_Pct: 8.74 },
  { Feature: 'Impervious_Surface_Ratio', Mean_Abs_SHAP_degC: 0.380, Relative_Contribution_Pct: 6.40 },
  { Feature: 'Building_Density', Mean_Abs_SHAP_degC: 0.344, Relative_Contribution_Pct: 5.80 },
  { Feature: 'NDVI', Mean_Abs_SHAP_degC: 0.320, Relative_Contribution_Pct: 5.39 },
  { Feature: 'SVF', Mean_Abs_SHAP_degC: 0.280, Relative_Contribution_Pct: 4.71 },
];

export const DriverAnalysis: FC<DriverAnalysisProps> = ({
  drivers,
  selectedHotspot,
}) => {
  const displayDrivers = drivers.length > 0 ? drivers.slice(0, 8) : DEFAULT_DRIVERS;
  const maxImpact = Math.max(...displayDrivers.map((d) => d.Mean_Abs_SHAP_degC));

  return (
    <div className="driver-analysis-pane">
      <div className="pane-title-row">
        <div>
          <h4>TreeSHAP Global & Local Interpretability</h4>
          <p className="pane-subtitle">Quantified feature contributions to model Land Surface Temperature predictions</p>
        </div>
        <span className="badge-pill badge-shap">SHAP TreeExplainer</span>
      </div>

      {/* Global SHAP Impact Bars */}
      <div className="shap-bars-container">
        <div className="bars-section-label">GLOBAL MULTI-CITY FEATURE IMPORTANCE</div>
        <div className="bars-stack">
          {displayDrivers.map((d) => {
            const widthPct = ((d.Mean_Abs_SHAP_degC / maxImpact) * 100).toFixed(0);
            return (
              <div key={d.Feature} className="shap-driver-bar">
                <div className="bar-meta">
                  <span className="driver-name">{d.Feature}</span>
                  <span className="driver-metrics">
                    <strong className="text-cyan">&plusmn;{d.Mean_Abs_SHAP_degC.toFixed(2)}°C</strong>{' '}
                    <span className="driver-pct">({d.Relative_Contribution_Pct.toFixed(1)}%)</span>
                  </span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${widthPct}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Hotspot Local Telemetry */}
      {selectedHotspot ? (
        <div className="local-hotspot-telemetry-box">
          <div className="telemetry-box-title">
            <span>Local Microclimate Profile &bull; <strong>{selectedHotspot.properties.id}</strong></span>
          </div>

          <div className="telemetry-sensor-grid">
            <div className="sensor-chip">
              <span className="sensor-label">NDBI (Built-up)</span>
              <span className="sensor-val text-amber">{selectedHotspot.properties.ndbi.toFixed(3)}</span>
            </div>
            <div className="sensor-chip">
              <span className="sensor-label">NDVI (Vegetation)</span>
              <span className="sensor-val text-emerald">{selectedHotspot.properties.ndvi.toFixed(3)}</span>
            </div>
            <div className="sensor-chip">
              <span className="sensor-label">Impervious Ratio</span>
              <span className="sensor-val">{(selectedHotspot.properties.impervious_surface_ratio * 100).toFixed(1)}%</span>
            </div>
            <div className="sensor-chip">
              <span className="sensor-label">Distance to Canopy</span>
              <span className="sensor-val">{selectedHotspot.properties.dist_to_veg.toFixed(0)} m</span>
            </div>
            <div className="sensor-chip">
              <span className="sensor-label">Building Density</span>
              <span className="sensor-val">{(selectedHotspot.properties.building_density * 100).toFixed(1)}%</span>
            </div>
            <div className="sensor-chip">
              <span className="sensor-label">Estimated Air Temp</span>
              <span className="sensor-val">{selectedHotspot.properties.air_temp.toFixed(1)}°C</span>
            </div>
          </div>

          <div className="policy-action-banner">
            <span className="policy-badge">RECOMMENDED MITIGATION:</span>
            <span className="policy-text">{selectedHotspot.properties.recommended_action}</span>
          </div>
        </div>
      ) : (
        <div className="empty-selection-callout">
          <div className="callout-icon">📊</div>
          <div className="callout-text">Click any hotspot on the map to inspect its local environmental sensor readings</div>
        </div>
      )}

      <div className="methodology-footnote">
        <strong>Scientific Notice:</strong> Mean absolute SHAP value represents the average magnitude of feature contribution to the model's prediction in °C, not causal physical warming.
      </div>
    </div>
  );
};
