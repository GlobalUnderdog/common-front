import React, { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import { GUCommonStyleProps } from '../style';
declare type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare type GUCheckboxProps = HTMLInputProps & GUCommonStyleProps & {
    label?: ReactNode;
    /** If true the label is placed before the checkbox */
    invertLabelPosition?: boolean;
    type?: 'checkbox';
};
export declare const GUCheckbox: React.FC<GUCheckboxProps>;
export {};
