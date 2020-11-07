/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ColorType, styled } from '../style'

export const Button = styled.button<{ color?: ColorType }>`
  ${(p) => p.theme.button.css(p.theme, { color: p.color })}
`
