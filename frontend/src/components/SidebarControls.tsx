import { useState, type FC } from 'react';
import type { CityName, HotspotFeature, SeverityLevel } from '../simulation/types';

interface SidebarControlsProps {
  currentCity: CityName;
  onCityChange: (city: CityName) => void;
  selectedSeverities: Set<SeverityLevel>;
  onToggleSeverity: (sev: SeverityLevel) => void;
  hotspots: HotspotFeature[];
  selectedHotspot: HotspotFeature | null;
  onSelectHotspot: (hotspot: HotspotFeature) => void;
}

const CITIES: CityName[] = ['Delhi', 'Bengaluru', 'Lucknow', 'Kanpur'];
const SEVERITIES: SeverityLevel[] = ['Critical', 'Severe', 'High', 'Moderate'];

export const SidebarControls: FC<SidebarControlsProps> = ({
  currentCity,
  onCityChange,
  selectedSeverities,
  onToggleSeverity,
  hotspots,
  selectedHotspot,
  onSelectHotspot,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHotspots = hotspots.filter((hs) => {
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return (
        hs.properties.id.toLowerCase().includes(term) ||
        hs.properties.primary_driver.toLowerCase().includes(term) ||
        hs.properties.severity.toLowerCase().includes(term)
      );
    }
    return true;
  });

  return (
    <aside className="sidebar-controls">
      {/* 1. Target Metropolitan Region */}
      <div className="section-block">
        <label className="section-label">SELECT TARGET METROPOLITAN REGION</label>
        <div className="city-buttons-grid">
          {CITIES.map((city) => (
            <button
              key={city}
              className={`city-btn ${currentCity === city ? 'active' : ''}`}
              onClick={() => onCityChange(city)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Percentile Severity Filters */}
      <div className="section-block">
        <label className="section-label">FILTER BY THERMAL SEVERITY</label>
        <div className="severity-pills-row">
          {SEVERITIES.map((sev) => {
            const active = selectedSeverities.has(sev);
            return (
              <button
                key={sev}
                className={`severity-pill sev-${sev.toLowerCase()} ${active ? 'active' : 'inactive'}`}
                onClick={() => onToggleSeverity(sev)}
              >
                {sev}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Hotspot Explorer List */}
      <div className="section-block hotspot-list-section">
        <div className="list-header">
          <label className="section-label">HOTSPOT REGISTRY ({filteredHotspots.length})</label>
          <input
            type="text"
            className="search-input"
            placeholder="Search ID, driver..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="hotspots-scroll-list">
          {filteredHotspots.slice(0, 80).map((hs) => {
            const isSelected = selectedHotspot?.properties.id === hs.properties.id;
            return (
              <div
                key={hs.properties.id}
                className={`hotspot-list-item sev-border-${hs.properties.severity.toLowerCase()} ${
                  isSelected ? 'selected' : ''
                }`}
                onClick={() => onSelectHotspot(hs)}
              >
                <div className="item-top">
                  <span className="item-id">{hs.properties.id}</span>
                  <span className={`item-badge sev-bg-${hs.properties.severity.toLowerCase()}`}>
                    {hs.properties.severity}
                  </span>
                </div>
                <div className="item-bottom">
                  <span className="item-lst">LST: <b>{hs.properties.lst}°C</b></span>
                  <span className="item-driver">{hs.properties.primary_driver}</span>
                </div>
              </div>
            );
          })}
          {filteredHotspots.length === 0 && (
            <div className="no-items">No hotspots match the active filters</div>
          )}
        </div>
      </div>
    </aside>
  );
};
