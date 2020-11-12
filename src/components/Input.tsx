/** @jsx jsx */
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { CommonStyleProps, useTheme, jsx } from '../style'

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type InputProps = HTMLInputProps &
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

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  const theme = useTheme()
  const { id, label } = props
  return (
    <div css={theme.input.css(theme, props)} className={className}>
      {label && <label htmlFor={id}>{label}</label>}
      <input {...props} />
    </div>
  )
}

Input.defaultProps = { type: 'text' }
