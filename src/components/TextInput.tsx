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

export const TextInput: React.FC<InputProps> = (props) => {
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
