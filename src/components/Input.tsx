/** @jsx jsx */
import React, {
  DetailedHTMLProps,
  Fragment,
  InputHTMLAttributes,
  ReactNode,
} from 'react'
import { GUCommonStyleProps, jsx, useTheme } from '../style'

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type GUInputProps = HTMLInputProps &
  GUCommonStyleProps & {
    label?: ReactNode
    /** If true the label is placed after the input */
    labelSecond?: boolean
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

export const GUInput: React.FC<GUInputProps> = ({
  className,
  labelSecond,
  ...props
}) => {
  const theme = useTheme()
  const { label } = props
  return (
    <div css={theme.input.css(theme, props)} className={className}>
      {labelSecond ? (
        <Fragment>
          <input {...props} />
          {label && <label htmlFor={props.id}>{label}</label>}
        </Fragment>
      ) : (
        <Fragment>
          {label && <label htmlFor={props.id}>{label}</label>}
          <input {...props} />
        </Fragment>
      )}
    </div>
  )
}

GUInput.defaultProps = { type: 'text' }
