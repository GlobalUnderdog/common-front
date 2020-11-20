import { TagManagerArgs } from 'react-gtm-module';
export * from './googleGA';
export * from './guStatus';
export * from './inspectlet';
export * from './trpc';
export declare const guLibConfig: (env: {
    serverUrl?: string | undefined;
    googleUa?: string | undefined;
    inspectletId?: string | undefined;
    serverTimeout?: string | number | undefined;
    googleTm?: TagManagerArgs | undefined;
}) => void;
