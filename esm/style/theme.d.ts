import { Configuration } from 'react-grid-system';
import { ColorTheme, PartialColorTheme } from './color';
import { FontTheme, PartialFontTheme } from './font';
import { PartialRadiusTheme, RadiusTheme } from './radius';
import { ThemeCSSRule } from './util';
/**
 * Usage of generic to speed up the creation of themes using makeTheme,
 * in this way developers can pass partial themes while just adding the values
 * over the default ones.
 */
export interface ThemeBase<Complete extends boolean> {
    readonly color: Complete extends true ? ColorTheme : PartialColorTheme;
    readonly font: Complete extends true ? FontTheme : PartialFontTheme;
    readonly radius: Complete extends true ? RadiusTheme : PartialRadiusTheme;
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
    readonly global: ThemeCSSRule;
    /**
     * The default style for `<Button/>`, does not change HTML `<button/>`
     * to avoid conflicts
     *
     * Uses radius.normal by default
     */
    readonly button: ThemeCSSRule;
    /**
     * Don't forget that TextInput is a `<div/>` wrapping a `<label/>` + `<input/>`:
     *
     * ```tsx
     * TextInput = () => (
     *    <div>
     *      <label/>
     *      <input/>
     *    </div>
     * )
     * ```
     */
    readonly textInput: ThemeCSSRule;
}
export declare type Theme = ThemeBase<true>;
export declare type ThemeProps = {
    theme: Theme;
};
