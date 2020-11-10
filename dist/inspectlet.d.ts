declare global {
    interface Window {
        __insp: Array<number | string>[] | undefined;
        __inspld: number | undefined;
        ldinsp: VoidFunction | undefined;
    }
}
export declare const inspectlet: (inspectletId: string | number) => void;
