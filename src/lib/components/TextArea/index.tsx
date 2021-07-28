import React from 'react';
import { TextAreaContainerElement } from './style';
import Icon from '../Icon';
import { HTMLMotionProps } from 'framer-motion';

type ContainerType = 'outline' | 'downline';
const DEFAULT_TYPE: ContainerType = 'downline';

export interface TextAreaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	color?: string;
	containerProps?: HTMLMotionProps<'div'>;
	containerType?: ContainerType;
	icon?: string;
	invert?: boolean;
}

export default function TextArea({
	icon,
	containerProps,
	containerType,
	invert,
	color,
	...props
}: TextAreaProps): JSX.Element {
	return (
		<TextAreaContainerElement
			{...containerProps}
			invert={invert}
			color={color}
			className={`ui-textarea-container-${
				containerType || DEFAULT_TYPE
			} ${containerProps?.className || ''}`}
		>
			<textarea {...props} />
			{icon && (
				<Icon
					color={color}
					name={icon}
					invert={invert}
					width="25px"
					height="25px"
					className="__icon"
				/>
			)}
		</TextAreaContainerElement>
	);
}
