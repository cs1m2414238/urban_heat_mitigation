import type { FC } from 'react';
import { Info, Satellite, Cpu, MapPin, Database } from 'lucide-react';

export const AboutView: FC = () => {
  return (
    <div className="about-view-container">
      <header className="view-header">
        <h1 className="page-heading">About the Project</h1>
        <p className="page-subheading">ISRO Multi-City Urban Heat Island (UHI) Mitigation &amp; Decision Support Platform</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '16px' }}>
        {/* Mission Card */}
        <div className="card" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Satellite size={24} />
          </div>
          <div>
            <h3 className="card-title" style={{ marginBottom: '6px' }}>Mission Objective &amp; Scope</h3>
            <p style={{ margin: 0, fontSize: '13px', color: '#334155', lineHeight: '1.6' }}>
              Designed for the Indian Space Research Organisation (ISRO) geospatial analytics initiative, this platform models, analyzes, and formulates data-driven counterfactual mitigation strategies for urban heat islands across four distinct metropolitan climates: <strong>Delhi, Bengaluru, Lucknow, and Kanpur</strong>.
            </p>
          </div>
        </div>

        {/* 3 Pillar Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {/* Card 1: Remote Sensing */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Database size={18} className="text-blue" />
              <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 800 }}>Satellite Earth Observation</h4>
            </div>
            <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '12px', color: '#475569', lineHeight: '1.6' }}>
              <li><strong>Landsat-8/9 TIRS:</strong> 100m Land Surface Temperature (LST) derived using Split-Window Radiative Transfer algorithms.</li>
              <li><strong>Sentinel-2 MSI:</strong> 10m multi-spectral indices (NDVI, NDWI, NDBI, NDMI).</li>
              <li><strong>ERA5-Land:</strong> Atmospheric 2m air temperature, relative humidity, wind speed &amp; surface solar radiation.</li>
            </ul>
          </div>

          {/* Card 2: Urban Morphology */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <MapPin size={18} className="text-emerald" />
              <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 800 }}>Urban Morphology Ingestion</h4>
            </div>
            <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '12px', color: '#475569', lineHeight: '1.6' }}>
              <li><strong>Overture Maps:</strong> 1.55 million building footprint polygons ingested for Bengaluru.</li>
              <li><strong>OpenStreetMap (OSM):</strong> Dense building polygons, road arterial networks, and urban water bodies for Delhi, Lucknow, and Kanpur.</li>
              <li><strong>STRtree Spatial Indexing:</strong> Distance to canopy, building density, and impervious surface ratio calculations.</li>
            </ul>
          </div>

          {/* Card 3: Machine Learning & Validation */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Cpu size={18} className="text-purple" />
              <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 800 }}>ML &amp; Spatial Validation</h4>
            </div>
            <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '12px', color: '#475569', lineHeight: '1.6' }}>
              <li><strong>XGBoost Multi-City:</strong> 70,595 observations across 24 satellite &amp; spatial features (R² = 0.8904, MAE = 1.13°C).</li>
              <li><strong>Spatial Block Cross-Validation:</strong> 5-Fold GroupKFold on 4×4 spatial quadrants (Mean R² = 0.7919 ± 0.035).</li>
              <li><strong>TreeSHAP Explainability:</strong> Quantified feature impact attributions in model units (°C).</li>
            </ul>
          </div>
        </div>

        {/* Citation & Methodology Notice */}
        <div className="card" style={{ background: '#f8fafc', borderLeft: '4px solid #2563eb' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <Info size={16} className="text-blue" />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>Scientific Methodology Notice</span>
          </div>
          <p style={{ margin: 0, fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>
            The counterfactual scenario estimates provided in the mitigation simulator are machine-learning based approximations using coupled XGBoost gradient boosted tree estimators. While delivering rapid policy heuristics, microclimate computational fluid dynamics (CFD) models (e.g. ENVI-met / SOLWEIG) are recommended for final localized engineering deployments.
          </p>
        </div>
      </div>
    </div>
  );
};
