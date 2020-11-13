/** @jsx jsx */
import {
  DetailedHTMLProps,
  Fragment,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react'
import { GUCommonStyleProps, jsx, useTheme } from '../style'

type HTMLTextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

export type GUTextAreaProps = HTMLTextAreaProps &
  GUCommonStyleProps & {
    label?: ReactNode
    /** If true the label is placed after the textarea */
    labelSecond?: boolean
  }

export const GUTextArea: React.FC<GUTextAreaProps> = ({
  className,
  labelSecond,
  ...props
}) => {
  const theme = useTheme()
  const { label } = props
  return (
    <div css={theme.textArea.css(theme, props)} className={className}>
      {labelSecond ? (
        <Fragment>
          <textarea {...props} />
          {label && <label htmlFor={props.id}>{label}</label>}
        </Fragment>
      ) : (
        <Fragment>
          {label && <label htmlFor={props.id}>{label}</label>}
          <textarea {...props} />
        </Fragment>
      )}
    </div>
  )
}
