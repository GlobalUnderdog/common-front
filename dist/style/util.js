"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssUnit = exports.colorTypes = void 0;
exports.colorTypes = [
    'accent',
    'canvas',
    'danger',
    'ink',
    'primary',
    'success',
    'warning',
];
/**
 * Transforms JavaScript numbers into CSS units, defaulting to pixels by
 * default.
 *
 * If a string is passed as argument no transformation happens.
 */
exports.cssUnit = function (num) {
    return typeof num === 'number' ? num + "px" : num;
};
