var minWidth = function (px) { return "(min-width: " + px + "px)"; };
var maxWidth = function (px) { return "(max-width: " + px + "px)"; };
var media = '@media screen and';
export var Breakpoints = {
    small: 767,
    medium: 768,
    large: 992,
    xlarge: 1200,
};
export var mediaQuery = {
    /**
     * Matches big and small phones (Bootstrap has two breakpoints for mobile devices).
     */
    small: media + " " + maxWidth(Breakpoints.small),
    /**
     * Matches big and small phones on landscape mode (Bootstrap has two breakpoints
     * for mobile devices).
     */
    smallLandscape: media + " " + maxWidth(Breakpoints.small) + " and (orientation: landscape)",
    /**
     * Matches all devices from 768px (tablets and desktops)
     */
    medium: media + " " + minWidth(Breakpoints.medium),
    /**
     * Matches only devices from 768px to 991px (tablets)
     */
    mediumOnly: media + " " + minWidth(Breakpoints.medium) + " and " + maxWidth(Breakpoints.large - 1),
    /**
     * Matches desktops and wide tablets
     */
    large: media + " " + minWidth(Breakpoints.large),
    /**
     * Matches desktops and wide tablets, but not ultra wide (1200px) desktops
     */
    largeOnly: media + " " + minWidth(Breakpoints.large) + " and " + maxWidth(Breakpoints.xlarge - 1),
    /**
     * Matches ultra wide desktops (1200px)
     */
    xlarge: media + " " + minWidth(Breakpoints.xlarge),
};
