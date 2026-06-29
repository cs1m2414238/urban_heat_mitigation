import type { GridCell } from './types';

export const GRID_SIZE = 40;

export function generatePreset(_presetName: string): GridCell[][] {
  const grid: GridCell[][] = [];
  for (let x = 0; x < GRID_SIZE; x++) {
    const row: GridCell[] = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      row.push({
        x,
        y,
        landType: 'Concrete',
        lst: 30.0,
        ndvi: 0.1,
        albedo: 0.2,
        density: 0.8
      });
    }
    grid.push(row);
  }
  return grid;
}
