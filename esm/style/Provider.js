import { __makeTemplateObject } from "tslib";
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Fragment } from 'react';
import { ScreenClassProvider, setConfiguration } from 'react-grid-system';
import { useTheme } from './emotion';
import { css } from './emotion';
var Children = function (_a) {
    var children = _a.children;
    var theme = useTheme();
    setConfiguration(theme.grid.rules);
    return (jsx(Fragment, null,
        jsx(Global, { styles: theme.global.css(theme) }),
        jsx(Global, { styles: theme.font.text.css(theme) }),
        jsx(Global, { styles: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6 {\n            ", "\n          }\n        "], ["\n          h1,\n          h2,\n          h3,\n          h4,\n          h5,\n          h6 {\n            ", "\n          }\n        "])), theme.font.h1h6.css(theme)) }),
        jsx(Global, { styles: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          h1 {\n            ", "\n          }\n        "], ["\n          h1 {\n            ", "\n          }\n        "])), theme.font.h1.css(theme)) }),
        jsx(Global, { styles: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          h2 {\n            ", "\n          }\n        "], ["\n          h2 {\n            ", "\n          }\n        "])), theme.font.h2.css(theme)) }),
        jsx(Global, { styles: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          h3 {\n            ", "\n          }\n        "], ["\n          h3 {\n            ", "\n          }\n        "])), theme.font.h3.css(theme)) }),
        jsx(Global, { styles: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n          h4 {\n            ", "\n          }\n        "], ["\n          h4 {\n            ", "\n          }\n        "])), theme.font.h4.css(theme)) }),
        jsx(Global, { styles: css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n          h5 {\n            ", "\n          }\n        "], ["\n          h5 {\n            ", "\n          }\n        "])), theme.font.h5.css(theme)) }),
        jsx(Global, { styles: css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n          h6 {\n            ", "\n          }\n        "], ["\n          h6 {\n            ", "\n          }\n        "])), theme.font.h6.css(theme)) }),
        jsx(ScreenClassProvider, null, children)));
};
export var GlobalProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    return (jsx(ThemeProvider, { theme: theme },
        jsx(Children, { children: children })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
