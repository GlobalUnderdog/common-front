import { Configuration } from 'react-grid-system'
import { ColorTheme, PartialColorTheme } from './color'
import { PartialRadiusTheme, RadiusTheme } from './radius'
import { ThemeCSSRule } from './util'

/**
 * Usage of generic to speed up the creation of themes using makeTheme,
 * in this way developers can pass partial themes while just adding the values
 * over the default ones.
 */
export interface ThemeBase<Complete extends boolean> {
  readonly color: Complete extends true ? ColorTheme : PartialColorTheme
  readonly radius: Complete extends true ? RadiusTheme : PartialRadiusTheme

  readonly grid: {
    /** Erases the default grid settings upon writing the new one, defaults to `false` */
    readonly replace?: boolean
    readonly rules: Configuration
  }

  /**
   * Generic global style to be applied on the page, defaults to fixes,
   * normalize.css, fa-spin & removes the outline on focused inputs,
   * buttons, etc.
   */
  readonly global: ThemeCSSRule

  /**
   * The default style for `<Button/>`, does not change HTML `<button/>`
   * to avoid conflicts
   *
   * Uses radius.normal by default
   */
  readonly button: ThemeCSSRule

  /**
   * Don't forget that Input is a `<div/>` wrapping a `<label/>` + `<input/>`:
   *
   * ```tsx
   * Input = () => (
   *    <div>
   *      <label/>
   *      <input/>
   *    </div>
   * )
   * ```
   */
  readonly input: ThemeCSSRule

  /**
   * Don't forget that Checkbox is a `<div/>` wrapping a `<input/>` + `<label/>`:
   *
   * ```tsx
   * Checkbox = () => (
   *    <div>
   *      <input type='checkbox'/>
   *      <label/>
   *    </div>
   * )
   * ```
   *
   * By default we can't easily style HTML checkboxes inputs, so the default
   * style present at `@globalunderdog/common-front` uses `input:before` as
   * the checkbox background/border, and `input:after` as the filled area when
   * checked.
   */
  readonly checkbox: ThemeCSSRule
  /**
   * Don't forget that Radio is a `<div/>` wrapping a `<input/>` + `<label/>`:
   *
   * ```tsx
   * Checkbox = () => (
   *    <div>
   *      <input type='radio'/>
   *      <label/>
   *    </div>
   * )
   * ```
   *
   * By default we can't easily style HTML radio inputs, so the default
   * style present at `@globalunderdog/common-front` uses `input:before` as
   * the radio background/border, and `input:after` as the filled area when
   * checked.
   */
  readonly radio: ThemeCSSRule

  /**
   * CSS Classes used:
   *
   * * `.modalOverlay`: Background shown behind the modal;
   * * `.modalCard`: The card displaying the modal content;
   *
   * These classes are global and ideally any app using this package should
   * not have overlapping classNames with them.
   */
  readonly modal: ThemeCSSRule
  /**
   * How many milliseconds does it take for the modal to show/hide on the default
   * animation.
   *
   * It's possible, but not recommended, to ignore this variable when creating
   * custom styles for modals.
   *
   * The side-effect of not setting this value correctly is that the modal might
   * not complete its hiding animation before it exits
   *
   * Defaults to 350ms
   */
  readonly modalAnimTimeMS: number
}

export type Theme = ThemeBase<true>
export type ThemeProps = { theme: Theme }
