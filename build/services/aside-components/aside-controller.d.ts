/// <reference types="react" />
declare type BaseStatus = 'opening' | 'opened' | 'closing' | 'closed';
export declare type BaseAsideConfig = {
    id: string;
};
export default abstract class AsideController {
    protected content: JSX.Element;
    protected config: BaseAsideConfig;
    protected container: HTMLElement | null;
    protected status: BaseStatus;
    protected readonly containerControls: import("framer-motion").AnimationControls;
    protected onopen: (() => void) | undefined;
    protected onclose: ((reason: unknown) => void) | undefined;
    protected abstract createReactElement(): JSX.Element;
    protected abstract open(...args: unknown[]): void;
    protected abstract close(...args: unknown[]): void;
    constructor(content: JSX.Element, options?: Partial<BaseAsideConfig>);
    getStatus(): BaseStatus;
    injectProps(props: {
        [key: string]: unknown;
    }): void;
    protected createContainer(): void;
    protected renderReactElement(): void;
    protected appendNode(): void;
    protected removeNode(): void;
    onOpen(func: () => void): void;
    onClose(func: (reason: unknown) => void): void;
}
export {};
