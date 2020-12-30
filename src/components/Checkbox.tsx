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

export type GUCheckboxProps = HTMLInputProps &
  GUCommonStyleProps & {
    label?: ReactNode
    /** If true the label is placed before the checkbox */
    labelFirst?: boolean
    type?: 'checkbox'
  }

export const GUCheckbox: React.FC<GUCheckboxProps> = ({
  className,
  label,
  labelFirst,
  ...props
}) => {
  const theme = useTheme()
  return (
    <div css={theme.checkbox.css(theme, props)} className={className}>
      {labelFirst ? (
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
