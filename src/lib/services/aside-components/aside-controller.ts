import React from 'react';
import ReactDOM from 'react-dom';
import { useAnimation } from "framer-motion";

type BaseStatus = 'opening' | 'opened' | 'closing' | 'closed';

export type BaseAsideConfig = {
    id: string;
}

const DEFAULT_ASIDE_CONFIG: BaseAsideConfig = {
    id: '__default-aside-id'
};

export default abstract class AsideController {

    protected config: BaseAsideConfig;
    protected container: HTMLElement | null = null;
    protected status: BaseStatus = 'closed';
    protected readonly containerControls = useAnimation();

    protected abstract createReactElement(): JSX.Element;
    protected abstract open(...args: unknown[]): void;
    protected abstract close(...args: unknown[]): void;

    constructor(protected content: JSX.Element, options?: Partial<BaseAsideConfig>) {
        this.config = Object.assign({}, DEFAULT_ASIDE_CONFIG, options);
        this.injectProps({ controller: this });
    }

    public getStatus(): BaseStatus {
        return this.status;
    }

    public injectProps(props: { [key: string]: unknown }): void {
        this.content = React.cloneElement(this.content, { ...props });
        if (this.status === 'opened') {
            this.renderReactElement();
        }
    }
    
    protected createContainer(): void {
        if (this.container || typeof document === 'undefined') return;
        this.container = document.createElement('aside');
        this.container.setAttribute('id', this.config.id);
    }

    protected renderReactElement(): void {
        if (this.status === 'opening' || this.status === 'opened') {
            ReactDOM.render(this.createReactElement(), this.container);
        } else {
            throw new Error('Bad time react element render.');
        }
    }

    protected appendNode(): void {
        this.status = 'opening';
        this.createContainer();
        try {
            this.renderReactElement();
            document.getElementsByTagName('body')[0]?.appendChild(this.container as HTMLElement);
        } catch (e) {
            console.warn(`${this.config.id} append failed`, e);
        }
    }

    protected removeNode(): void {
        try {
            ReactDOM.unmountComponentAtNode(this.container as HTMLElement);
            document.getElementsByTagName('body')[0]?.removeChild(this.container as HTMLElement);
        } catch (e) {
            console.warn(`${this.config.id} remove failed`, e);
        }
        this.status = 'closed';
    }
}