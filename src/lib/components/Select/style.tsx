
import styled from 'styled-components';
import { getGlobalTheme } from '../../assets/themes';

type SelectThemeProps = {
    color?: string;
    invert?: boolean;
}

export const SelectInputElement = styled.input`
    flex: 1;
`;

export const SelectContainerElement = styled.div<SelectThemeProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 10px);

    &.select-container-outline {
        background-color: ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'][props.invert ? 'principal' : 'contrast']};
        border: 1px solid ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'][props.invert ? 'contrast' : 'principal']}32;
        border-radius: ${() => getGlobalTheme().borderRadius};

            
        &:focus-within {
            box-shadow: ${() => getGlobalTheme().boxShadow.active};
            border: 2px solid ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'][props.invert ? 'contrast' : 'principal']};
        }
    }

    &.select-container-downline {
        background-color: transparent;
        border-bottom: 1px solid ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'][props.invert ? 'contrast' : 'principal']}32;

        &:focus-within {
            border-bottom: 2px solid ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'][props.invert ? 'contrast' : 'principal']};
        }
    }

    margin: 5px;
`;

export const SelectListElement = styled.div<SelectThemeProps>`
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    z-index: 2;

    top: 40px;
    left: 4px;
    right: 4px;
    max-height: 23vh;
    overflow-y: auto;
    border-bottom-left-radius: calc(${() => getGlobalTheme().borderRadius} * 0.4);
    border-bottom-right-radius: calc(${() => getGlobalTheme().borderRadius} * 0.4);
    box-shadow: ${() => getGlobalTheme().boxShadow.active};
    background-color: ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'][props.invert ? 'principal' : 'contrast']};

    .select-list-item {
        width: 100%;
        padding: 5px 5px 5px 15px;
        transition: ${() => getGlobalTheme().transitions.fast};

        &:hover {
            cursor: pointer;
            background-color: ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'][props.invert ? 'contrast' : 'principal']}12;
        }
    }

    .select-list-loading {
        width: 100%;
        min-height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'][props.invert ? 'contrast' : 'principal']}0A;
    }
`;