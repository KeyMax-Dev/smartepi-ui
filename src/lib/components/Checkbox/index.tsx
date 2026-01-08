import { type HTMLMotionProps, useAnimation } from 'framer-motion';
import type React from 'react';
import { useEffect, useState } from 'react';
import { Icon } from '../..';
import Animations from '../../assets/animations';
import { getGlobalTheme } from '../../assets/themes';
import CheckboxElement from './style';

export type CheckboxToggleEvent = Partial<React.MouseEvent<HTMLDivElement>> & {
	value: boolean;
};

export interface CheckboxProps
	extends Omit<HTMLMotionProps<'div'>, 'onToggle'> {
	icon?: string;
	color?: string;
	size?: string;
	onToggle?: (event: CheckboxToggleEvent) => void;
	value?: boolean;
}

export default function Checkbox(props: CheckboxProps): React.ReactElement {
	const size = props.size ? props.size : getGlobalTheme().defaultIconSize;
	const [value, setValue] = useState<boolean>(!!props.value);
	const animationController = useAnimation();
	const iconName = props.icon ? props.icon : 'check';

	const toggle = (currentEvent: React.MouseEvent<HTMLDivElement>): void => {
		const newValue = !value;
		setValue(newValue);
		if (props.onToggle) {
			props.onToggle({ ...currentEvent, value: newValue });
		}
	};

	useEffect(() => {
		setValue(!!props.value);
	}, [props.value]);

	useEffect(() => {
		animationController.start(value ? Animations.FadeIn : Animations.FadeOut);
	}, [value]);

	const { onToggle, ...checkboxProps } = props;

	return (
		<CheckboxElement
			{...checkboxProps}
			className={`ui-checkbox-${value} ${props.className || ''}`}
			style={{ width: size, height: size }}
			onClick={toggle}
			color={props.color}
		>
			<Icon
				initial={{ opacity: 0 }}
				name={iconName}
				invert={value}
				width={`calc(${size} - 30%)`}
				height={`calc(${size} - 30%)`}
				color={props.color}
				animate={animationController}
			/>
		</CheckboxElement>
	);
}
