/** @jsx jsx */
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { CommonStyleProps } from '../style';
declare type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare type InputProps = HTMLInputProps & CommonStyleProps & {
    label?: string;
    type?: 'date' | 'email' | 'month' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url';
};
export declare const TextInput: React.FC<InputProps>;
export {};
