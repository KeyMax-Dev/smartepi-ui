import React, { useEffect, useRef, useState, ChangeEvent, FocusEvent } from 'react';
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
    const [enableClear, setEnableClear] = useState<boolean>(!!props.value && !!props.enableClear);

    const clear = (): void => {
        if (inputRef.current) {
            const input = inputRef.current as HTMLInputElement;
            const setValue = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
            if (setValue) {
                setValue.call(input, '');
                input.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }
    };

    const onDatepickerSelect = (date: Date): void => {
        if (inputRef.current) {
            const input = inputRef.current as HTMLInputElement;
            const setValue = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
            if (setValue) {
                setValue.call(input, date);
                input.dispatchEvent(new Event('input', { bubbles: true }));
                // eslint-disable-next-line
                datepicker.close();
            }
        }
    };
    const datepicker = useOverflow(<Datepicker onDaySelected={onDatepickerSelect} />);

    useEffect(() => {
        if (props.getRef) props.getRef(inputRef as React.MutableRefObject<HTMLInputElement>);

        const eventHandler = (event: any): void => setEnableClear(event.target.value.length > 0 && !!props.enableClear);
        inputRef.current?.addEventListener('input', eventHandler);
        return () => inputRef.current?.removeEventListener('input', eventHandler);
    }, [inputRef.current]);

    return (
        <InputContainerElement {...props.containerProps} invert={props.invert} color={props.color} className={`ui-input-container-${containerType} ${props.containerProps?.className}`}>
            {props.iconLeft && <Icon color={props.color} name={props.iconLeft} invert={props.invert} width="25px" height="25px" style={{ marginLeft: '10px' }} />}
            <InputElement {...props} ref={inputRef as React.MutableRefObject<HTMLInputElement>} />
            {enableClear && <Button buttonType="icon" icon="close" onClick={clear} iconSize="20px" invert={props.invert} style={{ margin: '0 10px 0 0', padding: 0 }} />}
            {props.enableDatepicker && <Button buttonType="icon" icon="calendar" invert={props.invert} onClick={(event) => datepicker.open(event.currentTarget as HTMLElement)} iconSize="20px" style={{ margin: '0 10px 0 0', padding: 0 }} />}
            {props.iconRight && <Icon color={props.color} name={props.iconRight} invert={props.invert} width="25x" height="25px" style={{ marginRight: '10px' }} />}
        </InputContainerElement>
    );
}