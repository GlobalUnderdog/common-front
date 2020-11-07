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

/**
 * Parses colors, the purpose of this function is to make all 3 digits HEX
 * into 6 digits. This will allow us to use HEX opacity on color variables
 * without any issues, for example `color: ${color}80` for 50% opacity.
 *
 * Does nothing if the given string is not a 3 digits hex color, e.g. rgb(0,0,0).
 */
export const parseColor = (color: string): string => {
  if (color.length === 4 && color[0] === '#') {
    // #F00 -> #FF0000
    return `#${color
      .substr(1)
      .split('')
      .map((s) => s + s)
      .join('')}`
  }
  return color
}

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
