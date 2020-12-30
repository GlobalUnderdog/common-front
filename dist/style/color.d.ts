export declare const guColorTypes: readonly ["canvas", "ink", "primary", "secondary", "error", "warning", "info", "success"];
export declare type GUColorType = typeof guColorTypes[number];
/**
 * Used to group shades of the same color.
 */
export interface Palette {
    dark: string;
    main: string;
    light: string;
}
export declare type GUColorTheme = Record<GUColorType, Palette>;
