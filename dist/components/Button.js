"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../style");
exports.Button = style_1.styled.button(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (p) { return p.theme.button.css(p.theme, { color: p.color }); });
var templateObject_1;
