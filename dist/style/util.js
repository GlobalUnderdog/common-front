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
/**
 * Parses colors, the purpose of this function is to make all 3 digits HEX
 * into 6 digits. This will allow us to use HEX opacity on color variables
 * without any issues, for example `color: ${color}80` for 50% opacity.
 *
 * Does nothing if the given string is not a 3 digits hex color, e.g. rgb(0,0,0).
 */
export var parseColor = function (color) {
    if (color.length === 4 && color[0] === '#') {
        // #F00 -> #FF0000
        return "#" + color
            .substr(1)
            .split('')
            .map(function (s) { return s + s; })
            .join('');
    }
    return color;
};
