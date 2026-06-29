import type { GridCell, SimulationConfig, OptimizationResult } from './types';

export function optimizeCoolingInterventions(
  _grid: GridCell[][],
  _config: SimulationConfig,
  _budget: number
): OptimizationResult {
  return {
    placedInterventions: [],
    averageCooling: 0
  };
}
