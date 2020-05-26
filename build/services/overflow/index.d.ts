import React from 'react';
declare type Position = 'top' | 'bottom' | 'left' | 'right';
declare type Config = {
    id: string;
    rootId: string;
    position: Position;
};
declare class OverflowController {
    private parentRef;
    private content;
    private readonly animationController;
    private container;
    private config;
    private clickListener;
    private updateContainerListener;
    constructor(parentRef: React.RefObject<HTMLElement>, content: JSX.Element, options?: Partial<Config>);
    open(): void;
    close(): void;
    setParentRef(parentRef: React.RefObject<HTMLElement>): void;
    private updateContainer;
    private createReactElement;
}
export default function useOverflow(parentRef: React.RefObject<HTMLElement>, content: JSX.Element, options?: Partial<Config>): OverflowController;
export {};
