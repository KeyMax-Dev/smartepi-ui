import React, { ReactElement, useState } from "react";
import ReactDOM from 'react-dom';
import { useAnimation } from 'framer-motion';
import { ToastElement } from './style';

type Status = 'opening' | 'opened' | 'closing' | 'closed';

type Config = {
    id: string;
    rootId: string;
    color: string;
    timeout: number;
}

const DEFAULT_CONFIG: Config = {
    id: '__default-pop-up',
    rootId: 'root',
    color: 'primary',
    timeout: 2000
};

class ToastController {

    private hideTimeout: number;
    private animationTimeout: number;
    private animationController = useAnimation();
    private config: Config;
    private container = document.createElement('aside');
    private status: Status = 'closed';

    private clickListener = (event: MouseEvent): void => {
        if (!this.container.contains(event.target as HTMLElement) || this.container === event.target) {
            this.hide();
        }
    };

    constructor(private child?: JSX.Element | string, options?: Partial<Config>) {
        this.config = Object.assign({}, DEFAULT_CONFIG, options);
        this.container.setAttribute('id', this.config.id);
        this.hideTimeout = this.animationTimeout = 0;
    }

    public show(): void {
        clearTimeout(this.animationTimeout);
        clearTimeout(this.hideTimeout);
        if (!!!this.child) {
            return;
        }
        this.status = 'opening';
        document.getElementById(this.config.rootId)?.appendChild(this.container);

        ReactDOM.render(this.createReactElement(), this.container);
        setTimeout(() => window.addEventListener('click', this.clickListener));
        this.hideTimeout = setTimeout(() => this.hide(), this.config.timeout);

        this.animationController.start({
            bottom: [-100, 15],
            opacity: [0, 1],
            transition: { duration: .2, ease: 'backOut' }
        });
        this.animationTimeout = setTimeout(() => {
            this.status = 'opened';
        }, 200);
    }

    public hide(): void {
        if (this.status !== 'opened') {
            return;
        }
        this.status = 'closing';
        clearTimeout(this.hideTimeout);
        window.removeEventListener('click', this.clickListener);
        this.animationController.start({
            bottom: [15, -100],
            opacity: [1, 0],
            transition: { duration: .2, ease: 'backIn' }
        });
        this.animationTimeout = setTimeout(() => {
            document.getElementById(this.config.rootId)?.removeChild(this.container);
            this.status = 'closed';
        }, 200);
    }

    public setChild(newChild: ReactElement | string): void {
        this.child = newChild;
    }

    private createReactElement(): JSX.Element {
        return (
            <ToastElement color={this.config.color} animate={this.animationController} >
                {this.child}
            </ToastElement>
        );
    }
}

export default function useToast(child?: JSX.Element | string, options?: Partial<Config>): ToastController {
    return useState(new ToastController(child, options))[0];
}