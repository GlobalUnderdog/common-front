import { Configuration } from 'react-grid-system';
import { GUColorTheme } from './color';
import { GURadiusTheme } from './radius';
import { GUThemeCSSRule } from './util';
/**
 * Contains only the basic properties of GUTheme, missing the rules & functions
 * for styles, global styles, etc.
 */
export interface GUThemeProps {
    readonly color: GUColorTheme;
    readonly radius: GURadiusTheme;
}
export declare type GUTheme<T extends GUThemeProps = GUThemeProps> = T & {
    readonly grid: {
        /** Erases the default grid settings upon writing the new one, defaults to `false` */
        readonly replace?: boolean;
        readonly rules: Configuration;
    };
    /**
     * Generic global style to be applied on the page, defaults to fixes,
     * normalize.css, fa-spin & removes the outline on focused inputs,
     * buttons, etc.
     */
    readonly global: GUThemeCSSRule<T>;
    /**
     * The default style for `<Button/>`, does not change HTML `<button/>`
     * to avoid conflicts
     *
     * Uses radius.normal by default
     */
    readonly button: GUThemeCSSRule<T>;
    /**
     * Don't forget that TextArea is a `<div/>` wrapping a `<label/>` + `<textarea/>`:
     *
     * ```tsx
     * Input = () => (
     *    <div>
     *      <label/>
     *      <textarea/>
     *    </div>
     * )
     * ```
     */
    readonly input: GUThemeCSSRule<T>;
    /**
     * Don't forget that Input is a `<div/>` wrapping a `<label/>` + `<input/>`:
     *
     * ```tsx
     * TextArea = () => (
     *    <div>
     *      <label/>
     *      <input/>
     *    </div>
     * )
     * ```
     *
     * By default we don't use resizable TextAreas, which is the default HTML
     * behavior. This can be changed by setting this rule:
     * ```css
     * & > textarea {
     *   resize: both; // can also be 'vertical' or 'horizontal'
     * }
     * ```
     */
    readonly textArea: GUThemeCSSRule<T>;
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
    readonly checkbox: GUThemeCSSRule<T>;
    /**
     * Don't forget that Radio is a `<div/>` wrapping a `<input/>` + `<label/>`:
     *
     * ```tsx
     * Radio = () => (
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
    readonly radio: GUThemeCSSRule<T>;
    /**
     * CSS Classes used:
     *
     * * `.modalOverlay`: Background shown behind the modal;
     * * `.modalCard`: The card displaying the modal content;
     *
     * These classes are global and ideally any app using this package should
     * not have overlapping classNames with them.
     */
    readonly modal: GUThemeCSSRule<T>;
};
