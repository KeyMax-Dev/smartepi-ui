import { ToastElement } from './style';
import { useAnimation } from 'framer-motion';
import AsideController, { BaseAsideConfig } from "../aside-controller";
import React, { useState } from "react";
import ReactDOM from 'react-dom';

export type ToastConfig = BaseAsideConfig & {
    color: string;
    timeout: number;
}

const DEFAULT_CONFIG: ToastConfig = {
    id: '__default-pop-up',
    color: 'primary',
    timeout: 2000,
    rootElement: 'body'
};

export class ToastController extends AsideController {

    protected config: ToastConfig;
    private hideTimeout: number;
    private animationTimeout: number;
    private animationController = useAnimation();

    private clickListener = (event: MouseEvent): void => {
        if (!this.container?.contains(event.target as HTMLElement) || this.container === event.target) {
            this.close('outsideClick');
        }
    };

    constructor(content: JSX.Element, options?: Partial<ToastConfig>) {
        super(content, options);
        
        this.config = Object.assign({}, DEFAULT_CONFIG, options);
        this.hideTimeout = this.animationTimeout = 0;
    }

    public open(): void {
        clearTimeout(this.animationTimeout);
        clearTimeout(this.hideTimeout);
        if (!!!this.content) {
            return;
        }
        if (!this.appendNode()) return;

        ReactDOM.render(this.createReactElement(), this.container);
        setTimeout(() => window.addEventListener('click', this.clickListener));
        this.hideTimeout = setTimeout(() => this.close('timeout'), this.config.timeout);

        this.status = 'opening';
        this.animationController.start({
            bottom: [-100, 15],
            opacity: [0, 1],
            transition: { duration: .2, ease: 'backOut' }
        });
        this.animationTimeout = setTimeout(() => {
            this.status = 'opened';
            if (this.onopen) this.onopen();
        }, 200);
    }

    public close(reason?: unknown): void {
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
            this.removeNode();
            this.status = 'closed';
            if (this.onclose) this.onclose(reason);
        }, 200);
    }

    public setContent(newContent: JSX.Element | string): void {
        this.content = typeof newContent === 'string' ? <span>{newContent}</span> : newContent;
    }

    protected createReactElement(): JSX.Element {
        return (
            <ToastElement color={this.config.color} animate={this.animationController} >
                {this.content}
            </ToastElement>
        );
    }
}

export default function useToast(content: JSX.Element, options?: Partial<ToastConfig>): ToastController {
    const [toast] = useState(new ToastController(content, options));
    return toast;
}