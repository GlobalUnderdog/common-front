/** @jsx jsx */
import React, { Fragment } from 'react'
import { ScreenClassProvider, setConfiguration } from 'react-grid-system'
import { Global, jsx, ThemeProvider, useTheme } from './emotion'
import { ThemeProps } from './theme'
import { NeedsChildrenProps } from './util'

const Children: React.FC = ({ children }) => {
  const theme = useTheme()
  setConfiguration(theme.grid.rules)
  return (
    <Fragment>
      <Global styles={theme.global.css(theme)} />
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
