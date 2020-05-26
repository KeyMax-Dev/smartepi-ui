import React, { useState, useEffect } from 'react';
import { OverflowElement } from './style';
import ReactDOM from 'react-dom';
import { useAnimation } from 'framer-motion';


type Position = 'top' | 'bottom' | 'left' | 'right';

type Config = {
    id: string;
    rootId: string;
    position: Position;
}

const DEFAULT_CONFIG = {
    id: '__default-pop-up',
    rootId: 'root',
    position: 'bottom'
};

class OverflowController {

    private readonly animationController = useAnimation();
    private container = document.createElement('aside');
    private config: Config;

    private clickListener = (event: MouseEvent): void => {
        if (!this.container.contains(event.target as HTMLElement) || this.container === event.target) {
            this.close();
        }
    };

    private updateContainerListener = (): void => this.updateContainer();

    constructor(
        private parentRef: React.RefObject<HTMLElement>,
        private content: JSX.Element,
        options?: Partial<Config>
    ) {
        this.config = Object.assign({}, DEFAULT_CONFIG, options);
        this.container.setAttribute('id', this.config.id);
        this.content = React.cloneElement(this.content, { controller: this });
    }

    public open(): void {
        document.getElementById(this.config.rootId)?.appendChild(this.container);
        this.updateContainer();

        ReactDOM.render(this.createReactElement(), this.container);
        setTimeout(() => {
            window.addEventListener('click', this.clickListener);
            window.addEventListener('resize', this.updateContainerListener);
            window.addEventListener('scroll', this.updateContainerListener);
        });

        this.animationController.start({
            opacity: [0, 1],
            transition: { duration: .2 }
        });
    }

    public close(): void {
        window.removeEventListener('click', this.clickListener);
        window.removeEventListener('resize', this.updateContainerListener);
        window.removeEventListener('scroll', this.updateContainerListener);
        document.getElementById(this.config.rootId)?.removeChild(this.container);
    }

    public setParentRef(parentRef: React.RefObject<HTMLElement>): void {
        this.parentRef = parentRef;
    }

    private updateContainer(): void {
        const parentBounding = (this.parentRef.current as HTMLElement).getBoundingClientRect();
        this.container.style.position = 'fixed';
        this.container.style.width = parentBounding.width + 'px';
        this.container.style.height = parentBounding.height + 'px';
        this.container.style.left = parentBounding.left + 'px';
        this.container.style.top = parentBounding.top + 'px';
        this.container.style.display = 'flex';
        this.container.style.justifyContent = 'center';
        this.container.style.alignItems = 'center';
    }

    private createReactElement(): JSX.Element {
        return (
            <OverflowElement className={`__${this.config.position}`} animate={this.animationController}>
                {this.content}
            </OverflowElement>
        );
    }
}

export default function useOverflow(parentRef: React.RefObject<HTMLElement>, content: JSX.Element, options?: Partial<Config>): OverflowController {
    const [controller] = useState(new OverflowController(parentRef, content, options)); 
    useEffect(() => {
        controller.setParentRef(parentRef);
    });
    return controller;
}
