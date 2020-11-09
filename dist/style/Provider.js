"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalProvider = void 0;
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var core_2 = require("@emotion/core");
var emotion_theming_1 = require("emotion-theming");
var react_1 = require("react");
var react_grid_system_1 = require("react-grid-system");
var emotion_1 = require("./emotion");
var emotion_2 = require("./emotion");
var Children = function (_a) {
    var children = _a.children;
    var theme = emotion_1.useTheme();
    react_grid_system_1.setConfiguration(theme.grid.rules);
    return (core_1.jsx(react_1.Fragment, null,
        core_1.jsx(core_2.Global, { styles: theme.global.css(theme) }),
        core_1.jsx(core_2.Global, { styles: theme.font.text.css(theme) }),
        core_1.jsx(core_2.Global, { styles: emotion_2.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6 {\n            ", "\n          }\n        "], ["\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6 {\n            ", "\n          }\n        "])), theme.font.h1h6.css(theme)) }),
        core_1.jsx(core_2.Global, { styles: emotion_2.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n          h1 {\n            ", "\n          }\n        "], ["\n          h1 {\n            ", "\n          }\n        "])), theme.font.h1.css(theme)) }),
        core_1.jsx(core_2.Global, { styles: emotion_2.css(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n          h2 {\n            ", "\n          }\n        "], ["\n          h2 {\n            ", "\n          }\n        "])), theme.font.h2.css(theme)) }),
        core_1.jsx(core_2.Global, { styles: emotion_2.css(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n          h3 {\n            ", "\n          }\n        "], ["\n          h3 {\n            ", "\n          }\n        "])), theme.font.h3.css(theme)) }),
        core_1.jsx(core_2.Global, { styles: emotion_2.css(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n          h4 {\n            ", "\n          }\n        "], ["\n          h4 {\n            ", "\n          }\n        "])), theme.font.h4.css(theme)) }),
        core_1.jsx(core_2.Global, { styles: emotion_2.css(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n          h5 {\n            ", "\n          }\n        "], ["\n          h5 {\n            ", "\n          }\n        "])), theme.font.h5.css(theme)) }),
        core_1.jsx(core_2.Global, { styles: emotion_2.css(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n          h6 {\n            ", "\n          }\n        "], ["\n          h6 {\n            ", "\n          }\n        "])), theme.font.h6.css(theme)) }),
        core_1.jsx(react_grid_system_1.ScreenClassProvider, null, children)));
};
exports.GlobalProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    return (core_1.jsx(emotion_theming_1.ThemeProvider, { theme: theme },
        core_1.jsx(Children, { children: children })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
