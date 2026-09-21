import { useState, type FC } from 'react';
import { AlertTriangle, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import type { CityName, HotspotFeature } from '../simulation/types';

interface AlertsViewProps {
  hotspots: HotspotFeature[];
  currentCity: CityName;
  onNavigateToHotspot: (hotspot: HotspotFeature) => void;
}

export const AlertsView: FC<AlertsViewProps> = ({
  hotspots,
  currentCity,
  onNavigateToHotspot,
}) => {
  const [filterSeverity, setFilterSeverity] = useState<string>('ALL');

  const alertHotspots = hotspots.filter(
    (h) => h.properties.severity === 'Critical' || h.properties.severity === 'Severe'
  );

  const displayedAlerts =
    filterSeverity === 'ALL'
      ? alertHotspots
      : alertHotspots.filter((h) => h.properties.severity === filterSeverity);

  return (
    <div className="alerts-view-container">
      <header className="view-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="page-heading">Thermal Anomaly Alerts</h1>
          <p className="page-subheading">Active heatwave warnings &amp; priority microclimate intervention notifications</p>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            type="button"
            className={`details-tab-btn ${filterSeverity === 'ALL' ? 'active' : ''}`}
            onClick={() => setFilterSeverity('ALL')}
          >
            All Alerts ({alertHotspots.length})
          </button>
          <button
            type="button"
            className={`details-tab-btn ${filterSeverity === 'Critical' ? 'active' : ''}`}
            onClick={() => setFilterSeverity('Critical')}
          >
            Critical Only
          </button>
          <button
            type="button"
            className={`details-tab-btn ${filterSeverity === 'Severe' ? 'active' : ''}`}
            onClick={() => setFilterSeverity('Severe')}
          >
            Severe
          </button>
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
        {displayedAlerts.slice(0, 15).map((hs) => {
          const { id, lst, severity, primary_driver, recommended_action } = hs.properties;
          const isCritical = severity === 'Critical';

          return (
            <div
              key={id}
              className="card"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 20px',
                borderLeft: `4px solid ${isCritical ? '#ef4444' : '#f97316'}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: isCritical ? '#fee2e2' : '#ffedd5',
                    color: isCritical ? '#ef4444' : '#f97316',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <AlertTriangle size={18} />
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>{id}</span>
                    <span className={`risk-badge-pill ${isCritical ? 'badge-very-high' : 'badge-severe'}`}>
                      {severity} Priority
                    </span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>
                      <MapPin size={13} style={{ display: 'inline', marginRight: '2px' }} />
                      {currentCity} Metropolitan Area
                    </span>
                  </div>

                  <div style={{ fontSize: '13px', color: '#334155', lineHeight: '1.4' }}>
                    Surface temperature elevated to <strong className="text-red">{lst}°C</strong> driven by{' '}
                    <strong>{primary_driver}</strong>.
                  </div>

                  <div style={{ fontSize: '12px', color: '#2563eb', fontWeight: 600, marginTop: '4px' }}>
                    <ShieldCheck size={13} style={{ display: 'inline', marginRight: '4px' }} />
                    Action: {recommended_action}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="btn-open-sim-cta"
                onClick={() => onNavigateToHotspot(hs)}
                style={{ padding: '8px 14px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <span>Inspect Hotspot</span>
                <ArrowRight size={14} />
              </button>
            </div>
          );
        })}

        {displayedAlerts.length === 0 && (
          <div className="card" style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
            No alerts matching the selected filter.
          </div>
        )}
      </div>
    </div>
  );
};
