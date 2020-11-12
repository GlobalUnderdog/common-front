/** @jsx jsx */
import { jsx } from '../style/emotion'
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { CommonStyleProps, useTheme } from '../style'

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type RadioProps = HTMLInputProps &
  CommonStyleProps & {
    label?: string
    type?: 'radio'
  }

export const Radio: React.FC<RadioProps> = ({ className, label, ...props }) => {
  const theme = useTheme()
  return (
    <div css={theme.radio.css(theme, props)} className={className}>
      <input {...props} type='radio' />
      {label && <label>{label}</label>}
    </div>
  )
}
