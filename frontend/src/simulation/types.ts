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
  placedInterventions: { x: number; y: number; landType: LandType }[];
  averageCooling: number;
}
