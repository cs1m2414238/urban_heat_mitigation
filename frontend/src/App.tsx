import { SidebarControls } from './components/SidebarControls';
import { MapDashboard } from './components/MapDashboard';
import { MetricsGrid } from './components/MetricsGrid';
import { DriverAnalysis } from './components/DriverAnalysis';
import { ModelValidator } from './components/ModelValidator';
import { OptimizerPanel } from './components/OptimizerPanel';

export default function App() {
  return (
    <div className="app-container">
      <header className="telemetry-header">
        <h1>URBAN HEAT ISLAND MITIGATION</h1>
        <p>AI/ML Geospatial Energy Balance Modeling System Structure</p>
      </header>

      <MetricsGrid />

      <main className="dashboard-grid-layout" style={{ display: 'grid', gridTemplateColumns: '300px 1fr 340px', gap: '20px' }}>
        <SidebarControls />
        <MapDashboard />
        <div className="analytics-column">
          <OptimizerPanel />
          <ModelValidator />
          <DriverAnalysis />
        </div>
      </main>
    </div>
  );
}
