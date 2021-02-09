import React from 'react';
export interface AppMetadata {
    title: string;
    description: string;
    url: string;
    /** image must be an absolute (not just relative) url */
    image?: string;
}
export declare const AppHead: React.FC<AppMetadata>;
