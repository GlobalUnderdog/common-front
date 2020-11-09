/** @jsx jsx */
import { jsx } from '@emotion/core'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { CommonStyleProps, styled } from '../style'

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  CommonStyleProps

export const Button = styled.button<ButtonProps>`
  ${(p) => p.theme.button.css(p.theme, { color: p.color })}
`
