import { ThemeCSSRule } from '.'

export interface FontTheme {
  /** Defaults to sans-serif */
  readonly sans: string
  /** Defaults to serif */
  readonly serif: string
  /** Defaults to monospace */
  readonly mono: string
  /**
   * Can be used on buttons, headers, and other places where we want to
   * distinguish from the base typeface used throughout the site.
   *
   * Defaults to sans-serif
   */
  readonly accent: string

  readonly text: ThemeCSSRule
  /** Apply to all headers, it's overwritten by individual header styles */
  readonly h1h6: ThemeCSSRule
  readonly h1: ThemeCSSRule
  readonly h2: ThemeCSSRule
  readonly h3: ThemeCSSRule
  readonly h4: ThemeCSSRule
  readonly h5: ThemeCSSRule
  readonly h6: ThemeCSSRule
}

export type PartialFontTheme = Partial<FontTheme>
