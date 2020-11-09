export declare const colorTypes: readonly ["accent", "canvas", "danger", "ink", "primary", "success", "warning"];
export declare type ColorType = typeof colorTypes[number];
/**
 * Used to group shades of the same color.
 */
export interface ColorSwatch {
    dark: string;
    normal: string;
    light: string;
}
/**
 * Usage of generic to speed up the creation of themes when using makeTheme,
 * in this way developers can pass partial themes while just adding the values
 * over the default ones.
 */
declare type ColorThemeBase<Complete extends boolean> = Complete extends true ? Record<ColorType, ColorSwatch> : Partial<Record<ColorType, Partial<ColorSwatch>>>;
export declare type ColorTheme = ColorThemeBase<true>;
/**
 * Unlike `Partial<Color>` this one allows for `color = { accent: { normal: '#f00' } }`
 *
 * In other words, PartialColorTheme allows not only for `Partial<Color>`
 * but also for each `Color[type]` to be `Partial<ColorSwatch>`
 */
export declare type PartialColorTheme = Partial<ColorThemeBase<false>>;
export {};
