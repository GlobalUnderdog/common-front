import { ColorSwatch } from './util'

/**
 * Usage of generic to speed up the creation of themes when using makeTheme,
 * in this way developers can pass partial themes while just adding the values
 * over the default ones.
 */
interface ColorThemeBase<Complete extends boolean> {
  /** Used subtly to call attention to key elements */
  readonly accent: Complete extends true ? ColorSwatch : Partial<ColorSwatch>
  /**
   * Used throughout the app, often a tame color when compared to `accent`
   * in order to avoid overwhelming users with visual pollution.
   */
  readonly primary: Complete extends true ? ColorSwatch : Partial<ColorSwatch>
  /**
   * Color used mostly for backgrounds of the app, for example pages,
   * inputs, cards, and other elements where textual information is
   * conveyed.
   */
  readonly canvas: Complete extends true ? ColorSwatch : Partial<ColorSwatch>
  /**
   * Used to indicate the idea of positive results, e.g. successful responses
   * from actions.
   */
  readonly success: Complete extends true ? ColorSwatch : Partial<ColorSwatch>
  /**
   * Used to call the attention for possible unwanted effects, e.g. asking for
   * users permissions when deleting a file.
   */
  readonly danger: Complete extends true ? ColorSwatch : Partial<ColorSwatch>
  /**
   * Always in stark contrast when compared to `canvas`, since this color is
   * used mostly for text color, ideally all swatches of `ink` (dark, normal, light)
   * should be legible on the swatches of `canvas`.
   */
  readonly ink: Complete extends true ? ColorSwatch : Partial<ColorSwatch>
  /**
   * Used to indicate that something might not be possibly right, the difference
   * from `danger` is that `warning` can be used to indicate possible
   * possitive--but where attention is required to ensure everything is on track,
   * e.g. users have typed a weak password.
   */
  readonly warning: Complete extends true ? ColorSwatch : Partial<ColorSwatch>
}

/** All 3 digit HEX colors are converted to 6 digits on Theme.color */
export type ColorTheme = ColorThemeBase<true>

/** Unlike Partial<Color> this one allows for `color = { accent: { normal: '#f00' } }` */
export type PartialColorTheme = Partial<ColorThemeBase<false>>
