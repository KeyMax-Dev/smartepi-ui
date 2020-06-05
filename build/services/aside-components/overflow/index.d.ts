/// <reference types="react" />
import AsideController, { BaseAsideConfig } from '../aside-controller';
declare type Position = 'top' | 'bottom';
declare type OverflowConfig = BaseAsideConfig & {
    position: Position;
};
declare class OverflowController extends AsideController {
    protected config: OverflowConfig;
    private parent;
    private contentRef;
    private contentArrowRef;
    private clickListener;
    private updateContainerListener;
    private hoverLeaveListener;
    constructor(content: JSX.Element, options?: Partial<OverflowConfig>);
    setParent(newParent: HTMLElement): void;
    getParent(): HTMLElement | null;
    open(parent?: HTMLElement, isHover?: boolean): void;
    close(): void;
    protected createReactElement(): JSX.Element;
    private updateContainer;
    private addListeners;
    private removeListeners;
}
export default function useOverflow(content: JSX.Element, options?: Partial<OverflowConfig>): OverflowController;
export {};
