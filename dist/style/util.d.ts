import { ReactNode } from 'react';
import { ColorType } from './color';
import { SerializedStyles } from './emotion';
import { GUThemeProps } from './theme';
/** Makes TS complain about missing children */
export interface NeedsChildrenProps {
    children: ReactNode | ReactNode[];
}
/**
 * When number it is assumed it's pixels, use string for any other value */
export declare type CSSUnit = string | number;
/**
 * Transforms JavaScript numbers into CSS units, defaulting to pixels by
 * default.
 *
 * If a string is passed as argument no transformation happens.
 */
export declare const cssUnit: (num: CSSUnit) => string;
declare type SizeHelpers = {
    big?: true;
    small?: never | false;
} | {
    big?: never | false;
    small?: true;
};
export declare type CommonStyleProps = SizeHelpers & {
    color?: ColorType;
    outline?: boolean;
    wide?: boolean;
};
export declare type ThemeCSSFunc<T extends GUThemeProps = GUThemeProps> = (theme: T, props?: any) => SerializedStyles | SerializedStyles[];
export interface ThemeCSSRule<T extends GUThemeProps = GUThemeProps> {
    /**
     * If true the Style passed in css will replace the original one set by
     * @globalunderdog/common-front Theme.
     *
     * Defaults to `false`
     */
    readonly replace?: boolean;
    readonly css: ThemeCSSFunc<T>;
}
export {};
