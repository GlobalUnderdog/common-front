import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { CommonStyleProps } from '../style';
declare type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare type CheckboxProps = HTMLInputProps & CommonStyleProps & {
    label?: string;
    type?: 'checkbox';
};
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
