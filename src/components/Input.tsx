/** @jsx jsx */
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import { GUCommonStyleProps, useTheme, jsx } from '../style'

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type GUInputProps = HTMLInputProps &
  GUCommonStyleProps & {
    label?: ReactNode
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

export const GUInput: React.FC<GUInputProps> = ({ className, ...props }) => {
  const theme = useTheme()
  const { label } = props
  return (
    <div css={theme.input.css(theme, props)} className={className}>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input {...props} />
    </div>
  )
}

GUInput.defaultProps = { type: 'text' }
