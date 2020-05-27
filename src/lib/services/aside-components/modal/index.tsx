import { ModalBaseElement, ModalCloseButton } from './style';
import { motion, useAnimation } from 'framer-motion';
import AsideController, { BaseAsideConfig } from '../aside-controller';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

type ModalStatus = 'opening' | 'open' | 'closing' | 'closed';

type ModalConfig = BaseAsideConfig & {
    disableBackdropClose: boolean;
    disableCloseButton: boolean;
    preventScroll: boolean;
}

const DEFAULT_MODAL_CONFIG: ModalConfig = {
    id: '__default-modal',
    disableBackdropClose: false,
    disableCloseButton: false,
    preventScroll: true
};

class ModalController extends AsideController {

    protected config: ModalConfig;
    private readonly overlayControls = useAnimation();

    constructor(content: JSX.Element, options?: Partial<ModalConfig>) {
        super(content, options);
        this.config = Object.assign({}, DEFAULT_MODAL_CONFIG, options);
        this.injectProps({ controller: this });
    }

    public open(): Promise<void> {
        if (this.status !== 'closed') {
            throw new Error('Modal isn\'t closed!');
        }
        this.appendNode();

        if (this.config.preventScroll) {
            document.body.style.overflow = 'hidden';
        }

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
            this.status = 'opened';
            return Promise.resolve();
        });
    }

    public close(): Promise<void> {
        if (this.status !== 'opened') {
            throw new Error('Modal isn\'t open!');
        }
        this.status = 'closing';

        if (this.config.preventScroll) {
            document.body.style.overflow = 'auto';
        }

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

    public setDisabledBackdrop(value: boolean): void {
        this.config.disableBackdropClose = value;
    }

    public setDisabledCloseButto(value: boolean): void {
        this.config.disableCloseButton = value;
        this.renderReactElement();
    }

    protected createReactElement(): JSX.Element {
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

    protected renderReactElement(): void {
        if (this.status === 'opening' || this.status === 'opened') {
            ReactDOM.render(this.createReactElement(), this.container);
        } else {
            throw new Error('Bad time react element render.');
        }
    }
}

export default function useModal(content: JSX.Element, options?: Partial<ModalConfig>): ModalController {
    const [modal] = useState(new ModalController(content, options));
    return modal;
}