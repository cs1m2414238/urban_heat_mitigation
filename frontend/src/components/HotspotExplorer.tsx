import { useState, useMemo, type FC } from 'react';
import type { HotspotFeature, SeverityLevel } from '../simulation/types';

interface HotspotExplorerProps {
  hotspots: HotspotFeature[];
  selectedHotspot: HotspotFeature | null;
  onSelectHotspot: (hotspot: HotspotFeature) => void;
}

export const HotspotExplorer: FC<HotspotExplorerProps> = ({
  hotspots,
  selectedHotspot,
  onSelectHotspot,
}) => {
  const [search, setSearch] = useState('');
  const [severityFilter, setSeverityFilter] = useState<SeverityLevel | 'ALL'>('ALL');
  const [sortBy, setSortBy] = useState<'lst_desc' | 'severity' | 'id'>('lst_desc');

  const filteredAndSorted = useMemo(() => {
    let list = [...hotspots];

    if (severityFilter !== 'ALL') {
      list = list.filter((h) => h.properties.severity === severityFilter);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (h) =>
          h.properties.id.toLowerCase().includes(q) ||
          h.properties.primary_driver.toLowerCase().includes(q) ||
          h.properties.recommended_action.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'lst_desc') {
      list.sort((a, b) => b.properties.lst - a.properties.lst);
    } else if (sortBy === 'severity') {
      const rank: Record<SeverityLevel, number> = { Critical: 4, Severe: 3, High: 2, Moderate: 1 };
      list.sort((a, b) => rank[b.properties.severity] - rank[a.properties.severity]);
    } else if (sortBy === 'id') {
      list.sort((a, b) => a.properties.id.localeCompare(b.properties.id));
    }

    return list;
  }, [hotspots, severityFilter, search, sortBy]);

  return (
    <div className="hotspot-explorer-pane">
      <div className="explorer-filters-bar">
        <input
          type="text"
          className="explorer-search-input"
          placeholder="Filter by ID, driver, or neighborhood..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="explorer-controls-row">
          <select
            className="explorer-select"
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value as any)}
          >
            <option value="ALL">All Severities</option>
            <option value="Critical">Critical (&gt;P99)</option>
            <option value="Severe">Severe (P95-99)</option>
            <option value="High">High (P90-95)</option>
            <option value="Moderate">Moderate (P75-90)</option>
          </select>

          <select
            className="explorer-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
          >
            <option value="lst_desc">Sort: Highest LST</option>
            <option value="severity">Sort: Highest Severity</option>
            <option value="id">Sort: Hotspot ID</option>
          </select>
        </div>
      </div>

      <div className="explorer-list-header">
        <span>Showing {filteredAndSorted.length} matching thermal anomalies</span>
      </div>

      <div className="explorer-scroll-container">
        {filteredAndSorted.slice(0, 100).map((hs) => {
          const isSelected = selectedHotspot?.properties.id === hs.properties.id;
          const { id, severity, lst, predicted_lst, primary_driver } = hs.properties;

          return (
            <div
              key={id}
              className={`explorer-item sev-border-${severity.toLowerCase()} ${
                isSelected ? 'selected' : ''
              }`}
              onClick={() => onSelectHotspot(hs)}
            >
              <div className="item-row-top">
                <span className="item-id">{id}</span>
                <span className={`item-badge sev-bg-${severity.toLowerCase()}`}>{severity}</span>
              </div>

              <div className="item-row-mid">
                <span className="lst-label">LST: <b className="text-amber">{lst}°C</b></span>
                <span className="pred-label">Pred: {predicted_lst}°C</span>
              </div>

              <div className="item-driver-tag">{primary_driver}</div>
            </div>
          );
        })}

        {filteredAndSorted.length === 0 && (
          <div className="explorer-empty">No hotspots found matching your filters</div>
        )}
      </div>
    </div>
  );
};
