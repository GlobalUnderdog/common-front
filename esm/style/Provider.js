/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Fragment } from 'react';
import { ScreenClassProvider, setConfiguration } from 'react-grid-system';
import { useTheme } from './emotion';
var Children = function (_a) {
    var children = _a.children;
    var theme = useTheme();
    setConfiguration(theme.grid.rules);
    return (jsx(Fragment, null,
        jsx(Global, { styles: theme.global.css(theme) }),
        jsx(Global, { styles: theme.font.h1h6.css(theme) }),
        jsx(Global, { styles: theme.font.h1.css(theme) }),
        jsx(Global, { styles: theme.font.h2.css(theme) }),
        jsx(Global, { styles: theme.font.h3.css(theme) }),
        jsx(Global, { styles: theme.font.h4.css(theme) }),
        jsx(Global, { styles: theme.font.h5.css(theme) }),
        jsx(Global, { styles: theme.font.h6.css(theme) }),
        jsx(ScreenClassProvider, null, children)));
};
export var GlobalProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    return (jsx(ThemeProvider, { theme: theme },
        jsx(Children, { children: children })));
};
