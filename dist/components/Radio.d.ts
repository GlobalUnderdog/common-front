import React, { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
import { CommonStyleProps } from '../style';
declare type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export declare type RadioProps = HTMLInputProps & CommonStyleProps & {
    label?: ReactNode;
    type?: 'radio';
};
export declare const Radio: React.FC<RadioProps>;
export {};
