export { default as ReactGA } from 'react-ga';
export { default as TagManager } from 'react-gtm-module';
export interface GUAnalytics {
    /** Will default to 'Button Click' on `<GUButton/>` and 'Link Click' on `<Link/>` */
    category?: string;
    action: string;
    label?: string;
    payload?: unknown;
}
/** Returns the current data layer from Google Tag Manager */
export declare const dataLayer: () => string | undefined;
/**
 * NOT to be used outside `common-front`. Used internally withing the
 * package to avoid unnecessary hooks/complicated containers to store this
 * the data layer used by GTM.
 */
export declare const setDataLayer: (s: string | undefined) => void;
export declare const googleAnalyticsInit: (googleUa: string) => void;
export declare const googleAnalyticsTrackPage: (path: string) => void;
