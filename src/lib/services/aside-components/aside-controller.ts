import { useAnimation } from 'framer-motion';
import React from 'react';
import ReactDOM from 'react-dom';

type BaseStatus = 'opening' | 'opened' | 'closing' | 'closed';

export type BaseAsideConfig = {
	id: string;
	rootElement: string;
};

const DEFAULT_ASIDE_CONFIG: BaseAsideConfig = {
	id: 'ui-default-aside-id',
	rootElement: 'body',
};

export default abstract class AsideController {
	protected config: BaseAsideConfig;
	protected container: HTMLElement | null = null;
	protected status: BaseStatus = 'closed';
	protected readonly containerControls = useAnimation();
	protected onopen: (() => void) | undefined;
	protected onclose: ((reason: unknown) => void) | undefined;

	protected abstract createReactElement(): JSX.Element;
	protected abstract open(...args: unknown[]): void;
	protected abstract close(...args: unknown[]): void;

	constructor(
		protected content: JSX.Element,
		options?: Partial<BaseAsideConfig>,
	) {
		this.config = Object.assign({}, DEFAULT_ASIDE_CONFIG, options);
		this.injectProps({ controller: this });
	}

	public getStatus(): BaseStatus {
		return this.status;
	}

	public injectProps(props: { [key: string]: unknown }): void {
		if (this.content) {
			this.content = React.cloneElement(this.content, {
				...(this.content.props || {}),
				...props,
			});
			if (this.status === 'opened') {
				this.renderReactElement();
			}
		}
	}

	protected createContainer(): void {
		if (this.container || typeof document === 'undefined') return;
		this.container = document.createElement('aside');
		this.container.setAttribute('id', this.config.id);
		this.container.style.position = 'fixed';
		this.container.style.zIndex = '99';
	}

	protected renderReactElement(): void {
		if (this.status === 'opening' || this.status === 'opened') {
			// @ts-expect-error - ReactDOM.render is deprecated in React 18+ but needed for legacy code
			ReactDOM.render(this.createReactElement(), this.container);
		} else {
			throw new Error('Bad time react element render.');
		}
	}

	protected appendNode(): boolean {
		this.status = 'opening';
		this.createContainer();
		try {
			this.renderReactElement();

			let elementReference: Element | null;
			if (this.config.rootElement.startsWith('#')) {
				elementReference = document.getElementById(
					this.config.rootElement.replace('#', ''),
				);
			} else if (this.config.rootElement.startsWith('.')) {
				elementReference = document.getElementsByClassName(
					this.config.rootElement.replace('.', ''),
				)[0];
			} else {
				elementReference = document.getElementsByTagName(
					this.config.rootElement,
				)[0];
			}

			if (elementReference) {
				elementReference.appendChild(this.container as HTMLElement);
				return true;
			} else {
				throw new Error('Element reference not found');
			}
		} catch (e) {
			console.error(`${this.config.id} append failed:`, e);
			console.error(`${this.config.id} configurations:`, this.config);
			this.status = 'closed';
			return false;
		}
	}

	protected removeNode(): boolean {
		try {
			// @ts-expect-error - unmountComponentAtNode is deprecated in React 18+ but needed for legacy code
			ReactDOM.unmountComponentAtNode(this.container as HTMLElement);

			let elementReference: Element | null;
			if (this.config.rootElement.startsWith('#')) {
				elementReference = document.getElementById(
					this.config.rootElement.replace('#', ''),
				);
			} else if (this.config.rootElement.startsWith('.')) {
				elementReference = document.getElementsByClassName(
					this.config.rootElement.replace('.', ''),
				)[0];
			} else {
				elementReference = document.getElementsByTagName(
					this.config.rootElement,
				)[0];
			}

			if (elementReference) {
				elementReference.removeChild(this.container as HTMLElement);
				this.status = 'closed';
				return true;
			} else {
				throw new Error('Element reference not found');
			}
		} catch (e) {
			console.error(`${this.config.id} remove failed`, e);
			console.error(`${this.config.id} configurations:`, this.config);
			return false;
		}
	}

	public onOpen(func: () => void): void {
		this.onopen = func;
	}

	public onClose(func: (reason: unknown) => void): void {
		this.onclose = func;
	}
}
