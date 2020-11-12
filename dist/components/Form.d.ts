/** @jsx jsx */
import React from 'react';
/**
 * Automatically hides children when `loading === true`, also allows the
 * usage of `<Loading/>` Component inside it.
 */
export declare const Form: import("@emotion/styled-base").StyledComponent<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, {
    loading?: boolean | undefined;
}, import("..").Theme>;
/**
 * Can be used as the last child of a `<Form />` element to automatically
 * create a loading indicator.
 */
export declare const Loading: React.FC<{
    loading: boolean;
    className?: string;
}>;
