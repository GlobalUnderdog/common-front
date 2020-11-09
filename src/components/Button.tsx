/** @jsx jsx */
import { CommonStyleProps, styled, jsx } from '../style'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  CommonStyleProps

export const Button = styled.button<ButtonProps>`
  ${(p) => p.theme.button.css(p.theme, { color: p.color })}
`
