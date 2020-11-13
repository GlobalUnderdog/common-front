/** @jsx jsx */
import { jsx } from '../style/emotion'
import React, { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import { GUCommonStyleProps, useTheme } from '../style'

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type GURadioProps = HTMLInputProps &
  GUCommonStyleProps & {
    label?: ReactNode
    type?: 'radio'
  }

export const GURadio: React.FC<GURadioProps> = ({
  className,
  label,
  ...props
}) => {
  const theme = useTheme()
  return (
    <div css={theme.radio.css(theme, props)} className={className}>
      <input {...props} type='radio' />
      {label && <label htmlFor={props.id}>{label}</label>}
    </div>
  )
}
