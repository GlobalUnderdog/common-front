import React, { Fragment } from 'react'
import { ScreenClassProvider, setConfiguration } from 'react-grid-system'
import { Global, ThemeProvider, useTheme } from './emotion'
import { GUTheme } from './theme'
import { NeedsChildrenProps } from './util'

const Children: React.FC = ({ children }) => {
  const theme = useTheme()
  setConfiguration(theme.grid.rules)
  return (
    <Fragment>
      <Global styles={theme.global.css(theme)} />
      <Global styles={theme.modal.css(theme)} />
      <ScreenClassProvider>{children}</ScreenClassProvider>
    </Fragment>
  )
}

export const GUProvider: React.FC<
  NeedsChildrenProps & {
    theme: GUTheme
  }
> = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <Children children={children} />
    </ThemeProvider>
  )
}
