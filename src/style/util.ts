import { ReactNode } from 'react'
import { SerializedStyles } from './emotion'
import { Theme } from './theme'

export const colorTypes = [
  'accent',
  'canvas',
  'danger',
  'ink',
  'primary',
  'success',
  'warning',
] as const
export type ColorType = typeof colorTypes[number]

/**
 * Used to group shades of the same color.
 */
export interface ColorSwatch {
  dark: string
  normal: string
  light: string
}

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

export interface CommonStyleProps {
  color?: ColorType
}

export type ThemeCSSFunc = (
  theme: Theme,
  /**
   * Props that might be commonly used in components, like color, size, etc.
   *
   * Available in this function so global styles (e.g. Button, InputText) can
   * benefit from these.
   */
  props?: CommonStyleProps
) => SerializedStyles | SerializedStyles[]

export interface ThemeCSSRule {
  /**
   * If true the Style passed in css will replace the original one set by
   * @globalunderdog/common-front Theme.
   *
   * Defaults to `false`
   */
  readonly replace?: boolean
  readonly css: ThemeCSSFunc
}
