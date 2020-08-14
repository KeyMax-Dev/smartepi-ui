import { ModalBaseElement, ModalCloseButton } from './style';
import { motion, useAnimation, HTMLMotionProps } from 'framer-motion';
import AsideController, { BaseAsideConfig } from '../aside-controller';
import React, { useState } from 'react';

type ModalStatus = 'opening' | 'open' | 'closing' | 'closed';

export type ModalConfig = BaseAsideConfig & {
    disableBackdropClose: boolean;
    disableCloseButton: boolean;
    preventScroll: boolean;
    containerProps: Exclude<HTMLMotionProps<'div'>, 'animate'>;
}

const DEFAULT_MODAL_CONFIG: ModalConfig = {
    id: 'ui-modal-default',
    disableBackdropClose: false,
    disableCloseButton: false,
    preventScroll: true,
    rootElement: 'body',
    containerProps: {}
};

export class ModalController extends AsideController {

    protected config: ModalConfig;
    private readonly overlayControls = useAnimation();

    constructor(content: JSX.Element, options?: Partial<ModalConfig>) {
        super(content, options);
        this.config = Object.assign({}, DEFAULT_MODAL_CONFIG, options);
        this.injectProps({ controller: this });
    }

    public open(): Promise<void> {
        if (this.status !== 'closed') return Promise.resolve();
        if (!this.appendNode()) return Promise.reject('append failed');

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
            if(this.onopen) this.onopen();
            return Promise.resolve();
        });
    }

    public close(reason?: unknown): Promise<void> {
        if (this.status !== 'opened') return Promise.resolve();
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
        }).then(() => {
            this.status = 'closed';
            if(this.onclose) this.onclose(reason);
            if (this.removeNode())
                return Promise.resolve();
            else
                return Promise.reject();
        });
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
                <motion.div className="ui-modal-overlay" onClick={(): Promise<void> | undefined => (this.config.disableBackdropClose ? undefined : this.close('backdrop'))} animate={this.overlayControls} />
                <motion.div className="ui-modal-container" {...this.config.containerProps} animate={this.containerControls}>
                    {!this.config.disableCloseButton && <ModalCloseButton className="ui-modal-btn-close" onClick={(): Promise<void> => this.close('closeButton')} width="30px" height="30px" name="close" />}
                    {this.content}
                </motion.div>
            </ModalBaseElement>
        );
    }
}

export default function useModal(content: JSX.Element, options?: Partial<ModalConfig>): ModalController {
    const [modal] = useState(new ModalController(content, options));
    return modal;
}