import { IContactCollectionRpc } from '@globalunderdog/common';
/**
 * The default client uses localhost:8080 as its url and 3000ms as timeout,
 * use trpcConfig to change these values (this is automatically set up if
 * guLibConfig is called)
 */
export declare let trpc: IContactCollectionRpc;
export declare const trpcConfig: (url: string, timeout?: number) => void;
