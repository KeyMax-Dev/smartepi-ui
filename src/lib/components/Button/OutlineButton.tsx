
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ButtonProps } from '.';
import { getGlobalTheme } from '../..';

const OutlineButton = styled(motion.button) <ButtonProps>`
    all: unset;
    background: transparent;
    color: ${(props): string => props.color ? getGlobalTheme().colors[props.color].principal : getGlobalTheme().colors['primary'].principal};
    border: 1px solid ${(props): string => props.color ? getGlobalTheme().colors[props.color].principal : getGlobalTheme().colors['primary'].principal};
    padding: 10px 25px;
    min-height: 40px;
    border-radius: ${() => getGlobalTheme().borderRadius};
    margin: 3px;
    transition: all ${() => getGlobalTheme().transitions.fast};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:active {
        background: ${(props): string => props.color ? getGlobalTheme().colors[props.color].principal : getGlobalTheme().colors['primary'].principal};
        color: ${(props): string => props.color ? getGlobalTheme().colors[props.color].contrast : getGlobalTheme().colors['primary'].contrast};
        border: 1px solid transparent;
    }

    span {
        max-width: 300px;
        flex: 1;
        text-align: center;
    }
`;

export default OutlineButton;