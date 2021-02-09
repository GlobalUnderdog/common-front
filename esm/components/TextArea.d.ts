/** @jsx jsx */
import { DetailedHTMLProps, ReactNode, TextareaHTMLAttributes } from 'react';
import { GUCommonStyleProps } from '../style';
declare type HTMLTextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
export declare type GUTextAreaProps = HTMLTextAreaProps & GUCommonStyleProps & {
    label?: ReactNode;
    /** If true the label is placed after the textarea */
    labelSecond?: boolean;
};
export declare const GUTextArea: React.FC<GUTextAreaProps>;
export {};
