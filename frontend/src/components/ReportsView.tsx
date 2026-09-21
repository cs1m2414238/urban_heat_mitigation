import type { FC } from 'react';
import { Download, FileSpreadsheet, FileBarChart, FileText } from 'lucide-react';

export const ReportsView: FC = () => {
  const reportsList = [
    {
      id: 'monthly_heat',
      title: 'Monthly Heat Report',
      meta: 'May 2025 • Comprehensive LST & Microclimate Trends',
      icon: FileBarChart,
      generateContent: () =>
        `Date,Region,Sensor,Mean_LST_degC,Peak_LST_degC,NDVI,Wind_Speed_mps,Humidity_pct\n` +
        `2025-05-01,Delhi,Landsat-8 TIRS,41.2,46.8,0.34,3.2,48\n` +
        `2025-05-10,Delhi,Landsat-8 TIRS,42.0,47.4,0.33,3.5,46\n` +
        `2025-05-20,Delhi,Landsat-8 TIRS,43.5,49.2,0.31,3.8,43\n` +
        `2025-05-24,Delhi,Landsat-8 TIRS,42.3,48.1,0.32,3.6,46\n`,
    },
    {
      id: 'hotspot_summary',
      title: 'Hotspot Summary Report',
      meta: 'May 2025 • 115 High-Risk Quadrants Ingested',
      icon: FileSpreadsheet,
      generateContent: () =>
        `Hotspot_ID,City,Severity,Observed_LST_degC,Predicted_LST_degC,Primary_Driver,Recommended_Action\n` +
        `HS_DEL_0001,Delhi,Critical,49.79,47.59,High Built-up Thermal Load,Micro-misting & shade canopy structures\n` +
        `HS_DEL_0002,Delhi,Severe,47.85,46.12,Asphalt Solar Radiation,Permeable cool pavement retrofits\n` +
        `HS_DEL_0003,Delhi,High,44.90,43.88,Low Vegetation Buffer,Native avenue tree plantations\n` +
        `HS_DEL_0004,Delhi,Moderate,42.10,41.45,Building Geometry Sensible Heat,High-albedo reflective roof coatings\n`,
    },
    {
      id: 'mitigation_sim',
      title: 'Mitigation Simulation Report',
      meta: 'Scenario: +20% Canopy & Cool Roof Implementation',
      icon: FileText,
      generateContent: () =>
        `Intervention_Scenario,Intensity_pct,Baseline_LST_degC,Simulated_LST_degC,Cooling_Reduction_degC,Affected_Area_km2\n` +
        `Urban Tree Canopy Cover,20%,45.8,43.1,-2.70,68.4\n` +
        `Cool Roof Coating (SRI>104),30%,45.8,44.2,-1.60,45.2\n` +
        `Urban Blue Infrastructure,15%,45.8,44.5,-1.30,32.0\n` +
        `Comprehensive Green & Blue,35%,45.8,42.0,-3.80,84.6\n`,
    },
    {
      id: 'city_comparison',
      title: 'City Comparison Report',
      meta: 'Delhi, Kanpur, Lucknow, Bengaluru Regional Benchmarks',
      icon: FileBarChart,
      generateContent: () =>
        `City,Mean_LST_degC,Max_LST_degC,Mean_NDVI,Built_up_pct,Spatial_CV_R2,Total_Hotspots\n` +
        `Delhi,45.02,51.85,0.32,68.4%,0.6441,5001\n` +
        `Bengaluru,43.31,48.20,0.48,59.2%,0.5242,4521\n` +
        `Lucknow,43.25,48.95,0.35,62.1%,0.5364,4229\n` +
        `Kanpur,45.00,50.60,0.29,71.5%,0.6617,3904\n`,
    },
  ];

  const handleDownload = (title: string, generator: () => string) => {
    const csvData = generator();
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const filename = `ISRO_${title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.csv`;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="reports-view-container">
      <header className="view-header">
        <h1 className="page-heading">Reports</h1>
        <p className="page-subheading">Generate and download official decision support reports</p>
      </header>

      <div className="card reports-main-card">
        <div className="reports-list">
          {reportsList.map((rep) => {
            const Icon = rep.icon;
            return (
              <div key={rep.id} className="report-item-row">
                <div className="report-info-group">
                  <div className="report-icon-box">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="report-title-text">{rep.title}</div>
                    <div className="report-meta-text">{rep.meta}</div>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-download-report"
                  onClick={() => handleDownload(rep.title, rep.generateContent)}
                  title={`Download ${rep.title} (.CSV)`}
                >
                  <Download size={16} />
                </button>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="btn-generate-report"
          style={{ marginTop: '20px' }}
          onClick={() =>
            handleDownload('ISRO_Custom_Urban_Heat_Report', () =>
              `Report_Type,Timestamp,Metropolitan_Scope,Model_Accuracy_R2\nCustom Full Heat Mitigation Assessment,2025-05-24,All 4 Cities (Delhi/BLR/LKO/KNP),0.8904\n`
            )
          }
        >
          Generate Custom Report (.CSV)
        </button>
      </div>
    </div>
  );
};
