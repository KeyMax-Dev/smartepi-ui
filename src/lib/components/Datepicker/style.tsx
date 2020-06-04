import styled from "styled-components";
import { getGlobalTheme } from "../../assets/themes";


export interface DatepickerElementProps {
    width: string;
    height: string;
}

export const DatepickerElement = styled.div<DatepickerElementProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex;
    flex-direction: column;

    .__datepicker-header {
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            flex: 1;
            text-align: center;
        }
    }

    .__datepicker-body {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .__datepicker-indicator {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-weight: bold;
        user-select: none;
    }

        
    .__datepicker-list-item-container {
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
        }
    }

    .__datepicker-list-item-outday {
        opacity: 0.3;
    }

    .__datepicker-list-item-unavaliable {
        cursor: not-allowed;
        color: ${() => getGlobalTheme().colors.danger.principal};

        &:hover {
            background-color: transparent;
            color: ${() => getGlobalTheme().colors.danger.principal};
        }
    }

    .__datepicker-list-item-today::after {
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

    .__datepicker-week-container {
        all: unset;
        flex: 1;
        display: flex;
        align-items: stretch;
    }

    .__datepicker-week-title {
        all: unset;
        display: flex;
        min-height: 30px;
        padding: 2% 0;
        align-items: stretch;

        li {
            all: unset;
            flex: 1;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .__datepicker-list-item-selected {
        background-color: ${() => getGlobalTheme().colors.secondary.principal};
        color: ${() => getGlobalTheme().colors.secondary.contrast};

        &:hover {
            background-color: ${() => getGlobalTheme().colors.secondary.principal}32;
            color: ${() => getGlobalTheme().colors.secondary.contrast};
        }
        
        &::after  {
            content: " ";
            position: absolute;
            width: 100%;
            height: 100%;
            border: 3px solid ${() => getGlobalTheme().colors.secondary.principal};
            border-radius: 5px;
            top: -3px;
            left: -3px;
        }
    }
`;