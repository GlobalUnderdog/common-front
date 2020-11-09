import { CreateStyled } from '@emotion/styled';
import { Theme } from './theme';
export { css, Global, keyframes } from '@emotion/core';
export { SerializedStyles } from '@emotion/css';
export { ThemeProvider } from 'emotion-theming';
export declare const styled: CreateStyled<Theme>;
export declare const useTheme: () => Theme;
