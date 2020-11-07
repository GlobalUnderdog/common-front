"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalProvider = void 0;
/** @jsx jsx */
var core_1 = require("@emotion/core");
var core_2 = require("@emotion/core");
var emotion_theming_1 = require("emotion-theming");
var react_1 = require("react");
var react_grid_system_1 = require("react-grid-system");
var emotion_1 = require("./emotion");
var Children = function (_a) {
    var children = _a.children;
    var theme = emotion_1.useTheme();
    react_grid_system_1.setConfiguration(theme.grid.rules);
    return (core_1.jsx(react_1.Fragment, null,
        core_1.jsx(core_2.Global, { styles: theme.global.css(theme) }),
        core_1.jsx(core_2.Global, { styles: theme.font.h1h6.css(theme) }),
        core_1.jsx(core_2.Global, { styles: theme.font.h1.css(theme) }),
        core_1.jsx(core_2.Global, { styles: theme.font.h2.css(theme) }),
        core_1.jsx(core_2.Global, { styles: theme.font.h3.css(theme) }),
        core_1.jsx(core_2.Global, { styles: theme.font.h4.css(theme) }),
        core_1.jsx(core_2.Global, { styles: theme.font.h5.css(theme) }),
        core_1.jsx(core_2.Global, { styles: theme.font.h6.css(theme) }),
        core_1.jsx(react_grid_system_1.ScreenClassProvider, null, children)));
};
exports.GlobalProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    return (core_1.jsx(emotion_theming_1.ThemeProvider, { theme: theme },
        core_1.jsx(Children, { children: children })));
};
