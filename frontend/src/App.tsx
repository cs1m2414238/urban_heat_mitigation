import { useState, useEffect, type FC } from 'react';
import { SidebarNav, type NavView } from './components/SidebarNav';
import { OverviewView } from './components/OverviewView';
import { HeatMapView } from './components/HeatMapView';
import { SimulatorView } from './components/SimulatorView';
import { HotspotDetailsModal } from './components/HotspotDetailsModal';
import { FeatureLayersView } from './components/FeatureLayersView';
import { AnalyticsView } from './components/AnalyticsView';
import { ReportsView } from './components/ReportsView';
import { AlertsView } from './components/AlertsView';
import { SettingsView } from './components/SettingsView';
import { AboutView } from './components/AboutView';
import type {
  CityName,
  HotspotFeature,
  ThermalFieldStatus,
  ThermalPointFeature,
  ValidationMetrics,
} from './simulation/types';
import {
  fetchHotspots,
  fetchThermalField,
  fetchModelMetrics,
  FALLBACK_METRICS,
} from './simulation/apiService';
import { FALLBACK_HOTSPOTS } from './simulation/dataPresets';

export const App: FC = () => {
  const [activeView, setActiveView] = useState<NavView>('overview');
  const [currentCity, setCurrentCity] = useState<CityName>('Delhi');
  const [hotspots, setHotspots] = useState<HotspotFeature[]>(FALLBACK_HOTSPOTS['Delhi'] || []);
  const [totalHotspots, setTotalHotspots] = useState(FALLBACK_HOTSPOTS['Delhi']?.length || 0);
  const [thermalPoints, setThermalPoints] = useState<ThermalPointFeature[]>([]);
  const [thermalFieldStatus, setThermalFieldStatus] = useState<ThermalFieldStatus>('loading');
  const [selectedHotspot, setSelectedHotspot] = useState<HotspotFeature | null>(
    FALLBACK_HOTSPOTS['Delhi']?.[0] || null
  );
  const [detailedHotspot, setDetailedHotspot] = useState<HotspotFeature | null>(null);
  const [metrics, setMetrics] = useState<ValidationMetrics>(FALLBACK_METRICS);

  // Load backend metrics on mount
  useEffect(() => {
    async function init() {
      const m = await fetchModelMetrics();
      if (m) setMetrics(m);
    }
    init();
  }, []);

  // Fetch hotspots when city changes
  useEffect(() => {
    let isSubscribed = true;
    async function loadCityData() {
      const fallback = FALLBACK_HOTSPOTS[currentCity] || [];
      setHotspots(fallback);
      setTotalHotspots(fallback.length);
      setSelectedHotspot(fallback[0] || null);
      setThermalPoints([]);
      setThermalFieldStatus('loading');

      const [hotspotResult, thermalResult] = await Promise.all([
        fetchHotspots(currentCity, undefined, 600),
        fetchThermalField(currentCity),
      ]);

      if (isSubscribed) {
        if (hotspotResult.features.length > 0) {
          setHotspots(hotspotResult.features);
          setTotalHotspots(hotspotResult.totalMatching);
          setSelectedHotspot(hotspotResult.features[0]);
        }
        setThermalPoints(thermalResult.features);
        setThermalFieldStatus(thermalResult.isLive ? 'live' : 'unavailable');
      }
    }
    loadCityData();
    return () => {
      isSubscribed = false;
    };
  }, [currentCity]);

  return (
    <div className="app-shell-layout">
      {/* Left Navigation Sidebar */}
      <SidebarNav
        activeView={activeView}
        onSelectView={(view) => {
          setActiveView(view);
          setDetailedHotspot(null);
        }}
      />

      {/* Main Content Workspace */}
      <main className="app-main-content">
        {/* If user clicked to drill down into a hotspot */}
        {detailedHotspot ? (
          <HotspotDetailsModal
            hotspot={detailedHotspot}
            onBack={() => setDetailedHotspot(null)}
            onOpenSimulator={(hs) => {
              setSelectedHotspot(hs);
              setActiveView('simulator');
              setDetailedHotspot(null);
            }}
          />
        ) : (
          <>
            {activeView === 'overview' && (
              <OverviewView
                currentCity={currentCity}
                onCityChange={(c) => setCurrentCity(c)}
                hotspots={hotspots}
                selectedHotspot={selectedHotspot}
                onSelectHotspot={(hs) => setSelectedHotspot(hs)}
                onViewHotspotDetails={(hs) => setDetailedHotspot(hs)}
              />
            )}

            {activeView === 'heatmap' && (
              <HeatMapView
                currentCity={currentCity}
                onCityChange={(c) => setCurrentCity(c)}
                hotspots={hotspots}
                totalHotspots={totalHotspots}
                thermalPoints={thermalPoints}
                thermalFieldStatus={thermalFieldStatus}
                selectedHotspot={selectedHotspot}
                onSelectHotspot={(hs) => setSelectedHotspot(hs)}
                onViewHotspotDetails={(hs) => setDetailedHotspot(hs)}
              />
            )}

            {activeView === 'simulator' && (
              <SimulatorView
                currentCity={currentCity}
                onCityChange={(c) => setCurrentCity(c)}
                hotspots={hotspots}
              />
            )}

            {activeView === 'layers' && (
              <FeatureLayersView currentCity={currentCity} />
            )}

            {activeView === 'analytics' && (
              <AnalyticsView metrics={metrics} />
            )}

            {activeView === 'reports' && (
              <ReportsView />
            )}

            {activeView === 'alerts' && (
              <AlertsView
                hotspots={hotspots}
                currentCity={currentCity}
                onNavigateToHotspot={(hs) => {
                  setSelectedHotspot(hs);
                  setDetailedHotspot(hs);
                }}
              />
            )}

            {activeView === 'settings' && (
              <SettingsView />
            )}

            {activeView === 'about' && (
              <AboutView />
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default App;
