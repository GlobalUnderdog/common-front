import { PartialDeep } from 'type-fest';
import { GUTheme } from './theme';
export declare const makeTheme: <T extends GUTheme<import("./theme").GUThemeProps> = GUTheme<import("./theme").GUThemeProps>>(theme?: PartialDeep<T> | undefined) => T;
