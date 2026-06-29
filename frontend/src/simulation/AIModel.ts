import type { GridCell, SimulationConfig } from './types';

export class PhysicsInformedLSTModel {
  public trainEpoch(_grid: GridCell[][], _config: SimulationConfig): { rmse: number; r2: number } {
    return { rmse: 0, r2: 0 };
  }

  public predict(_cell: GridCell, _config: SimulationConfig): number {
    return 30.0;
  }
}
