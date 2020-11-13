import _styled, { CreateStyled } from '@emotion/styled'
import { useTheme as _useTheme } from 'emotion-theming'
import { GUTheme } from './theme'

export { css, Global, jsx, keyframes } from '@emotion/core'
export { Keyframes } from '@emotion/serialize'
export { SerializedStyles } from '@emotion/css'
export { default as untypedStyled, CreateStyled } from '@emotion/styled'
export { ThemeProvider } from 'emotion-theming'
export const styled = _styled as CreateStyled<GUTheme>
/**
 * Defaults the type to Theme, however it is possible to change it.
 *
 * Examples:
 *
 * ```tsx
 * // Using the default theme from `@globalunderdog/common-front`
 * const theme = useTheme()
 *
 * // Inline example
 * const theme = useTheme<{color: string}>()
 *
 * // Loading the theme from an interface
 * const theme = useTheme<MyAppTheme>()
 * ```
 */
export const useTheme = <T = GUTheme>(): T => _useTheme() as T
