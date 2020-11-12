/** @jsx jsx */
import { jsx } from '../style/emotion'
import React, { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import { CommonStyleProps, useTheme } from '../style'

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type CheckboxProps = HTMLInputProps &
  CommonStyleProps & {
    label?: ReactNode
    type?: 'checkbox'
  }

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  label,
  ...props
}) => {
  const theme = useTheme()
  return (
    <div css={theme.checkbox.css(theme, props)} className={className}>
      <input {...props} type='checkbox' />
      {label && <label>{label}</label>}
    </div>
  )
}
