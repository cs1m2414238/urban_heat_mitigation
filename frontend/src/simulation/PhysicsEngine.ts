import type { GridCell, SimulationConfig } from './types';

export function calculatePhysicsTemperature(_cell: GridCell, config: SimulationConfig): number {
  // Placeholder formula
  return config.airTemp;
}

export function applyHeatDiffusion(grid: GridCell[][]): GridCell[][] {
  // Placeholder return
  return grid;
}
