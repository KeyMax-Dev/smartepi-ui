import AsideController, { BaseAsideConfig } from '../aside-controller';
import React from 'react';
declare type Position = 'top' | 'bottom' | 'left' | 'right';
declare type OverflowConfig = BaseAsideConfig & {
    position: Position;
};
declare class OverflowController extends AsideController {
    private parentRef;
    protected config: OverflowConfig;
    private clickListener;
    private updateContainerListener;
    constructor(parentRef: React.RefObject<HTMLElement>, content: JSX.Element, options?: Partial<OverflowConfig>);
    open(): void;
    close(): void;
    setParentRef(parentRef: React.RefObject<HTMLElement>): void;
    protected createReactElement(): JSX.Element;
    private updateContainer;
    private addListeners;
    private removeListeners;
}
export default function useOverflow(parentRef: React.RefObject<HTMLElement>, content: JSX.Element, options?: Partial<OverflowConfig>): OverflowController;
export {};
