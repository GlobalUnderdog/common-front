/** @jsx jsx */
import React, { Fragment } from 'react'
import { ScreenClassProvider, setConfiguration } from 'react-grid-system'
import { css, Global, jsx, ThemeProvider, useTheme } from './emotion'
import { ThemeProps } from './theme'
import { NeedsChildrenProps } from './util'

const Children: React.FC = ({ children }) => {
  const theme = useTheme()
  setConfiguration(theme.grid.rules)
  return (
    <Fragment>
      <Global styles={theme.global.css(theme)} />
      <Global styles={theme.font.text.css(theme)} />
      <Global
        styles={css`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            ${theme.font.h1h6.css(theme)}
          }
        `}
      />
      <Global
        styles={css`
          h1 {
            ${theme.font.h1.css(theme)}
          }
        `}
      />
      <Global
        styles={css`
          h2 {
            ${theme.font.h2.css(theme)}
          }
        `}
      />
      <Global
        styles={css`
          h3 {
            ${theme.font.h3.css(theme)}
          }
        `}
      />
      <Global
        styles={css`
          h4 {
            ${theme.font.h4.css(theme)}
          }
        `}
      />
      <Global
        styles={css`
          h5 {
            ${theme.font.h5.css(theme)}
          }
        `}
      />
      <Global
        styles={css`
          h6 {
            ${theme.font.h6.css(theme)}
          }
        `}
      />
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
