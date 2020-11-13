export const guColorTypes = [
  'canvas',
  'ink',
  'primary',
  'secondary',
  'error',
  'warning',
  'info',
  'success',
] as const
export type GUColorType = typeof guColorTypes[number]

/**
 * Used to group shades of the same color.
 */
export interface Palette {
  dark: string
  main: string
  light: string
}

export type GUColorTheme = Record<GUColorType, Palette>
