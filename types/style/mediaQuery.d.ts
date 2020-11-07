export declare enum Breakpoints {
    small = 767,
    medium = 768,
    large = 992,
    xlarge = 1200
}
export declare const mediaQuery: {
    /**
     * Matches big and small phones (Bootstrap has two breakpoints for mobile devices).
     */
    readonly small: string;
    /**
     * Matches big and small phones on landscape mode (Bootstrap has two breakpoints
     * for mobile devices).
     */
    readonly smallLandscape: string;
    /**
     * Matches all devices from 768px (tablets and desktops)
     */
    readonly medium: string;
    /**
     * Matches only devices from 768px to 991px (tablets)
     */
    readonly mediumOnly: string;
    /**
     * Matches desktops and wide tablets
     */
    readonly large: string;
    /**
     * Matches desktops and wide tablets, but not ultra wide (1200px) desktops
     */
    readonly largeOnly: string;
    /**
     * Matches ultra wide desktops (1200px)
     */
    readonly xlarge: string;
};
