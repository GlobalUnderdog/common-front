/** @jsx jsx */
import {
  DetailedHTMLProps,
  Fragment,
  InputHTMLAttributes,
  ReactNode,
} from 'react'
import { GUCommonStyleProps, useTheme, jsx } from '../style'

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type GUInputProps = HTMLInputProps &
  GUCommonStyleProps & {
    label?: ReactNode
    /** If true the label is placed after the input */
    invertLabelPosition?: boolean
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
  invertLabelPosition,
  ...props
}) => {
  const theme = useTheme()
  const { label } = props
  return (
    <div css={theme.input.css(theme, props)} className={className}>
      {invertLabelPosition ? (
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
