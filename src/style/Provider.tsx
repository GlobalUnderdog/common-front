/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import React, { Fragment } from 'react'
import { ScreenClassProvider, setConfiguration } from 'react-grid-system'
import { ThemeProps } from './theme'
import { NeedsChildrenProps } from './util'
import { useTheme } from './emotion'

const Children: React.FC = ({ children }) => {
  const theme = useTheme()
  setConfiguration(theme.grid.rules)
  return (
    <Fragment>
      <Global styles={theme.global.css(theme)} />
      <Global styles={theme.font.h1h6.css(theme)} />
      <Global styles={theme.font.h1.css(theme)} />
      <Global styles={theme.font.h2.css(theme)} />
      <Global styles={theme.font.h3.css(theme)} />
      <Global styles={theme.font.h4.css(theme)} />
      <Global styles={theme.font.h5.css(theme)} />
      <Global styles={theme.font.h6.css(theme)} />
      <ScreenClassProvider>{children}</ScreenClassProvider>
    </Fragment>
  )
}
export const GlobalProvider: React.FC<NeedsChildrenProps & ThemeProps> = ({
  children,
  theme,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Children children={children} />
    </ThemeProvider>
  )
}
