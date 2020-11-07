/// <reference types="react" />
import { ColorSwatch, ColorType } from '../style';
interface Props {
    /**
     * If no color is set, defaults to use base.light as background,
     * 'canvas' and 'ink' uses the default colors
     */
    color?: ColorType;
    /**
     * Allows to change the shade of the color being used, defaults to 'normal',
     * on all cases except when Props.color is undefined, canvas or ink (since
     * in these cases it would look to close to the base text).
     */
    shade?: keyof ColorSwatch;
}
export declare const OutlineButton: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, Props, import("../style").Theme>;
export {};
