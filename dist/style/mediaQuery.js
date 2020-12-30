"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.mediaQuery=exports.Breakpoints=void 0;var minWidth=function minWidth(px){return"(min-width: ".concat(px,"px)");};var maxWidth=function maxWidth(px){return"(max-width: ".concat(px,"px)");};var media='@media screen and';var Breakpoints={small:767,medium:768,large:992,xlarge:1200};exports.Breakpoints=Breakpoints;var mediaQuery={/**
   * Matches big and small phones (Bootstrap has two breakpoints for mobile devices).
   */small:"".concat(media," ").concat(maxWidth(Breakpoints.small)),/**
   * Matches big and small phones on landscape mode (Bootstrap has two breakpoints
   * for mobile devices).
   */smallLandscape:"".concat(media," ").concat(maxWidth(Breakpoints.small)," and (orientation: landscape)"),/**
   * Matches all devices from 768px (tablets and desktops)
   */medium:"".concat(media," ").concat(minWidth(Breakpoints.medium)),/**
   * Matches only devices from 768px to 991px (tablets)
   */mediumOnly:"".concat(media," ").concat(minWidth(Breakpoints.medium)," and ").concat(maxWidth(Breakpoints.large-1)),/**
   * Matches desktops and wide tablets
   */large:"".concat(media," ").concat(minWidth(Breakpoints.large)),/**
   * Matches desktops and wide tablets, but not ultra wide (1200px) desktops
   */largeOnly:"".concat(media," ").concat(minWidth(Breakpoints.large)," and ").concat(maxWidth(Breakpoints.xlarge-1)),/**
   * Matches ultra wide desktops (1200px)
   */xlarge:"".concat(media," ").concat(minWidth(Breakpoints.xlarge))};exports.mediaQuery=mediaQuery;