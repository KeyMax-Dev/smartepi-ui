/// <reference types="react" />
import AsideController, { BaseAsideConfig } from "../aside-controller";
declare type ToastConfig = BaseAsideConfig & {
    color: string;
    timeout: number;
};
declare class ToastController extends AsideController {
    protected config: ToastConfig;
    private hideTimeout;
    private animationTimeout;
    private animationController;
    private clickListener;
    constructor(content: JSX.Element, options?: Partial<ToastConfig>);
    open(): void;
    close(reason?: unknown): void;
    setContent(newContent: JSX.Element | string): void;
    protected createReactElement(): JSX.Element;
}
export default function useToast(content: JSX.Element, options?: Partial<ToastConfig>): ToastController;
export {};
