import React, { useEffect, useRef } from 'react';
import Icon from '../Icon';
import { HTMLMotionProps } from 'framer-motion';
import { InputElement, InputContainerElement } from './style';
import Button from '../Button';
import { useOverflow, Datepicker } from '../..';

type ContainerType = 'outline' | 'downline';
const DEFAULT_TYPE: ContainerType = 'downline';

export interface InputProps extends HTMLMotionProps<'input'> {
    color?: string;
    containerProps?: HTMLMotionProps<'div'>;
    containerType?: ContainerType;
    enableClear?: boolean;
    enableDatepicker?: boolean;
    getRef?: (input: React.MutableRefObject<HTMLInputElement> | undefined) => void;
    iconLeft?: string;
    iconRight?: string;
    invert?: boolean;
}

export default function Input(props: InputProps): JSX.Element {

    const containerType: ContainerType = props.containerType ? props.containerType : DEFAULT_TYPE;
    const inputRef = useRef<HTMLInputElement>();

    const clear = () => {
        if (inputRef.current) {
            const element = inputRef.current as HTMLInputElement;
            element.value = '';
        }
    };

    const onDatepickerSelect = (date: Date) => {
        const element = inputRef.current as HTMLInputElement;
        element.value = date.toLocaleDateString();
        // eslint-disable-next-line
        datepicker.close();
    };
    const datepicker = useOverflow(<Datepicker onDaySelected={onDatepickerSelect} />);

    useEffect(() => {
        if (props.getRef) props.getRef(inputRef as React.MutableRefObject<HTMLInputElement>);
    }, []);

    return (
        <InputContainerElement {...props.containerProps} invert={props.invert} color={props.color} className={`__input-container-${containerType} ${props.containerProps?.className}`}>
            {props.iconLeft && <Icon color={props.color} name={props.iconLeft} invert={props.invert}/>}
            <InputElement {...props} ref={inputRef as React.MutableRefObject<HTMLInputElement>} />
            {props.enableClear && <Button buttonType="icon" icon="close" onClick={clear} iconSize="20px" style={{ margin: 0, padding: 0 }} />}
            {props.enableDatepicker && <Button buttonType="icon" icon="calendar" onClick={(event) => datepicker.open(event.currentTarget as HTMLElement)} iconSize="20px" style={{ margin: 0, padding: 0 }} invert={props.invert} />}
            {props.iconRight && <Icon color={props.color} name={props.iconRight} invert={props.invert} />}
        </InputContainerElement>
    );
}