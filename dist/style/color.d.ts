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
export declare type ColorTheme = Record<ColorType, Palette>;
