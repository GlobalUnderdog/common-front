/** @jsx jsx */
import { DetailedHTMLProps, ReactNode, TextareaHTMLAttributes } from 'react';
import { CommonStyleProps } from '../style';
declare type HTMLTextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
export declare type TextAreaProps = HTMLTextAreaProps & CommonStyleProps & {
    label?: ReactNode;
};
export declare const TextArea: React.FC<TextAreaProps>;
export {};
