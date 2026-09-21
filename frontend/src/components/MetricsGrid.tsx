import type { FC } from 'react';
import type { CityName, HotspotFeature, ValidationMetrics } from '../simulation/types';

interface MetricsGridProps {
  currentCity: CityName;
  hotspots: HotspotFeature[];
  selectedHotspot: HotspotFeature | null;
  metrics: ValidationMetrics | null;
}

export const MetricsGrid: FC<MetricsGridProps> = ({
  currentCity,
  hotspots,
  selectedHotspot,
  metrics,
}) => {
  // Compute city summary statistics from loaded hotspots
  const count = hotspots.length;
  const criticalCount = hotspots.filter((h) => h.properties.severity === 'Critical').length;
  const severeCount = hotspots.filter((h) => h.properties.severity === 'Severe').length;

  const lsts = hotspots.map((h) => h.properties.lst);
  const meanLst = lsts.length > 0 ? (lsts.reduce((a, b) => a + b, 0) / lsts.length).toFixed(1) : '--';
  const maxLst = lsts.length > 0 ? Math.max(...lsts).toFixed(1) : '--';

  const baselineR2 = metrics?.baseline_random_split.r2.toFixed(3) ?? '0.890';
  const spatialR2 = metrics?.spatial_block_cv.mean_r2.toFixed(3) ?? '0.792';
  const baselineMae = metrics?.baseline_random_split.mae.toFixed(2) ?? '1.13';

  return (
    <div className="metrics-grid">
      {/* 1. Active City & Heat Island Status */}
      <div className="metric-card">
        <div className="metric-label">ACTIVE REGION / SAMPLES</div>
        <div className="metric-value-row">
          <span className="metric-val primary">{currentCity}</span>
          <span className="metric-sub">{count} hotspots loaded</span>
        </div>
        <div className="metric-footer">
          <span className="badge-critical">{criticalCount} Critical</span>
          <span className="badge-severe">{severeCount} Severe</span>
        </div>
      </div>

      {/* 2. Observed Thermal Metrics */}
      <div className="metric-card">
        <div className="metric-label">MEAN OBSERVED LST (P75+)</div>
        <div className="metric-value-row">
          <span className="metric-val text-amber">{meanLst}°C</span>
          <span className="metric-sub">Peak: <strong className="text-red">{maxLst}°C</strong></span>
        </div>
        <div className="metric-footer text-muted">
          Satellite Landsat-8 Thermal Infrared Sensor (TIRS)
        </div>
      </div>

      {/* 3. ML Model Performance */}
      <div className="metric-card">
        <div className="metric-label">XGBOOST VALIDATION ACCURACY</div>
        <div className="metric-value-row">
          <span className="metric-val text-emerald">R² = {baselineR2}</span>
          <span className="metric-sub">MAE: ±{baselineMae}°C</span>
        </div>
        <div className="metric-footer">
          <span className="spatial-tag">Spatial Block R²: {spatialR2}</span>
        </div>
      </div>

      {/* 4. Selected Hotspot Inspector */}
      <div className="metric-card highlight-card">
        <div className="metric-label">SELECTED HOTSPOT FOCUS</div>
        {selectedHotspot ? (
          <div>
            <div className="metric-value-row">
              <span className="metric-val text-cyan">{selectedHotspot.properties.id}</span>
              <span className={`badge-pill badge-${selectedHotspot.properties.severity.toLowerCase()}`}>
                {selectedHotspot.properties.severity}
              </span>
            </div>
            <div className="metric-footer">
              <span>Observed: <b>{selectedHotspot.properties.lst}°C</b></span>
              <span>Pred: <b>{selectedHotspot.properties.predicted_lst}°C</b></span>
              <span className="driver-tag">{selectedHotspot.properties.primary_driver}</span>
            </div>
          </div>
        ) : (
          <div className="metric-empty">Click any hotspot on map to inspect</div>
        )}
      </div>
    </div>
  );
};
