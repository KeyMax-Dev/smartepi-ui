import React from 'react';
interface DatepickerProps extends React.HTMLProps<HTMLDivElement> {
    initial?: Date;
    onDaySelected?: (day: Date) => void;
    width?: string;
    height?: string;
}
export default function Datepicker(props: DatepickerProps): JSX.Element;
export {};
