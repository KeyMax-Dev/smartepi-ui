/// <reference types="react" />
import AsideController, { BaseAsideConfig } from '../aside-controller';
declare type ModalConfig = BaseAsideConfig & {
    disableBackdropClose: boolean;
    disableCloseButton: boolean;
    preventScroll: boolean;
};
declare class ModalController extends AsideController {
    protected config: ModalConfig;
    private readonly overlayControls;
    constructor(content: JSX.Element, options?: Partial<ModalConfig>);
    open(): Promise<void>;
    close(): Promise<void>;
    setDisabledBackdrop(value: boolean): void;
    setDisabledCloseButto(value: boolean): void;
    protected createReactElement(): JSX.Element;
    protected renderReactElement(): void;
}
export default function useModal(content: JSX.Element, options?: Partial<ModalConfig>): ModalController;
export {};
