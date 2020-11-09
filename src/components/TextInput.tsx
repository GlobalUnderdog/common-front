/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { CommonStyleProps, useTheme } from '../style'

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type Props = HTMLInputProps &
  CommonStyleProps & {
    label?: string
    type?:
      | 'date'
      | 'email'
      | 'month'
      | 'number'
      | 'password'
      | 'tel'
      | 'text'
      | 'time'
      | 'url'
  }

export const TextInput: React.FC<Props> = (props) => {
  const theme = useTheme()
  const { id, label } = props
  return (
    <div css={theme.textInput.css(theme, props)} className={props.className}>
      {label && <label htmlFor={id}>{label}</label>}
      <input {...props} className={undefined} />
    </div>
  )
}

TextInput.defaultProps = { type: 'text' }
