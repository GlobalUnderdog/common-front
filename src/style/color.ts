export const colorTypes = [
  'canvas',
  'ink',
  'primary',
  'secondary',
  'error',
  'warning',
  'info',
  'success',
] as const
export type ColorType = typeof colorTypes[number]

/**
 * Used to group shades of the same color.
 */
export interface Palette {
  dark: string
  main: string
  light: string
}

export type ColorTheme = Record<ColorType, Palette>
