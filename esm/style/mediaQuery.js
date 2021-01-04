import _concatInstanceProperty from"@babel/runtime-corejs3/core-js-stable/instance/concat";var _context,_context2,_context3,_context4,_context5,_context6,_context7,_context8,_context9;var minWidth=function minWidth(px){return"(min-width: ".concat(px,"px)");};var maxWidth=function maxWidth(px){return"(max-width: ".concat(px,"px)");};var media='@media screen and';export var Breakpoints={small:767,medium:768,large:992,xlarge:1200};export var mediaQuery={/**
   * Matches big and small phones (Bootstrap has two breakpoints for mobile devices).
   */small:_concatInstanceProperty(_context="".concat(media," ")).call(_context,maxWidth(Breakpoints.small)),/**
   * Matches big and small phones on landscape mode (Bootstrap has two breakpoints
   * for mobile devices).
   */smallLandscape:_concatInstanceProperty(_context2="".concat(media," ")).call(_context2,maxWidth(Breakpoints.small)," and (orientation: landscape)"),/**
   * Matches all devices from 768px (tablets and desktops)
   */medium:_concatInstanceProperty(_context3="".concat(media," ")).call(_context3,minWidth(Breakpoints.medium)),/**
   * Matches only devices from 768px to 991px (tablets)
   */mediumOnly:_concatInstanceProperty(_context4=_concatInstanceProperty(_context5="".concat(media," ")).call(_context5,minWidth(Breakpoints.medium)," and ")).call(_context4,maxWidth(Breakpoints.large-1)),/**
   * Matches desktops and wide tablets
   */large:_concatInstanceProperty(_context6="".concat(media," ")).call(_context6,minWidth(Breakpoints.large)),/**
   * Matches desktops and wide tablets, but not ultra wide (1200px) desktops
   */largeOnly:_concatInstanceProperty(_context7=_concatInstanceProperty(_context8="".concat(media," ")).call(_context8,minWidth(Breakpoints.large)," and ")).call(_context7,maxWidth(Breakpoints.xlarge-1)),/**
   * Matches ultra wide desktops (1200px)
   */xlarge:_concatInstanceProperty(_context9="".concat(media," ")).call(_context9,minWidth(Breakpoints.xlarge))};