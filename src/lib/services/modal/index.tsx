import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalBaseElement, ModalCloseButton } from './style';
import { motion, useAnimation } from 'framer-motion';

type ModalStatus = 'opening' | 'open' | 'closing' | 'closed';

type ModalConfig = {
    id: string;
    disableBackdropClose: boolean;
    disableCloseButton: boolean;
    preventScroll: boolean;
    rootId: string;
}

const DEFAULT_MODAL_CONFIG = {
    id: '__default-modal',
    disableBackdropClose: false,
    disableCloseButton: false,
    preventScroll: true,
    rootId: 'root'
};

class ModalController {

    private readonly overlayControls = useAnimation();
    private readonly containerControls = useAnimation();
    private container = document.createElement('aside');
    private config: ModalConfig;
    private status: ModalStatus = 'closed';

    constructor(private content: JSX.Element, options?: Partial<ModalConfig>) {
        this.config = Object.assign({}, DEFAULT_MODAL_CONFIG, options);
        this.container.setAttribute('id', this.config.id);
        this.injectProps({ controller: this });
    }

    public getStatus(): ModalStatus {
        return this.status;
    }

    public open(): Promise<void> {
        if (this.status !== 'closed') {
            throw new Error('Modal isn\'t closed!');
        }
        this.appendNode();
        this.renderReactElement();

        // Animation
        this.containerControls.start({
            opacity: [0, 1],
            scale: [0.5, 1],
            transition: { delay: 0.1, duration: .2, ease: 'backOut' }
        });
        return this.overlayControls.start({
            opacity: [0, 1],
            transition: { duration: .4 }
        }).then(() => {
            this.status = 'open';
            return Promise.resolve();
        });
    }

    public close(): Promise<void> {
        if (this.status !== 'open') {
            throw new Error('Modal isn\'t open!');
        }
        this.status = 'closing';

        // Animation
        this.containerControls.start({
            opacity: [1, 0],
            scale: [1, 0.5],
            transition: { duration: .2, ease: 'backIn' },
        });
        return this.overlayControls.start({
            opacity: [1, 0],
            transition: { duration: .3 },
        }).then(() => Promise.resolve(this.removeNode()));
    }

    public injectProps(props: { [key: string]: unknown }): void {
        this.content = React.cloneElement(this.content, { ...props });
        if (this.status === 'open') {
            this.renderReactElement();
        }
    }

    public setDisabledBackdrop(value: boolean): void {
        this.config.disableBackdropClose = value;
    }

    public setDisabledCloseButto(value: boolean): void {
        this.config.disableCloseButton = value;
        this.renderReactElement();
    }

    private createReactElement(): JSX.Element {
        return (
            <ModalBaseElement>
                <motion.div className="__overlay" onClick={(): Promise<void> | undefined => (this.config.disableBackdropClose ? undefined : this.close())} animate={this.overlayControls} />
                <motion.div className="__container" animate={this.containerControls}>
                    {!this.config.disableCloseButton && <ModalCloseButton onClick={(): Promise<void> => this.close()} width="30px" height="30px" name="close" />}
                    {this.content}
                </motion.div>
            </ModalBaseElement>
        );
    }

    private appendNode(): void {
        this.status = 'opening';
        document.getElementById(this.config.rootId)?.appendChild(this.container);

        if (this.config.preventScroll) {
            document.body.style.overflow = 'hidden';
        }
    }

    private removeNode(): void {
        ReactDOM.unmountComponentAtNode(this.container);
        document.getElementById(this.config.rootId)?.removeChild(this.container);

        if (this.config.preventScroll) {
            document.body.style.overflow = 'auto';
        }
        this.status = 'closed';
    }

    private renderReactElement(): void {
        if (this.status === 'opening' || this.status === 'open') {
            ReactDOM.render(this.createReactElement(), this.container);
        } else {
            throw new Error('Bad time react element render.');
        }
    }
}


export default function useModal(content: JSX.Element, options?: Partial<ModalConfig>): ModalController {
    return useState(new ModalController(content, options))[0];
}