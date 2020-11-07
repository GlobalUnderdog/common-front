"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaQuery = exports.Breakpoints = void 0;
var minWidth = function (px) { return "(min-width: " + px + "px)"; };
var maxWidth = function (px) { return "(max-width: " + px + "px)"; };
var media = '@media screen and';
exports.Breakpoints = {
    small: 767,
    medium: 768,
    large: 992,
    xlarge: 1200,
};
exports.mediaQuery = {
    /**
     * Matches big and small phones (Bootstrap has two breakpoints for mobile devices).
     */
    small: media + " " + maxWidth(exports.Breakpoints.small),
    /**
     * Matches big and small phones on landscape mode (Bootstrap has two breakpoints
     * for mobile devices).
     */
    smallLandscape: media + " " + maxWidth(exports.Breakpoints.small) + " and (orientation: landscape)",
    /**
     * Matches all devices from 768px (tablets and desktops)
     */
    medium: media + " " + minWidth(exports.Breakpoints.medium),
    /**
     * Matches only devices from 768px to 991px (tablets)
     */
    mediumOnly: media + " " + minWidth(exports.Breakpoints.medium) + " and " + maxWidth(exports.Breakpoints.large - 1),
    /**
     * Matches desktops and wide tablets
     */
    large: media + " " + minWidth(exports.Breakpoints.large),
    /**
     * Matches desktops and wide tablets, but not ultra wide (1200px) desktops
     */
    largeOnly: media + " " + minWidth(exports.Breakpoints.large) + " and " + maxWidth(exports.Breakpoints.xlarge - 1),
    /**
     * Matches ultra wide desktops (1200px)
     */
    xlarge: media + " " + minWidth(exports.Breakpoints.xlarge),
};
