"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var style_1 = require("../style");
exports.TextInput = function (props) {
    var theme = style_1.useTheme();
    var id = props.id, label = props.label;
    return (core_1.jsx("div", { css: theme.textInput.css(theme, props) },
        label && core_1.jsx("label", { htmlFor: id }, label),
        core_1.jsx("input", tslib_1.__assign({}, props))));
};
exports.TextInput.defaultProps = { type: 'text' };
