export type CityName = 'Delhi' | 'Bengaluru' | 'Lucknow' | 'Kanpur';
export type SeverityLevel = 'Critical' | 'Severe' | 'High' | 'Moderate';

export interface HotspotProperties {
  id: string;
  city: CityName;
  severity: SeverityLevel;
  lst: number;
  predicted_lst: number;
  city_percentile: number;
  primary_driver: string;
  recommended_action: string;
  air_temp: number;
  ndvi: number;
  ndbi: number;
  dist_to_veg: number;
  impervious_surface_ratio: number;
  building_density: number;
  latitude: number;
  longitude: number;
}

export interface HotspotFeature {
  type: 'Feature';
  geometry: {
    type: 'Point';
    coordinates: [number, number]; // [lon, lat]
  };
  properties: HotspotProperties;
}

export interface HotspotsCollection {
  type: 'FeatureCollection';
  total_matching: number;
  returned_count: number;
  features: HotspotFeature[];
}

export type ThermalBand = 'Cool / Baseline' | 'Moderate' | 'High' | 'Severe' | 'Critical';

export interface ThermalPointProperties {
  id: string;
  city: CityName;
  lst: number;
  temperature_band: ThermalBand;
}

export interface ThermalPointFeature {
  type: 'Feature';
  geometry: {
    type: 'Point';
    coordinates: [number, number];
  };
  properties: ThermalPointProperties;
}

export interface ThermalFieldCollection {
  type: 'FeatureCollection';
  total_matching: number;
  returned_count: number;
  features: ThermalPointFeature[];
}

export type ThermalFieldStatus = 'loading' | 'live' | 'unavailable';

export interface CityThreshold {
  samples: number;
  min_lst: number;
  mean_lst: number;
  max_lst: number;
  p75: number;
  p90: number;
  p95: number;
  p99: number;
}

export interface ValidationMetrics {
  baseline_random_split: {
    r2: number;
    rmse: number;
    mae: number;
    description: string;
  };
  spatial_block_cv: {
    mean_r2: number;
    std_r2: number;
    mean_rmse: number;
    std_rmse: number;
    mean_mae: number;
    std_mae: number;
    folds: Array<{ fold: number; r2: number; rmse: number; mae: number }>;
  };
  leave_one_city_out_cv: {
    mean_r2: number;
    std_r2: number;
    mean_rmse: number;
    std_rmse: number;
    mean_mae: number;
    std_mae: number;
    cities: Record<string, {
      test_samples: number;
      train_cities: string[];
      r2: number;
      rmse: number;
      mae: number;
      train_time: number;
    }>;
  };
}

export interface ShapDriver {
  Feature: string;
  Mean_Abs_SHAP_degC: number;
  Relative_Contribution_Pct: number;
}

export type InterventionType = 'urban_greening' | 'canopy_corridor' | 'pocket_park' | 'cool_roof_coating';

export interface InterventionResponse {
  intervention_type: InterventionType;
  intensity: number;
  baseline_lst: number;
  scenario_lst: number;
  cooling_effect_degC: number;
  coupled_feature_changes: Record<string, string>;
  methodology: string;
}

// Legacy types preserved
export type LandType = 'Asphalt' | 'Concrete' | 'Forest' | 'Water' | 'CoolRoof' | 'Grass';

export interface GridCell {
  x: number;
  y: number;
  landType: LandType;
  lst: number;
  ndvi: number;
  albedo: number;
  density: number;
}

export interface SimulationConfig {
  airTemp: number;
  humidity: number;
  windSpeed: number;
  solarRadiation: number;
}

export interface OptimizationResult {
  placedInterventions: Array<{ x: number; y: number; type: LandType }>;
  averageCooling: number;
}
