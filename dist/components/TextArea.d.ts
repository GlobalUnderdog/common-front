/** @jsx jsx */
import { DetailedHTMLProps, ReactNode, TextareaHTMLAttributes } from 'react';
import { GUCommonStyleProps } from '../style';
declare type HTMLTextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
export declare type GUTextAreaProps = HTMLTextAreaProps & GUCommonStyleProps & {
    label?: ReactNode;
};
export declare const GUTextArea: React.FC<GUTextAreaProps>;
export {};
