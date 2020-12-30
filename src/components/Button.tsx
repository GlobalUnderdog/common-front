import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { GUCommonStyleProps, styled } from '../style'

export type GUButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  GUCommonStyleProps

export const GUButton = styled.button<GUButtonProps>`
  ${(p) => p.theme.button.css(p.theme, p)}
`
