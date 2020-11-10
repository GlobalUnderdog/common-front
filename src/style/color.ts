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

/**
 * Usage of generic to speed up the creation of themes when using makeTheme,
 * in this way developers can pass partial themes while just adding the values
 * over the default ones.
 */
type ColorThemeBase<Complete extends boolean> = Complete extends true
  ? Record<ColorType, Palette>
  : Partial<Record<ColorType, Partial<Palette>>>

// We're not exporting ColorThemeBase since its usage of generics might
// be confusing outside of this package.
export type ColorTheme = ColorThemeBase<true>
export type PartialColorTheme = ColorThemeBase<false>
