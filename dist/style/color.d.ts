export declare const colorTypes: readonly ["canvas", "ink", "primary", "secondary", "error", "warning", "info", "success"];
export declare type ColorType = typeof colorTypes[number];
/**
 * Used to group shades of the same color.
 */
export interface Palette {
    dark: string;
    main: string;
    light: string;
}
/**
 * Usage of generic to speed up the creation of themes when using makeTheme,
 * in this way developers can pass partial themes while just adding the values
 * over the default ones.
 */
declare type ColorThemeBase<Complete extends boolean> = Complete extends true ? Record<ColorType, Palette> : Partial<Record<ColorType, Partial<Palette>>>;
export declare type ColorTheme = ColorThemeBase<true>;
export declare type PartialColorTheme = ColorThemeBase<false>;
export {};
