/** @jsx jsx */
import React, { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import { GUCommonStyleProps } from '../style';
declare type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare type GURadioProps = HTMLInputProps & GUCommonStyleProps & {
    label?: ReactNode;
    /** If true the label is placed before the radio */
    labelFirst?: boolean;
    type?: 'radio';
};
export declare const GURadio: React.FC<GURadioProps>;
export {};
