/** @jsx jsx */
import { jsx } from '../style/emotion'
import React, {
  DetailedHTMLProps,
  Fragment,
  InputHTMLAttributes,
  ReactNode,
} from 'react'
import { GUCommonStyleProps, useTheme } from '../style'

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type GUCheckboxProps = HTMLInputProps &
  GUCommonStyleProps & {
    label?: ReactNode
    /** If true the label is placed before the checkbox */
    invertLabelPosition?: boolean
    type?: 'checkbox'
  }

export const GUCheckbox: React.FC<GUCheckboxProps> = ({
  className,
  label,
  invertLabelPosition,
  ...props
}) => {
  const theme = useTheme()
  return (
    <div css={theme.checkbox.css(theme, props)} className={className}>
      {invertLabelPosition ? (
        <Fragment>
          {label && <label htmlFor={props.id}>{label}</label>}
          <input {...props} type='checkbox' />
        </Fragment>
      ) : (
        <Fragment>
          <input {...props} type='checkbox' />
          {label && <label htmlFor={props.id}>{label}</label>}
        </Fragment>
      )}
    </div>
  )
}
