import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { CommonStyleProps } from '../style';
declare type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare type Props = HTMLInputProps & CommonStyleProps & {
    label?: string;
    type?: 'date' | 'email' | 'month' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url';
};
export declare const TextInput: React.FC<Props>;
export {};
