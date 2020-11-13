/** @jsx jsx */
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import { GUCommonStyleProps } from '../style';
declare type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare type GUInputProps = HTMLInputProps & GUCommonStyleProps & {
    label?: ReactNode;
    /** If true the label is placed after the input */
    labelSecond?: boolean;
    type?: 'date' | 'email' | 'month' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url';
};
export declare const GUInput: React.FC<GUInputProps>;
export {};
