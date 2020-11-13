import React, { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import { GUCommonStyleProps } from '../style';
declare type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare type GUCheckboxProps = HTMLInputProps & GUCommonStyleProps & {
    label?: ReactNode;
    type?: 'checkbox';
};
export declare const GUCheckbox: React.FC<GUCheckboxProps>;
export {};
