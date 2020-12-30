"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.cssUnit=void 0;/** Makes TS complain about missing children */ /**
 * When number it is assumed it's pixels, use string for any other value */ /**
 * Transforms JavaScript numbers into CSS units, defaulting to pixels by
 * default.
 *
 * If a string is passed as argument no transformation happens.
 */var cssUnit=function cssUnit(num){return typeof num==='number'?"".concat(num,"px"):num;};// Will be used by components using CommonStyleProps, enforces that only
// one size is picked.
exports.cssUnit=cssUnit;