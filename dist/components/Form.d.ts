/** @jsx jsx */
import React from 'react';
/**
 * Automatically hides children when `loading === true`, also allows the
 * usage of `<Loading/>` Component inside it.
 */
export declare const GUForm: import("@emotion/styled-base").StyledComponent<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, {
    loading?: boolean | undefined;
}, import("..").GUTheme<import("..").GUThemeProps>>;
/**
 * Can be used as the last child of a `<Form />` element to automatically
 * create a loading indicator.
 */
export declare const GULoading: React.FC<{
    loading: boolean;
    className?: string;
}>;
