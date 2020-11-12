import _styled, { CreateStyled } from '@emotion/styled'
import { useTheme as _useTheme } from 'emotion-theming'
import { Theme } from './theme'

export { css, Global, jsx, keyframes } from '@emotion/core'
export { SerializedStyles } from '@emotion/css'
export { ThemeProvider } from 'emotion-theming'
export const styled = _styled as CreateStyled<Theme>
export const useTheme = (): Theme => _useTheme<Theme>()
