/** @jsx jsx */
import { jsx } from '../style/emotion'
import React, { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import { GUCommonStyleProps, useTheme } from '../style'

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type GUCheckboxProps = HTMLInputProps &
  GUCommonStyleProps & {
    label?: ReactNode
    type?: 'checkbox'
  }

export const GUCheckbox: React.FC<GUCheckboxProps> = ({
  className,
  label,
  ...props
}) => {
  const theme = useTheme()
  return (
    <div css={theme.checkbox.css(theme, props)} className={className}>
      <input {...props} type='checkbox' />
      {label && <label htmlFor={props.id}>{label}</label>}
    </div>
  )
}
