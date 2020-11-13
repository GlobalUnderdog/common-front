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

export type GURadioProps = HTMLInputProps &
  GUCommonStyleProps & {
    label?: ReactNode
    /** If true the label is placed before the radio */
    invertLabelPosition?: boolean
    type?: 'radio'
  }

export const GURadio: React.FC<GURadioProps> = ({
  className,
  label,
  invertLabelPosition,
  ...props
}) => {
  const theme = useTheme()
  return (
    <div css={theme.radio.css(theme, props)} className={className}>
      {invertLabelPosition ? (
        <Fragment>
          {label && <label htmlFor={props.id}>{label}</label>}
          <input {...props} type='radio' />
        </Fragment>
      ) : (
        <Fragment>
          <input {...props} type='radio' />
          {label && <label htmlFor={props.id}>{label}</label>}
        </Fragment>
      )}
    </div>
  )
}
