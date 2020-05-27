import { OverflowElement } from './style';
import AsideController, { BaseAsideConfig } from '../aside-controller';
import React, { useState, useEffect } from 'react';


type Position = 'top' | 'bottom' | 'left' | 'right';

type OverflowConfig = BaseAsideConfig & {
    position: Position;
}

const DEFAULT_CONFIG: OverflowConfig = {
    id: '__default-pop-up',
    position: 'bottom'
};

class OverflowController extends AsideController {

    protected config: OverflowConfig;

    private clickListener = (event: MouseEvent): void => {
        if (!this.container?.contains(event.target as HTMLElement) || this.container === event.target) {
            this.close();
        }
    };

    private updateContainerListener = (): void => this.updateContainer();

    constructor(
        private parentRef: React.RefObject<HTMLElement>,
        content: JSX.Element,
        options?: Partial<OverflowConfig>
    ) {
        super(content, options);
        this.config = Object.assign({}, DEFAULT_CONFIG, options);
    }

    public open(): void {
        this.appendNode();
        this.updateContainer();
        this.addListeners();

        this.containerControls.start({
            opacity: [0, 1],
            transition: { duration: .2 }
        });
    }

    public close(): void {
        this.removeListeners();
        this.removeNode();
    }

    public setParentRef(parentRef: React.RefObject<HTMLElement>): void {
        this.parentRef = parentRef;
    }

    protected createReactElement(): JSX.Element {
        return (
            <OverflowElement className={`__${this.config.position}`} animate={this.containerControls}>
                {this.content}
            </OverflowElement>
        );
    }

    private updateContainer(): void {
        const parentBounding = (this.parentRef.current as HTMLElement).getBoundingClientRect();
        if (this.container) {

            this.container.style.position = 'fixed';
            this.container.style.width = parentBounding.width + 'px';
            this.container.style.height = parentBounding.height + 'px';
            this.container.style.left = parentBounding.left + 'px';
            this.container.style.top = parentBounding.top + 'px';
            this.container.style.display = 'flex';
            this.container.style.justifyContent = 'center';
            this.container.style.alignItems = 'center';
        }
    }

    private addListeners(): void {
        setTimeout(() => {
            window.addEventListener('click', this.clickListener);
            window.addEventListener('resize', this.updateContainerListener);
            window.addEventListener('scroll', this.updateContainerListener);
        });
    }

    private removeListeners(): void {
        window.removeEventListener('click', this.clickListener);
        window.removeEventListener('resize', this.updateContainerListener);
        window.removeEventListener('scroll', this.updateContainerListener);
    }
}

export default function useOverflow(parentRef: React.RefObject<HTMLElement>, content: JSX.Element, options?: Partial<OverflowConfig>): OverflowController {
    const [controller] = useState(new OverflowController(parentRef, content, options));
    useEffect(() => {
        controller.setParentRef(parentRef);
    });
    return controller;
}
