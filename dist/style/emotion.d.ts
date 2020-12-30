import { GUTheme } from './theme';
export { default as styled } from '@emotion/styled';
export { css, Global, jsx, keyframes, ThemeProvider, useTheme, } from '@emotion/react';
export type { Keyframes, SerializedStyles } from '@emotion/serialize';
declare module '@emotion/react' {
    interface Theme extends GUTheme {
    }
}
