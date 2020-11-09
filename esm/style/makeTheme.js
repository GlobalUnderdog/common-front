import { __assign } from "tslib";
import { defaultTheme } from './defaultTheme';
import { cssUnit } from './util';
// Not declared in ./util since we don't want to export this function outside the package
var handleCSSRule = function (rules, defaultRule) {
    if (!rules)
        return { css: defaultRule.css };
    if (rules.replace)
        return {
            css: rules.css,
        };
    return {
        css: function (theme, props) {
            // Overwrites values from defaultStyle with the ones passed by ThemeCSSFunc
            var styles = [defaultRule.css, rules.css]
                .flat(2)
                .map(function (st) { return st(theme, props); })
                .flat(); // TS Complains if we don't have this, even though we've used flat()
            return styles;
        },
    };
};
export var makeTheme = function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21;
    // This ternary operation allow us to avoid `TypeError: theme is undefined`
    var _22 = theme
        ? theme
        : {}, color = _22.color, font = _22.font, radius = _22.radius, grid = _22.grid, button = _22.button, global = _22.global, textInput = _22.textInput;
    return {
        color: {
            accent: {
                dark: (_b = (_a = color === null || color === void 0 ? void 0 : color.accent) === null || _a === void 0 ? void 0 : _a.dark) !== null && _b !== void 0 ? _b : defaultTheme.color.accent.dark,
                normal: (_d = (_c = color === null || color === void 0 ? void 0 : color.accent) === null || _c === void 0 ? void 0 : _c.normal) !== null && _d !== void 0 ? _d : defaultTheme.color.accent.normal,
                light: (_f = (_e = color === null || color === void 0 ? void 0 : color.accent) === null || _e === void 0 ? void 0 : _e.light) !== null && _f !== void 0 ? _f : defaultTheme.color.accent.light,
            },
            canvas: {
                dark: (_h = (_g = color === null || color === void 0 ? void 0 : color.canvas) === null || _g === void 0 ? void 0 : _g.dark) !== null && _h !== void 0 ? _h : defaultTheme.color.canvas.dark,
                normal: (_k = (_j = color === null || color === void 0 ? void 0 : color.canvas) === null || _j === void 0 ? void 0 : _j.normal) !== null && _k !== void 0 ? _k : defaultTheme.color.canvas.normal,
                light: (_m = (_l = color === null || color === void 0 ? void 0 : color.canvas) === null || _l === void 0 ? void 0 : _l.light) !== null && _m !== void 0 ? _m : defaultTheme.color.canvas.light,
            },
            danger: {
                dark: (_p = (_o = color === null || color === void 0 ? void 0 : color.danger) === null || _o === void 0 ? void 0 : _o.dark) !== null && _p !== void 0 ? _p : defaultTheme.color.danger.dark,
                normal: (_r = (_q = color === null || color === void 0 ? void 0 : color.danger) === null || _q === void 0 ? void 0 : _q.normal) !== null && _r !== void 0 ? _r : defaultTheme.color.danger.normal,
                light: (_t = (_s = color === null || color === void 0 ? void 0 : color.danger) === null || _s === void 0 ? void 0 : _s.light) !== null && _t !== void 0 ? _t : defaultTheme.color.danger.light,
            },
            ink: {
                dark: (_v = (_u = color === null || color === void 0 ? void 0 : color.ink) === null || _u === void 0 ? void 0 : _u.dark) !== null && _v !== void 0 ? _v : defaultTheme.color.ink.dark,
                normal: (_x = (_w = color === null || color === void 0 ? void 0 : color.ink) === null || _w === void 0 ? void 0 : _w.normal) !== null && _x !== void 0 ? _x : defaultTheme.color.ink.normal,
                light: (_z = (_y = color === null || color === void 0 ? void 0 : color.ink) === null || _y === void 0 ? void 0 : _y.light) !== null && _z !== void 0 ? _z : defaultTheme.color.ink.light,
            },
            primary: {
                dark: (_1 = (_0 = color === null || color === void 0 ? void 0 : color.primary) === null || _0 === void 0 ? void 0 : _0.dark) !== null && _1 !== void 0 ? _1 : defaultTheme.color.primary.dark,
                normal: (_3 = (_2 = color === null || color === void 0 ? void 0 : color.primary) === null || _2 === void 0 ? void 0 : _2.normal) !== null && _3 !== void 0 ? _3 : defaultTheme.color.primary.normal,
                light: (_5 = (_4 = color === null || color === void 0 ? void 0 : color.primary) === null || _4 === void 0 ? void 0 : _4.light) !== null && _5 !== void 0 ? _5 : defaultTheme.color.primary.light,
            },
            success: {
                dark: (_7 = (_6 = color === null || color === void 0 ? void 0 : color.success) === null || _6 === void 0 ? void 0 : _6.dark) !== null && _7 !== void 0 ? _7 : defaultTheme.color.success.dark,
                normal: (_9 = (_8 = color === null || color === void 0 ? void 0 : color.success) === null || _8 === void 0 ? void 0 : _8.normal) !== null && _9 !== void 0 ? _9 : defaultTheme.color.success.normal,
                light: (_11 = (_10 = color === null || color === void 0 ? void 0 : color.success) === null || _10 === void 0 ? void 0 : _10.light) !== null && _11 !== void 0 ? _11 : defaultTheme.color.success.light,
            },
            warning: {
                dark: (_13 = (_12 = color === null || color === void 0 ? void 0 : color.warning) === null || _12 === void 0 ? void 0 : _12.dark) !== null && _13 !== void 0 ? _13 : defaultTheme.color.warning.dark,
                normal: (_15 = (_14 = color === null || color === void 0 ? void 0 : color.warning) === null || _14 === void 0 ? void 0 : _14.normal) !== null && _15 !== void 0 ? _15 : defaultTheme.color.warning.normal,
                light: (_17 = (_16 = color === null || color === void 0 ? void 0 : color.warning) === null || _16 === void 0 ? void 0 : _16.light) !== null && _17 !== void 0 ? _17 : defaultTheme.color.warning.light,
            },
        },
        grid: {
            replace: (_18 = grid === null || grid === void 0 ? void 0 : grid.replace) !== null && _18 !== void 0 ? _18 : false,
            rules: (grid === null || grid === void 0 ? void 0 : grid.replace) && (grid === null || grid === void 0 ? void 0 : grid.rules)
                ? grid.rules
                : __assign(__assign({}, defaultTheme.grid.rules), grid === null || grid === void 0 ? void 0 : grid.rules),
        },
        font: {
            accent: (font === null || font === void 0 ? void 0 : font.accent) ? "\"" + font.accent + "\", sans-serif"
                : defaultTheme.font.accent,
            mono: (font === null || font === void 0 ? void 0 : font.mono) ? "\"" + font.mono + "\", monospace" : defaultTheme.font.mono,
            sans: (font === null || font === void 0 ? void 0 : font.sans) ? "\"" + font.sans + "\", sans-serif" : defaultTheme.font.sans,
            serif: (font === null || font === void 0 ? void 0 : font.serif) ? "\"" + font.serif + "\", serif" : defaultTheme.font.serif,
            text: handleCSSRule(font === null || font === void 0 ? void 0 : font.text, defaultTheme.font.text),
            h1h6: handleCSSRule(font === null || font === void 0 ? void 0 : font.h1h6, defaultTheme.font.h1h6),
            h1: handleCSSRule(font === null || font === void 0 ? void 0 : font.h1, defaultTheme.font.h1),
            h2: handleCSSRule(font === null || font === void 0 ? void 0 : font.h2, defaultTheme.font.h2),
            h3: handleCSSRule(font === null || font === void 0 ? void 0 : font.h3, defaultTheme.font.h3),
            h4: handleCSSRule(font === null || font === void 0 ? void 0 : font.h4, defaultTheme.font.h4),
            h5: handleCSSRule(font === null || font === void 0 ? void 0 : font.h5, defaultTheme.font.h5),
            h6: handleCSSRule(font === null || font === void 0 ? void 0 : font.h6, defaultTheme.font.h6),
        },
        radius: {
            big: cssUnit((_19 = radius === null || radius === void 0 ? void 0 : radius.big) !== null && _19 !== void 0 ? _19 : defaultTheme.radius.big),
            normal: cssUnit((_20 = radius === null || radius === void 0 ? void 0 : radius.normal) !== null && _20 !== void 0 ? _20 : defaultTheme.radius.normal),
            small: cssUnit((_21 = radius === null || radius === void 0 ? void 0 : radius.small) !== null && _21 !== void 0 ? _21 : defaultTheme.radius.small),
        },
        global: handleCSSRule(global, defaultTheme.global),
        button: handleCSSRule(button, defaultTheme.button),
        textInput: handleCSSRule(textInput, defaultTheme.textInput),
    };
};
