import { CSSUnit } from './util';
/**
 * To keep border-radius consistent throughout the app, we define 3 possible
 * values for it. These values are not limited to any HTML Element, but usually
 * pages have a common border-radius for most components (buttons, inputs, toasts, etc.),
 * a smaller one for checkboxes, small buttons, tooltips, and a bigger one for components
 * that are often detached from the page, e.g. modals, cards.
 */
export interface GURadiusTheme {
    readonly big: CSSUnit;
    readonly main: CSSUnit;
    readonly small: CSSUnit;
}
