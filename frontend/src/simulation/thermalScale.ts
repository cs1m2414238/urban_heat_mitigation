import type { SeverityLevel, ThermalBand } from './types';

export interface ThermalScaleStop {
  label: string;
  band: ThermalBand;
  color: string;
}

// Absolute LST classes are used only for the complete observed thermal field.
export const THERMAL_SCALE: ThermalScaleStop[] = [
  { label: '> 45°C', band: 'Critical', color: '#ef4444' },
  { label: '42–45°C', band: 'Severe', color: '#f97316' },
  { label: '39–<42°C', band: 'High', color: '#eab308' },
  { label: '36–<39°C', band: 'Moderate', color: '#84cc16' },
  { label: '< 36°C', band: 'Cool / Baseline', color: '#3b82f6' },
];

export const HOTSPOT_SCALE: Array<{
  severity: SeverityLevel;
  label: string;
  color: string;
}> = [
  { severity: 'Critical', label: 'Critical · ≥P99', color: '#991b1b' },
  { severity: 'Severe', label: 'Severe · P95–<P99', color: '#dc2626' },
  { severity: 'High', label: 'High · P90–<P95', color: '#f97316' },
  { severity: 'Moderate', label: 'Elevated · P75–<P90', color: '#f59e0b' },
];

export function getThermalBand(lst: number): ThermalBand {
  if (lst > 45) return 'Critical';
  if (lst >= 42) return 'Severe';
  if (lst >= 39) return 'High';
  if (lst >= 36) return 'Moderate';
  return 'Cool / Baseline';
}

export function getLSTColor(lst: number): string {
  const band = getThermalBand(lst);
  return THERMAL_SCALE.find((stop) => stop.band === band)?.color ?? '#3b82f6';
}

export function getHotspotColor(severity: SeverityLevel): string {
  return HOTSPOT_SCALE.find((stop) => stop.severity === severity)?.color ?? '#f59e0b';
}
