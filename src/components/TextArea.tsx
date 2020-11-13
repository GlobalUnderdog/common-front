/** @jsx jsx */
import { DetailedHTMLProps, ReactNode, TextareaHTMLAttributes } from 'react'
import { GUCommonStyleProps, jsx, useTheme } from '../style'

type HTMLTextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

export type GUTextAreaProps = HTMLTextAreaProps &
  GUCommonStyleProps & {
    label?: ReactNode
  }

export const GUTextArea: React.FC<GUTextAreaProps> = ({
  className,
  ...props
}) => {
  const theme = useTheme()
  const { label } = props
  return (
    <div css={theme.textArea.css(theme, props)} className={className}>
      {label && <label htmlFor={props.id}>{label}</label>}
      <textarea {...props} />
    </div>
  )
}
