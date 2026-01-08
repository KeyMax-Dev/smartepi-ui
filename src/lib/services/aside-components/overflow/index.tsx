import type React from "react";
import { useRef, useState } from "react";
import AsideController, { type BaseAsideConfig } from "../aside-controller";
import { OverflowElement, OverflowElementArrow } from "./style";

type Position = "top" | "bottom";

export type OverflowConfig = BaseAsideConfig & {
	position: Position;
};

const DEFAULT_CONFIG: OverflowConfig = {
	id: "ui-overflow-default",
	position: "bottom",
	rootElement: "body",
};

const MARGIN = 10;

export class OverflowController extends AsideController {
	protected config: OverflowConfig;
	private parent: HTMLElement | null = null;
	private contentRef = useRef<HTMLDivElement>(null);
	private contentArrowRef = useRef<HTMLDivElement>(null);

	private clickListener = (event: MouseEvent): void => {
		if (
			!this.container?.contains(event.target as HTMLElement) ||
			this.container === event.target
		) {
			this.close("clickOutside");
		}
	};

	private updateContainerListener = (): void => this.updateContainer();
	private hoverLeaveListener = (): void => {
		this.close("mouseLeave");
		this.container?.removeEventListener("mouseleave", this.hoverLeaveListener);
	};

	constructor(content: JSX.Element, options?: Partial<OverflowConfig>) {
		super(content, options);
		this.config = Object.assign({}, DEFAULT_CONFIG, options);
	}

	public setParent(newParent: HTMLElement): void {
		this.parent = newParent;
	}

	public getParent(): HTMLElement | null {
		return this.parent;
	}

	public open(parent?: HTMLElement, isHover?: boolean): void {
		setTimeout(() => {
			if (this.status === "opened") return;
			if (!this.appendNode()) return;
			this.updateContainer(parent);
			this.addListeners();

			this.status = "opening";
			this.containerControls.stop();
			this.containerControls
				.start({
					opacity: [0, 1],
					transition: { duration: 0.2 },
				})
				.then(() => {
					this.status = "opened";
					if (this.onopen) this.onopen();
				});

			if (isHover)
				this.container?.addEventListener("mouseleave", this.hoverLeaveListener);
		});
	}

	public close(reason?: unknown): void {
		setTimeout(() => {
			const duration = 0.2;
			this.removeListeners();
			this.status = "closing";
			this.containerControls.start({
				opacity: [1, 0],
				transition: { duration },
			});
			setTimeout(() => {
				this.status = "closed";
				if (this.onclose) this.onclose(reason);
				this.removeNode();
			}, duration * 1000);
		});
	}

	protected createReactElement(): JSX.Element {
		return (
			<OverflowElement
				ref={this.contentRef as React.MutableRefObject<HTMLDivElement>}
				className={`ui-overflow-${this.config.position}`}
				animate={this.containerControls}
			>
				{this.content}
				<OverflowElementArrow
					ref={this.contentArrowRef as React.MutableRefObject<HTMLDivElement>}
					className={`ui-overflow-${this.config.position}`}
				/>
			</OverflowElement>
		);
	}

	private updateContainer(parent?: HTMLElement): void {
		if (parent) this.setParent(parent);
		if (!!!this.parent) throw new Error("No parent provided");

		const parentBounding = this.parent.getBoundingClientRect();
		if (this.container) {
			this.container.style.position = "fixed";
			this.container.style.width = parentBounding.width + "px";
			this.container.style.height = parentBounding.height + "px";
			this.container.style.left = parentBounding.left + "px";
			this.container.style.top = parentBounding.top + "px";
			this.container.style.display = "flex";
			this.container.style.justifyContent = "center";
			this.container.style.alignItems = "center";
		}
		if (this.contentRef.current && this.contentArrowRef.current) {
			const contentBounding = (
				this.contentRef.current as HTMLDivElement
			).getBoundingClientRect();

			if (contentBounding.left < 0) {
				const offsetLeft = -parentBounding.left + MARGIN;
				this.contentRef.current.style.left = offsetLeft + "px";
				this.contentArrowRef.current.style.left =
					-offsetLeft +
					parentBounding.width / 2 +
					this.contentArrowRef.current.offsetWidth / 2 -
					MARGIN +
					"px";
			} else if (contentBounding.right > window.innerWidth) {
				const offsetRight = -window.innerWidth + parentBounding.right;
				this.contentRef.current.style.right = offsetRight + MARGIN + "px";
				this.contentArrowRef.current.style.left =
					this.contentRef.current.offsetWidth + offsetRight - MARGIN + "px";
			}

			const minContentOut = contentBounding.height * 0.1;
			if (contentBounding.top < -minContentOut) {
				this.config.position = "bottom";
				this.contentRef.current.classList.replace(
					"ui-overflow-top",
					"ui-overflow-bottom",
				);
				this.contentArrowRef.current.classList.replace(
					"ui-overflow-top",
					"ui-overflow-bottom",
				);
			} else if (contentBounding.bottom > window.innerHeight + minContentOut) {
				this.config.position = "top";
				this.contentRef.current.classList.replace(
					"ui-overflow-bottom",
					"ui-overflow-top",
				);
				this.contentArrowRef.current.classList.replace(
					"ui-overflow-bottom",
					"ui-overflow-top",
				);
			}
		}
	}

	private addListeners(): void {
		this.removeListeners();
		setTimeout(() => {
			window.addEventListener("click", this.clickListener);
			window.addEventListener("resize", this.updateContainerListener);
			window.addEventListener("scroll", this.updateContainerListener);
		});
	}

	private removeListeners(): void {
		window.removeEventListener("click", this.clickListener);
		window.removeEventListener("resize", this.updateContainerListener);
		window.removeEventListener("scroll", this.updateContainerListener);
	}
}

export default function useOverflow(
	content: JSX.Element,
	options?: Partial<OverflowConfig>,
): OverflowController {
	const [overflow] = useState(new OverflowController(content, options));
	return overflow;
}
