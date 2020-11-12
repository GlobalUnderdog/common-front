/** @jsx jsx */
import { DetailedHTMLProps, ReactNode, TextareaHTMLAttributes } from 'react'
import { CommonStyleProps, jsx, useTheme } from '../style'

type HTMLTextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

export type TextAreaProps = HTMLTextAreaProps &
  CommonStyleProps & {
    label?: ReactNode
  }

export const TextArea: React.FC<TextAreaProps> = ({ className, ...props }) => {
  const theme = useTheme()
  const { id, label } = props
  return (
    <div css={theme.textArea.css(theme, props)} className={className}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea {...props} />
    </div>
  )
}
