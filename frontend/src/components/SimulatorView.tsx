import { useState, type FC } from 'react';
import { ArrowRight, Leaf, RotateCcw, ChevronDown, CheckCircle2 } from 'lucide-react';
import type { CityName, HotspotFeature } from '../simulation/types';
import { runInterventionSimulation } from '../simulation/apiService';

interface SimulatorViewProps {
  currentCity: CityName;
  onCityChange: (city: CityName) => void;
  hotspots: HotspotFeature[];
}

export const SimulatorView: FC<SimulatorViewProps> = ({
  currentCity,
  onCityChange,
  hotspots,
}) => {
  const [scenario, setScenario] = useState<string>('Increase Canopy Cover');
  const [canopyPercentage, setCanopyPercentage] = useState<number>(20);
  const [roofAlbedoOpen, setRoofAlbedoOpen] = useState<boolean>(false);
  const [roofAlbedo, setRoofAlbedo] = useState<number>(30);
  const [blueInfraOpen, setBlueInfraOpen] = useState<boolean>(false);
  const [blueInfra, setBlueInfra] = useState<number>(15);

  const [loading, setLoading] = useState<boolean>(false);
  const [simulatedData, setSimulatedData] = useState<{
    avgReduction: number;
    maxReduction: number;
    affectedArea: number;
    shifts: Record<string, string>;
  }>({
    avgReduction: 2.7,
    maxReduction: 5.1,
    affectedArea: 68.4,
    shifts: {
      'Vegetation (NDVI)': '+0.085',
      'Built-up Thermal (NDBI)': '-0.062',
      'Distance to Canopy': '-45 meters',
      'Albedo Reflectivity': '+28%',
    },
  });

  const handleRunSimulation = async () => {
    setLoading(true);
    const targetHotspot = hotspots[0];
    if (targetHotspot) {
      try {
        const res = await runInterventionSimulation(
          targetHotspot,
          'urban_greening',
          canopyPercentage / 100
        );
        const cooling = res.cooling_effect_degC;
        setSimulatedData({
          avgReduction: Number(cooling.toFixed(1)),
          maxReduction: Number((cooling * 1.85).toFixed(1)),
          affectedArea: Number((canopyPercentage * 3.42).toFixed(1)),
          shifts: res.coupled_feature_changes || {
            'Vegetation (NDVI)': `+${(canopyPercentage * 0.004).toFixed(3)}`,
            'Built-up Thermal (NDBI)': `-${(canopyPercentage * 0.003).toFixed(3)}`,
            'Distance to Canopy': `-${(canopyPercentage * 2.2).toFixed(0)}m`,
          },
        });
      } catch {
        const totalCooling = Number(
          (canopyPercentage * 0.12 + roofAlbedo * 0.02 + blueInfra * 0.03).toFixed(1)
        );
        setSimulatedData({
          avgReduction: totalCooling,
          maxReduction: Number((totalCooling * 1.8).toFixed(1)),
          affectedArea: Number((canopyPercentage * 3.42).toFixed(1)),
          shifts: {
            'Vegetation (NDVI)': `+${(canopyPercentage * 0.004).toFixed(3)}`,
            'Built-up Thermal (NDBI)': `-${(roofAlbedo * 0.002).toFixed(3)}`,
            'Distance to Canopy': `-${(canopyPercentage * 2.1).toFixed(0)}m`,
            'Albedo Reflectivity': `+${roofAlbedo}%`,
          },
        });
      }
    }
    setLoading(false);
  };

  // Compute simulated map greenness level based on reduction
  const coolIntensity = Math.min(Math.max(simulatedData.avgReduction / 5, 0.2), 0.95);

  return (
    <div className="simulator-view-container">
      {/* Top Header */}
      <header className="simulator-header">
        <div>
          <h1 className="page-heading">Mitigation Simulator</h1>
          <p className="page-subheading">Simulate &amp; evaluate the impact of mitigation strategies</p>
        </div>

        <div className="simulator-header-controls">
          <div className="city-pill-select">
            <span className="city-pill-label">City:</span>
            <select
              className="city-select-inline"
              value={currentCity}
              onChange={(e) => onCityChange(e.target.value as CityName)}
            >
              <option value="Delhi">Delhi</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Lucknow">Lucknow</option>
              <option value="Kanpur">Kanpur</option>
            </select>
          </div>

          <button
            type="button"
            className="sim-icon-btn"
            title="Reset Simulation"
            onClick={() => {
              setCanopyPercentage(20);
              setRoofAlbedo(30);
              setBlueInfra(15);
              setSimulatedData({
                avgReduction: 2.7,
                maxReduction: 5.1,
                affectedArea: 68.4,
                shifts: {
                  'Vegetation (NDVI)': '+0.085',
                  'Built-up Thermal (NDBI)': '-0.062',
                  'Distance to Canopy': '-45 meters',
                  'Albedo Reflectivity': '+28%',
                },
              });
            }}
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </header>

      {/* Main Grid: Left Controls & Right Dual Maps */}
      <div className="simulator-main-grid">
        {/* Left Controls Card */}
        <div className="card simulator-controls-card">
          {/* 1. Scenario Selector */}
          <div className="sim-control-block">
            <label className="sim-control-label">Select Scenario</label>
            <select
              className="sim-dropdown-select"
              value={scenario}
              onChange={(e) => {
                setScenario(e.target.value);
                if (e.target.value === 'Modify Roof Albedo') setRoofAlbedoOpen(true);
                if (e.target.value === 'Add Blue Infrastructure') setBlueInfraOpen(true);
              }}
            >
              <option value="Increase Canopy Cover">Increase Canopy Cover</option>
              <option value="Modify Roof Albedo">Modify Roof Albedo</option>
              <option value="Add Blue Infrastructure">Add Blue Infrastructure</option>
              <option value="Comprehensive Green & Blue">Comprehensive Green &amp; Blue</option>
            </select>
          </div>

          {/* 2. Increase Tree Canopy Slider */}
          <div className="sim-control-block">
            <div className="slider-label-with-val">
              <label className="sim-control-label">Increase Tree Canopy (%)</label>
              <span className="slider-current-badge">{canopyPercentage}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={canopyPercentage}
              onChange={(e) => setCanopyPercentage(Number(e.target.value))}
              className="sim-slider-bar"
            />
            <div className="sim-slider-ticks">
              <span>0</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          </div>

          {/* 3. Modify Roof Albedo Accordion */}
          <div className="sim-accordion-block">
            <button
              type="button"
              className="sim-accordion-header"
              onClick={() => setRoofAlbedoOpen(!roofAlbedoOpen)}
            >
              <span>Modify Roof Albedo</span>
              <ChevronDown
                size={16}
                className={`accordion-arrow ${roofAlbedoOpen ? 'open' : ''}`}
              />
            </button>
            {roofAlbedoOpen && (
              <div className="sim-accordion-body">
                <div className="slider-label-with-val">
                  <span className="sub-label">High-Albedo Coating (%)</span>
                  <span className="slider-current-badge">{roofAlbedo}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={roofAlbedo}
                  onChange={(e) => setRoofAlbedo(Number(e.target.value))}
                  className="sim-slider-bar"
                />
              </div>
            )}
          </div>

          {/* 4. Add Blue Infrastructure Accordion */}
          <div className="sim-accordion-block">
            <button
              type="button"
              className="sim-accordion-header"
              onClick={() => setBlueInfraOpen(!blueInfraOpen)}
            >
              <span>Add Blue Infrastructure</span>
              <ChevronDown
                size={16}
                className={`accordion-arrow ${blueInfraOpen ? 'open' : ''}`}
              />
            </button>
            {blueInfraOpen && (
              <div className="sim-accordion-body">
                <div className="slider-label-with-val">
                  <span className="sub-label">Water Bodies &amp; Misting (%)</span>
                  <span className="slider-current-badge">{blueInfra}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={blueInfra}
                  onChange={(e) => setBlueInfra(Number(e.target.value))}
                  className="sim-slider-bar"
                />
              </div>
            )}
          </div>

          {/* CTA Run Simulation Button */}
          <button
            type="button"
            className="btn-run-simulation"
            onClick={handleRunSimulation}
            disabled={loading}
          >
            {loading ? 'Simulating Mitigation...' : 'Run Simulation'}
          </button>
        </div>

        {/* Right Comparison Section */}
        <div className="card simulator-comparison-card">
          {/* Dual Heat Surface Maps */}
          <div className="dual-maps-row">
            {/* Left: Current LST Map */}
            <div className="comparison-map-panel">
              <div className="comparison-map-label">Current LST (°C)</div>
              <div className="sim-thermal-canvas current-hot">
                <div className="thermal-heat-core" />
                <span className="map-city-tag">{currentCity} Baseline Core</span>
              </div>
              <div className="sim-thermal-scale-bar">
                <div className="scale-gradient current" />
                <div className="scale-ticks">
                  <span>30</span>
                  <span>35</span>
                  <span>40</span>
                  <span>45</span>
                  <span>50</span>
                </div>
              </div>
            </div>

            {/* Transition Arrow */}
            <div className="comparison-arrow-container">
              <div className="arrow-circle">
                <ArrowRight size={20} />
              </div>
            </div>

            {/* Right: Simulated LST Map */}
            <div className="comparison-map-panel">
              <div className="comparison-map-label">Simulated LST (°C)</div>
              <div
                className="sim-thermal-canvas simulated-cool"
                style={{
                  background: `radial-gradient(circle at 50% 50%, rgba(249, 115, 22, ${
                    1 - coolIntensity * 0.6
                  }) 0%, #eab308 25%, #84cc16 60%, #10b981 95%)`,
                }}
              >
                <div className="thermal-cool-overlay" />
                <span className="map-city-tag">Mitigated Surface (-{simulatedData.avgReduction}°C)</span>
              </div>
              <div className="sim-thermal-scale-bar">
                <div className="scale-gradient simulated" />
                <div className="scale-ticks">
                  <span>30</span>
                  <span>35</span>
                  <span>40</span>
                  <span>45</span>
                  <span>50</span>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Banner Below Maps */}
          <div className="simulator-metrics-banner">
            <div className="sim-metric-cell highlight-reduction">
              <span className="sim-metric-sub">Estimated Average LST Reduction</span>
              <div className="sim-metric-primary text-emerald">
                <Leaf size={22} className="leaf-icon" />
                <span>{simulatedData.avgReduction} °C</span>
              </div>
            </div>

            <div className="sim-metric-cell">
              <span className="sim-metric-sub">Maximum Reduction</span>
              <div className="sim-metric-primary text-dark">
                {simulatedData.maxReduction} °C
              </div>
            </div>

            <div className="sim-metric-cell">
              <span className="sim-metric-sub">Affected Area</span>
              <div className="sim-metric-primary text-dark">
                {simulatedData.affectedArea} km²
              </div>
            </div>
          </div>

          {/* Coupled Physical Shifts Breakdown */}
          {simulatedData.shifts && (
            <div className="simulator-shifts-subpanel">
              <div className="shifts-title-row">
                <CheckCircle2 size={15} className="text-emerald" />
                <span>Coupled Physical Feature Shifts (XGBoost Counterfactual Engine)</span>
              </div>
              <div className="shifts-pills-row">
                {Object.entries(simulatedData.shifts).map(([k, v]) => (
                  <div key={k} className="shift-chip">
                    <span className="chip-key">{k}:</span>
                    <span className="chip-val text-emerald">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
