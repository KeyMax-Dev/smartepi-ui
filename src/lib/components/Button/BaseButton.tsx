
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ButtonProps } from '.';
import { getGlobalTheme } from '../..';

const BaseButton = styled(motion.button) <ButtonProps>`
    all: unset;
    padding: 10px 25px;
    min-height: 38px;
    border-radius: ${() => getGlobalTheme().borderRadius};
    margin: 3px;
    transition: all ${() => getGlobalTheme().transitions.fast};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &&.__button-outline {    
        background: transparent;
        color: ${(props): string => props.color ? getGlobalTheme().colors[props.color][props.invert ? 'contrast' : 'principal'] : getGlobalTheme().colors['primary'][props.invert ? 'contrast' : 'principal']};
        -webkit-text-fill-color: ${(props): string => props.color ? getGlobalTheme().colors[props.color][props.invert ? 'contrast' : 'principal'] : getGlobalTheme().colors['primary'][props.invert ? 'contrast' : 'principal']};
        border: 1px solid ${(props): string => props.color ? getGlobalTheme().colors[props.color][props.invert ? 'contrast' : 'principal'] : getGlobalTheme().colors['primary'][props.invert ? 'contrast' : 'principal']};

        &:active {
            background: ${(props): string => props.color ? getGlobalTheme().colors[props.color][props.invert ? 'contrast' : 'principal'] : getGlobalTheme().colors['primary'][props.invert ? 'contrast' : 'principal']}20;
        }

        &:disabled {
            opacity: 0.15;
            cursor: default;

            &:active {
                transform: none;
                background: transparent;
            }
        }

        span {
            max-width: 300px;
            flex: 1;
            text-align: center;
        }
    }

    &&.__button-solid {
        background: ${(props): string => props.color ? getGlobalTheme().colors[props.color][props.invert ? 'contrast' : 'principal'] : getGlobalTheme().colors['primary'][props.invert ? 'contrast' : 'principal']};
        -webkit-text-fill-color: ${(props): string => props.color ? getGlobalTheme().colors[props.color][props.invert ? 'principal' : 'contrast'] : getGlobalTheme().colors['primary'][props.invert ? 'principal' : 'contrast']};
        border: 1px solid transparent;
        box-shadow: ${() => getGlobalTheme().boxShadow.normal};

        &:active {
            box-shadow: ${() => getGlobalTheme().boxShadow.active};
            transform: scale(0.96);
        }

        &:disabled {
            opacity: 0.3;
            cursor: default;
            box-shadow: none;
            &:active {
                transform: none;
                box-shadow: none;
            }
        }
    
        span {
            max-width: 300px;
            flex: 1;
            text-align: center;
            color: ${(props): string => props.color ? getGlobalTheme().colors[props.color].contrast : getGlobalTheme().colors['primary'].contrast};
        }
    }
`;

export default BaseButton;