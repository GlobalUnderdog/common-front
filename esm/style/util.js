export var colorTypes = [
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
export var cssUnit = function (num) {
    return typeof num === 'number' ? num + "px" : num;
};
