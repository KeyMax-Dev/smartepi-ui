/// <reference types="react" />
declare type ModalStatus = 'opening' | 'open' | 'closing' | 'closed';
declare type ModalConfig = {
    id: string;
    disableBackdropClose: boolean;
    disableCloseButton: boolean;
    preventScroll: boolean;
};
declare class ModalController {
    private content;
    private readonly overlayControls;
    private readonly containerControls;
    private container;
    private config;
    private status;
    constructor(content: JSX.Element, options?: Partial<ModalConfig>);
    getStatus(): ModalStatus;
    open(): Promise<void>;
    close(): Promise<void>;
    injectProps(props: {
        [key: string]: unknown;
    }): void;
    setDisabledBackdrop(value: boolean): void;
    setDisabledCloseButto(value: boolean): void;
    private createReactElement;
    private createContainer;
    private appendNode;
    private removeNode;
    private renderReactElement;
}
export default function useModal(content: JSX.Element, options?: Partial<ModalConfig>): ModalController;
export {};
