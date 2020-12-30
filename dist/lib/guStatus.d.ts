declare global {
    interface Window {
        guStatus: (x: number, y: number) => Promise<void>;
    }
}
/**
 * Returns the back-end URL + a simple calculation done with `trpc`
 */
export declare const guStatusConfig: (backend: string) => void;
