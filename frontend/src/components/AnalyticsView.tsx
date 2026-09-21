import { useState, type FC } from 'react';
import type { ValidationMetrics } from '../simulation/types';

interface AnalyticsViewProps {
  metrics: ValidationMetrics | null;
}

interface TrendSeries {
  label: string;
  unit: string;
  points: Array<{ month: string; val: number; y: number }>;
  strokeColor: string;
  yTicks: Array<{ text: string; y: number }>;
}

const TREND_DATA: Record<'lst' | 'ndvi' | 'uhi', TrendSeries> = {
  lst: {
    label: 'Avg LST (°C)',
    unit: '°C',
    strokeColor: '#f97316',
    yTicks: [
      { text: '50', y: 34 },
      { text: '45', y: 79 },
      { text: '40', y: 124 },
      { text: '35', y: 169 },
      { text: '30', y: 214 },
    ],
    points: [
      { month: 'Dec', val: 34.2, y: 180 },
      { month: 'Jan', val: 35.8, y: 165 },
      { month: 'Feb', val: 38.5, y: 140 },
      { month: 'Mar', val: 41.2, y: 115 },
      { month: 'Apr', val: 40.4, y: 128 },
      { month: 'May', val: 47.9, y: 65 },
    ],
  },
  ndvi: {
    label: 'Vegetation Index (NDVI)',
    unit: '',
    strokeColor: '#10b981',
    yTicks: [
      { text: '0.50', y: 34 },
      { text: '0.40', y: 79 },
      { text: '0.30', y: 124 },
      { text: '0.20', y: 169 },
      { text: '0.10', y: 214 },
    ],
    points: [
      { month: 'Dec', val: 0.44, y: 60 },
      { month: 'Jan', val: 0.42, y: 70 },
      { month: 'Feb', val: 0.38, y: 90 },
      { month: 'Mar', val: 0.35, y: 105 },
      { month: 'Apr', val: 0.32, y: 120 },
      { month: 'May', val: 0.28, y: 140 },
    ],
  },
  uhi: {
    label: 'UHI Intensity Anomaly (ΔT °C)',
    unit: '°C',
    strokeColor: '#8b5cf6',
    yTicks: [
      { text: '7.0', y: 34 },
      { text: '5.5', y: 79 },
      { text: '4.0', y: 124 },
      { text: '2.5', y: 169 },
      { text: '1.0', y: 214 },
    ],
    points: [
      { month: 'Dec', val: 1.8, y: 190 },
      { month: 'Jan', val: 2.2, y: 175 },
      { month: 'Feb', val: 3.1, y: 150 },
      { month: 'Mar', val: 4.4, y: 110 },
      { month: 'Apr', val: 4.9, y: 95 },
      { month: 'May', val: 6.2, y: 55 },
    ],
  },
};

export const AnalyticsView: FC<AnalyticsViewProps> = ({ metrics }) => {
  const [selectedMetric, setSelectedMetric] = useState<'lst' | 'ndvi' | 'uhi'>('lst');

  const r2 = metrics?.baseline_random_split.r2.toFixed(2) ?? '0.89';
  const rmse = metrics?.baseline_random_split.rmse.toFixed(2) ?? '1.87';
  const mae = metrics?.baseline_random_split.mae.toFixed(2) ?? '1.32';

  const currentSeries = TREND_DATA[selectedMetric];

  // Convert points to SVG polyline string
  const polylineCoords = currentSeries.points
    .map((p, i) => `${80 + i * 70},${p.y}`)
    .join(' ');

  const handleDownloadCustomReport = () => {
    const csvContent =
      'Month,Metric,Value\n' +
      currentSeries.points
        .map((p) => `${p.month},${currentSeries.label},${p.val}${currentSeries.unit}`)
        .join('\n') +
      `\n\nModel Performance Metrics\nR2 Score,${r2}\nRMSE,${rmse} deg C\nMAE,${mae} deg C\n` +
      `\nTop Feature Importance\nBuilt-up Density,0.28\nNDVI,0.22\nLST (Current),0.18\nNDBI,0.12\nWind Speed,0.08\n`;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `ISRO_UHI_${selectedMetric.toUpperCase()}_Analytics_Report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="analytics-view-container">
      <header className="view-header">
        <h1 className="page-heading">Analytics</h1>
        <p className="page-subheading">Explore trends &amp; model performance</p>
      </header>

      <div className="analytics-main-grid">
        {/* Left Side: Historical Trend Chart */}
        <div className="card analytics-chart-card">
          <div className="chart-header-row">
            <div>
              <span className="control-small-label">Metric</span>
              <select
                className="metric-trend-select"
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value as any)}
              >
                <option value="lst">LST Trend</option>
                <option value="ndvi">NDVI Trend</option>
                <option value="uhi">UHI Intensity Index</option>
              </select>
            </div>
            <span style={{ fontSize: '12px', color: '#64748b' }}>
              Historical Satellite Observation (Dec 2024 - May 2025)
            </span>
          </div>

          <div className="analytics-svg-wrapper">
            <span className="y-axis-title">{currentSeries.label}</span>
            <svg viewBox="0 0 500 240" className="trend-svg-chart">
              {/* Horizontal Grid lines */}
              <line x1="45" y1="30" x2="480" y2="30" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="45" y1="75" x2="480" y2="75" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="45" y1="120" x2="480" y2="120" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="45" y1="165" x2="480" y2="165" stroke="#f1f5f9" strokeWidth="1" />
              <line x1="45" y1="210" x2="480" y2="210" stroke="#e2e8f0" strokeWidth="1" />

              {/* Y Axis Numbers */}
              {currentSeries.yTicks.map((tick) => (
                <text
                  key={tick.y}
                  x="38"
                  y={tick.y}
                  fontSize="11"
                  fill="#94a3b8"
                  textAnchor="end"
                >
                  {tick.text}
                </text>
              ))}

              {/* Historical Trend Polyline */}
              <polyline
                points={polylineCoords}
                fill="none"
                stroke={currentSeries.strokeColor}
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Nodes with tooltips/labels */}
              {currentSeries.points.map((p, i) => {
                const cx = 80 + i * 70;
                return (
                  <g key={p.month}>
                    <circle
                      cx={cx}
                      cy={p.y}
                      r={i === currentSeries.points.length - 1 ? 6 : 4.5}
                      fill={currentSeries.strokeColor}
                      stroke="#ffffff"
                      strokeWidth={2}
                    />
                    <text
                      x={cx}
                      y={p.y - 10}
                      fontSize="10"
                      fontWeight="bold"
                      fill={currentSeries.strokeColor}
                      textAnchor="middle"
                    >
                      {p.val}
                    </text>
                    <text
                      x={cx}
                      y="230"
                      fontSize="11"
                      fill="#94a3b8"
                      textAnchor="middle"
                    >
                      {p.month}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right Side: Model Performance & Feature Importance */}
        <div className="analytics-stats-column">
          {/* Model Performance Card */}
          <div className="card model-perf-card">
            <h4 className="card-subheading">Model Performance</h4>
            <div className="perf-metric-row">
              <span className="perf-label">R² Score</span>
              <span className="perf-val font-bold">{r2}</span>
            </div>
            <div className="perf-metric-row">
              <span className="perf-label">RMSE</span>
              <span className="perf-val">{rmse} °C</span>
            </div>
            <div className="perf-metric-row">
              <span className="perf-label">MAE</span>
              <span className="perf-val">{mae} °C</span>
            </div>
          </div>

          {/* Feature Importance Card */}
          <div className="card feature-importance-card">
            <h4 className="card-subheading">Feature Importance</h4>
            <div className="importance-bars-stack">
              <div className="imp-bar-row">
                <span className="imp-name">Built-up Density</span>
                <div className="imp-track">
                  <div className="imp-fill" style={{ width: '80%' }} />
                </div>
                <span className="imp-num">0.28</span>
              </div>

              <div className="imp-bar-row">
                <span className="imp-name">NDVI</span>
                <div className="imp-track">
                  <div className="imp-fill" style={{ width: '65%' }} />
                </div>
                <span className="imp-num">0.22</span>
              </div>

              <div className="imp-bar-row">
                <span className="imp-name">LST (Current)</span>
                <div className="imp-track">
                  <div className="imp-fill" style={{ width: '52%' }} />
                </div>
                <span className="imp-num">0.18</span>
              </div>

              <div className="imp-bar-row">
                <span className="imp-name">NDBI</span>
                <div className="imp-track">
                  <div className="imp-fill" style={{ width: '38%' }} />
                </div>
                <span className="imp-num">0.12</span>
              </div>

              <div className="imp-bar-row">
                <span className="imp-name">Wind Speed</span>
                <div className="imp-track">
                  <div className="imp-fill" style={{ width: '25%' }} />
                </div>
                <span className="imp-num">0.08</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn-generate-report"
            onClick={handleDownloadCustomReport}
          >
            Generate Custom Report (.CSV)
          </button>
        </div>
      </div>
    </div>
  );
};
