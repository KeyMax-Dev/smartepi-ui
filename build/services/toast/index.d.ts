import { ReactElement } from "react";
declare type Config = {
    id: string;
    rootId: string;
    color: string;
    timeout: number;
};
declare class ToastController {
    private child?;
    private hideTimeout;
    private animationTimeout;
    private animationController;
    private config;
    private container;
    private status;
    private clickListener;
    constructor(child?: string | JSX.Element | undefined, options?: Partial<Config>);
    show(): void;
    hide(): void;
    setChild(newChild: ReactElement | string): void;
    private createReactElement;
}
export default function useToast(child?: JSX.Element | string, options?: Partial<Config>): ToastController;
export {};
