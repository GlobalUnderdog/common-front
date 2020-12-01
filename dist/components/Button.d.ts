/** @jsx jsx */
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { GUAnalytics } from '../lib';
import { GUCommonStyleProps } from '../style';
export declare type GUButtonProps = GUCommonStyleProps & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    /**
     * If present it will automatically log clicks on this button using
     * Google Analytics.
     */
    analytics?: GUAnalytics;
    /**
     * If present it will automatically log clicks on this button to Google
     * Tag Manager.
     */
    tagManager?: GUAnalytics;
};
export declare const GUButton: React.FC<GUButtonProps>;
