import styled from "styled-components";
import { getGlobalTheme } from "../../assets/themes";


export interface DatepickerElementProps {
    width: string;
    height: string;
}

export const DatepickerElement = styled.div<DatepickerElementProps>`
    width: ${({ width }) => width};
    max-width: 100%;
    height: ${({ height }) => height};
    max-height: 100%;
    display: flex;
    flex-direction: column;

    .ui-datepicker-header {
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            flex: 1;
            text-align: center;
        }
    }

    .ui-datepicker-body {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .ui-datepicker-indicator {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-weight: bold;
        user-select: none;
    }

        
    .ui-datepicker-list-item-container {
        all: unset;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
        position: relative;
        transition: all ${() => getGlobalTheme().transitions.fast};

        &:hover {
            background-color: ${() => getGlobalTheme().colors.primary.principal}32;
            color: ${() => getGlobalTheme().colors.primary.contrast};
            -webkit-text-fill-color: ${() => getGlobalTheme().colors.primary.contrast};
        }
    }

    .ui-datepicker-list-item-outday {
        opacity: 0.3;
    }

    .ui-datepicker-list-item-unavaliable {
        cursor: not-allowed;
        color: ${() => getGlobalTheme().colors.danger.principal};
        -webkit-text-fill-color: ${() => getGlobalTheme().colors.danger.principal};

        &:hover {
            background-color: transparent;
            color: ${() => getGlobalTheme().colors.danger.principal};
            -webkit-text-fill-color: ${() => getGlobalTheme().colors.danger.principal};
        }
    }

    .ui-datepicker-list-item-today::after {
        content: " ";
        width: 100%;
        height: 100%;
        background-color: ${() => getGlobalTheme().colors.primary.principal}32;
        position: absolute;
        border: 3px solid ${() => getGlobalTheme().colors.primary.principal}32;
        border-radius: 5px;
        top: -3px;
        left: -3px;
    }

    .ui-datepicker-week-container {
        all: unset;
        flex: 1;
        display: flex;
        align-items: stretch;
    }

    .ui-datepicker-week-title {
        all: unset;
        display: flex;
        min-height: 30px;
        padding: 2% 0;
        align-items: stretch;
        color: ${() => getGlobalTheme().colors.primary.principal};
        -webkit-text-fill-color: ${() => getGlobalTheme().colors.primary.principal};

        li {
            all: unset;
            flex: 1;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .ui-datepicker-list-item-selected {
        background-color: ${() => getGlobalTheme().colors.success.principal};
        color: ${() => getGlobalTheme().colors.success.contrast};
        -webkit-text-fill-color: ${() => getGlobalTheme().colors.success.contrast};

        &:hover {
            background-color: ${() => getGlobalTheme().colors.success.principal}32;
            color: ${() => getGlobalTheme().colors.success.contrast};
            -webkit-text-fill-color: ${() => getGlobalTheme().colors.success.contrast};
        }
        
        &::after  {
            content: " ";
            position: absolute;
            width: 100%;
            height: 100%;
            border: 3px solid ${() => getGlobalTheme().colors.success.principal};
            border-radius: 5px;
            top: -3px;
            left: -3px;
        }
    }
`;