import React, { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import { CommonStyleProps } from '../style';
declare type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare type CheckboxProps = HTMLInputProps & CommonStyleProps & {
    label?: ReactNode;
    type?: 'checkbox';
};
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
