/** @jsx jsx */
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import { CommonStyleProps } from '../style';
declare type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare type InputProps = HTMLInputProps & CommonStyleProps & {
    label?: ReactNode;
    type?: 'date' | 'email' | 'month' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url';
};
export declare const Input: React.FC<InputProps>;
export {};
