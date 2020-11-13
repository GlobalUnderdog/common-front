/** @jsx jsx */
import { GUCommonStyleProps, styled, jsx } from '../style'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export type GUButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  GUCommonStyleProps

export const GUButton = styled.button<GUButtonProps>`
  ${(p) => p.theme.button.css(p.theme, p)}
`
