"use strict";var _interopRequireDefault=require("@babel/runtime-corejs3/helpers/interopRequireDefault");var _Object$defineProperty=require("@babel/runtime-corejs3/core-js-stable/object/define-property");_Object$defineProperty(exports,"__esModule",{value:true});exports.mediaQuery=exports.Breakpoints=void 0;var _concat=_interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));var _context,_context2,_context3,_context4,_context5,_context6,_context7,_context8,_context9;var minWidth=function minWidth(px){return"(min-width: ".concat(px,"px)");};var maxWidth=function maxWidth(px){return"(max-width: ".concat(px,"px)");};var media='@media screen and';var Breakpoints={small:767,medium:768,large:992,xlarge:1200};exports.Breakpoints=Breakpoints;var mediaQuery={/**
   * Matches big and small phones (Bootstrap has two breakpoints for mobile devices).
   */small:(0,_concat.default)(_context="".concat(media," ")).call(_context,maxWidth(Breakpoints.small)),/**
   * Matches big and small phones on landscape mode (Bootstrap has two breakpoints
   * for mobile devices).
   */smallLandscape:(0,_concat.default)(_context2="".concat(media," ")).call(_context2,maxWidth(Breakpoints.small)," and (orientation: landscape)"),/**
   * Matches all devices from 768px (tablets and desktops)
   */medium:(0,_concat.default)(_context3="".concat(media," ")).call(_context3,minWidth(Breakpoints.medium)),/**
   * Matches only devices from 768px to 991px (tablets)
   */mediumOnly:(0,_concat.default)(_context4=(0,_concat.default)(_context5="".concat(media," ")).call(_context5,minWidth(Breakpoints.medium)," and ")).call(_context4,maxWidth(Breakpoints.large-1)),/**
   * Matches desktops and wide tablets
   */large:(0,_concat.default)(_context6="".concat(media," ")).call(_context6,minWidth(Breakpoints.large)),/**
   * Matches desktops and wide tablets, but not ultra wide (1200px) desktops
   */largeOnly:(0,_concat.default)(_context7=(0,_concat.default)(_context8="".concat(media," ")).call(_context8,minWidth(Breakpoints.large)," and ")).call(_context7,maxWidth(Breakpoints.xlarge-1)),/**
   * Matches ultra wide desktops (1200px)
   */xlarge:(0,_concat.default)(_context9="".concat(media," ")).call(_context9,minWidth(Breakpoints.xlarge))};exports.mediaQuery=mediaQuery;