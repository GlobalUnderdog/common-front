"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTheme = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@emotion/core");
var _1 = require(".");
var normalizeMin = '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}';
var defaultColorTheme = {
    accent: {
        dark: '#077C7D',
        normal: '#00B7B8',
        light: '#6AE1E2',
    },
    canvas: {
        dark: '#E9E9E9',
        normal: '#FAFAFA',
        light: '#FFF',
    },
    danger: {
        dark: '#C62828',
        normal: '#F44336',
        light: '#FFEBEE',
    },
    ink: {
        dark: '#000',
        normal: '#444',
        light: '#888',
    },
    primary: {
        dark: '#054B2',
        normal: '#0078D4',
        light: '#1499FF',
    },
    success: {
        dark: '#F8800',
        normal: '#8BC34A',
        light: '#C5DBB2',
    },
    warning: {
        dark: '#C5C00',
        normal: '#E65100',
        light: '#FFE0B2',
    },
};
var defaultFontTheme = {
    sans: 'sans-serif',
    serif: 'serif',
    mono: 'monospace',
    accent: 'sans-serif',
    text: {
        css: function (_a) {
            var color = _a.color, font = _a.font;
            return core_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      /*\n      Setting this in HTML so divs, spans and other elements benefit\n      from these rules\n      */\n      html {\n        color: ", ";\n        font-family: ", ";\n        font-size: 18px;\n        /*\n        Line-height for readability based on\n        https://www.w3.org/TR/WCAG20-TECHS/C21.html#C21-description\n        */\n        line-height: 1.5;\n        ::selection {\n          background-color: ", ";\n          color: ", ";\n        }\n        :not(button) > a {\n          color: ", ";\n          text-decoration: underline;\n          cursor: pointer;\n        }\n      }\n    "], ["\n      /*\n      Setting this in HTML so divs, spans and other elements benefit\n      from these rules\n      */\n      html {\n        color: ", ";\n        font-family: ", ";\n        font-size: 18px;\n        /*\n        Line-height for readability based on\n        https://www.w3.org/TR/WCAG20-TECHS/C21.html#C21-description\n        */\n        line-height: 1.5;\n        ::selection {\n          background-color: ", ";\n          color: ", ";\n        }\n        :not(button) > a {\n          color: ", ";\n          text-decoration: underline;\n          cursor: pointer;\n        }\n      }\n    "])), color.ink.normal, font.sans, color.primary.dark, color.canvas.normal, color.primary.normal);
        },
    },
    h1h6: {
        css: function (_a) {
            var color = _a.color, font = _a.font;
            return core_1.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      color: ", ";\n      font-family: ", ";\n      /*\n      Since headers have bigger margins than regular text, we decrease\n      line-height in a pinch\n      */\n      line-height: 1.4;\n      font-weight: 600;\n    "], ["\n      color: ", ";\n      font-family: ", ";\n      /*\n      Since headers have bigger margins than regular text, we decrease\n      line-height in a pinch\n      */\n      line-height: 1.4;\n      font-weight: 600;\n    "])), color.ink.light, font.accent);
        },
    },
    h1: {
        css: function () { return core_1.css(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n      font-size: 64px;\n    "], ["\n      font-size: 64px;\n    "]))); },
    },
    h2: {
        css: function () { return core_1.css(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n      font-size: 52px;\n    "], ["\n      font-size: 52px;\n    "]))); },
    },
    h3: {
        css: function () { return core_1.css(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n      font-size: 48px;\n    "], ["\n      font-size: 48px;\n    "]))); },
    },
    h4: {
        css: function () { return core_1.css(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n      font-size: 36px;\n    "], ["\n      font-size: 36px;\n    "]))); },
    },
    h5: {
        css: function () { return core_1.css(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n      font-size: 24px;\n      text-transform: uppercase;\n    "], ["\n      font-size: 24px;\n      text-transform: uppercase;\n    "]))); },
    },
    h6: {
        css: function () { return core_1.css(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n      font-size: 18px;\n      text-transform: uppercase;\n    "], ["\n      font-size: 18px;\n      text-transform: uppercase;\n    "]))); },
    },
};
exports.defaultTheme = {
    color: defaultColorTheme,
    font: defaultFontTheme,
    radius: {
        big: 8,
        normal: 4,
        small: 2,
    },
    grid: {
        rules: {
            breakpoints: [
                0,
                _1.Breakpoints.medium,
                _1.Breakpoints.large,
                _1.Breakpoints.xlarge,
            ],
            defaultScreenClass: 'xs',
            containerWidths: [576, 768, 992],
            gridColumns: 12,
            gutterWidth: 30,
            maxScreenClass: 'lg',
        },
    },
    global: {
        css: function (_a) {
            var color = _a.color;
            return core_1.css(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n      ", "\n\n      html {\n        scroll-behavior: smooth;\n        background-color: ", ";\n      }\n\n      body {\n        /*\n        Sometimes, when using react-awesome-reveal we might trigger some\n        unwanted horizontal spacing, creating issues like briefly showing the\n        horizontal scrollbar or permanently increasing the width of the page.\n        Setting width: 100% with overflow-x: hidden fixes this issue.\n        */\n        width: 100% !important;\n        max-width: 100% !important;\n        overflow-x: hidden;\n        /*\n        In OSes that have visible scrollbars changing to a page without too\n        much content might cause components to fickle, since the scrollbar\n        will show/hide according to the page's height (for example a simple\n        login page will have no scrollbar). We ensure that the overflow-y is\n        always scrollable so these OSes can have a consistent look & feel in\n        all pages.\n        */\n        overflow-y: scroll;\n      }\n\n      button:focus {\n        outline: none;\n      }\n\n      /*\n      Setting this here since icons.css is replaced with newer icons from time\n      to time.\n      */\n      @keyframes fa-spin {\n        from {\n          transform: rotateZ(0);\n        }\n        to {\n          transform: rotateZ(359deg);\n        }\n      }\n      .fa-spin {\n        animation: fa-spin 2s linear forwards infinite;\n      }\n    "], ["\n      ", "\n\n      html {\n        scroll-behavior: smooth;\n        background-color: ", ";\n      }\n\n      body {\n        /*\n        Sometimes, when using react-awesome-reveal we might trigger some\n        unwanted horizontal spacing, creating issues like briefly showing the\n        horizontal scrollbar or permanently increasing the width of the page.\n        Setting width: 100% with overflow-x: hidden fixes this issue.\n        */\n        width: 100% !important;\n        max-width: 100% !important;\n        overflow-x: hidden;\n        /*\n        In OSes that have visible scrollbars changing to a page without too\n        much content might cause components to fickle, since the scrollbar\n        will show/hide according to the page's height (for example a simple\n        login page will have no scrollbar). We ensure that the overflow-y is\n        always scrollable so these OSes can have a consistent look & feel in\n        all pages.\n        */\n        overflow-y: scroll;\n      }\n\n      button:focus {\n        outline: none;\n      }\n\n      /*\n      Setting this here since icons.css is replaced with newer icons from time\n      to time.\n      */\n      @keyframes fa-spin {\n        from {\n          transform: rotateZ(0);\n        }\n        to {\n          transform: rotateZ(359deg);\n        }\n      }\n      .fa-spin {\n        animation: fa-spin 2s linear forwards infinite;\n      }\n    "])), normalizeMin, color.canvas.normal);
        },
    },
    button: {
        css: function (_a, p) {
            var color = _a.color, font = _a.font, radius = _a.radius;
            var buttonColor = p ? p.color : undefined;
            return core_1.css(templateObject_10 || (templateObject_10 = tslib_1.__makeTemplateObject(["\n        min-width: 92px;\n        padding: 12px 24px;\n\n        font-family: ", ";\n        font-weight: 600;\n        font-size: 18px;\n\n        background: none;\n        border: none;\n        border-radius: ", ";\n        box-shadow: 0px 4px 4px #0002;\n\n        /* Colors */\n\n        /* Foreground color */\n        color: ", ";\n\n        /* Default background color */\n        background-color: ", ";\n\n        /* Hover colors */\n        transition: background-color ease 0.3s;\n        &:hover {\n          cursor: pointer;\n          background-color: ", ";\n        }\n      "], ["\n        min-width: 92px;\n        padding: 12px 24px;\n\n        font-family: ", ";\n        font-weight: 600;\n        font-size: 18px;\n\n        background: none;\n        border: none;\n        border-radius: ", ";\n        box-shadow: 0px 4px 4px #0002;\n\n        /* Colors */\n\n        /* Foreground color */\n        color: ",
                ";\n\n        /* Default background color */\n        background-color: ",
                ";\n\n        /* Hover colors */\n        transition: background-color ease 0.3s;\n        &:hover {\n          cursor: pointer;\n          background-color: ",
                ";\n        }\n      "])), font.accent, radius.normal, (function () {
                switch (buttonColor) {
                    case undefined:
                    case 'canvas':
                    case 'ink':
                        return color.ink.normal;
                    default:
                        return color.canvas.light;
                }
            })(), (function () {
                switch (buttonColor) {
                    case undefined:
                    case 'canvas':
                    case 'ink':
                        return color.canvas.light;
                    default:
                        return color[buttonColor].normal;
                }
            })(), (function () {
                switch (buttonColor) {
                    case undefined:
                    case 'canvas':
                    case 'ink':
                        return color.canvas.dark;
                    default:
                        return color[buttonColor].dark;
                }
            })());
        },
    },
    textInput: {
        css: function (_a) {
            var color = _a.color, font = _a.font, radius = _a.radius;
            return core_1.css(templateObject_11 || (templateObject_11 = tslib_1.__makeTemplateObject(["\n      /* Wrapper rules */\n      display: flex;\n      flex-direction: column;\n      margin: 15px 0;\n\n      & > input {\n        display: flex;\n        align-items: center;\n        font-family: ", ";\n        height: 45px;\n        padding: 0 4px;\n\n        background: none;\n        background-color: ", ";\n        border: 2px solid ", ";\n        border-radius: ", ";\n        transition: border-color ease 0.2s;\n        &:focus {\n          border-color: ", ";\n        }\n        &:disabled {\n          color: ", ";\n          background-color: ", ";\n        }\n      }\n\n      & > label {\n        color: ", ";\n        font-size: 16px;\n        margin: 8px 0;\n      }\n    "], ["\n      /* Wrapper rules */\n      display: flex;\n      flex-direction: column;\n      margin: 15px 0;\n\n      & > input {\n        display: flex;\n        align-items: center;\n        font-family: ", ";\n        height: 45px;\n        padding: 0 4px;\n\n        background: none;\n        background-color: ", ";\n        border: 2px solid ", ";\n        border-radius: ", ";\n        transition: border-color ease 0.2s;\n        &:focus {\n          border-color: ", ";\n        }\n        &:disabled {\n          color: ", ";\n          background-color: ", ";\n        }\n      }\n\n      & > label {\n        color: ", ";\n        font-size: 16px;\n        margin: 8px 0;\n      }\n    "])), font.sans, color.canvas.light, color.ink.light, radius.normal, color.primary.normal, color.ink.light, color.canvas.dark, color.primary.normal);
        },
    },
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
