import { ReactNode } from 'react'
import { GUColorType } from './color'
import { SerializedStyles } from './emotion'
import { GUThemeProps } from './theme'

/** Makes TS complain about missing children */
export interface NeedsChildrenProps {
  children: ReactNode | ReactNode[]
}

/**
 * When number it is assumed it's pixels, use string for any other value */
export type CSSUnit = string | number

/**
 * Transforms JavaScript numbers into CSS units, defaulting to pixels by
 * default.
 *
 * If a string is passed as argument no transformation happens.
 */
export const cssUnit = (num: CSSUnit): string =>
  typeof num === 'number' ? `${num}px` : num

// Will be used by components using CommonStyleProps, enforces that only
// one size is picked.
type SizeHelpers =
  | {
      big?: true
      small?: never | false
    }
  | {
      big?: never | false
      small?: true
    }
/**
 * Can be used by components, contains typical props that are often used
 * for styling, e.g. `<Button big outline color='primary'/>`
 */
export type GUCommonStyleProps = SizeHelpers & {
  color?: GUColorType
  outline?: boolean
  wide?: boolean
}

export type GUThemeCSSFunc<T extends GUThemeProps = GUThemeProps> = (
  theme: T,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any
) => SerializedStyles | SerializedStyles[]

export interface GUThemeCSSRule<T extends GUThemeProps = GUThemeProps> {
  /**
   * If true the Style passed in css will replace the original one set by
   * @globalunderdog/common-front Theme.
   *
   * Defaults to `false`
   */
  readonly replace?: boolean
  readonly css: GUThemeCSSFunc<T>
}
