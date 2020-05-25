
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ButtonProps } from '.';
import { getGlobalTheme } from '../..';

const SolidButton = styled(motion.button) <ButtonProps>`
    all: unset;
    background: ${(props): string => props.color ? getGlobalTheme().colors[props.color].principal : getGlobalTheme().colors['primary'].principal};
    color: ${(props): string => props.color ? getGlobalTheme().colors[props.color].contrast : getGlobalTheme().colors['primary'].contrast};
    padding: 10px 25px;
    min-height: 40px;
    border-radius: ${() => getGlobalTheme().borderRadius};
    box-shadow: ${() => getGlobalTheme().boxShadow.normal};
    margin: 3px;
    transition: all ${() => getGlobalTheme().transitions.fast};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:active {
        box-shadow: ${() => getGlobalTheme().boxShadow.active};
        transform: scale(0.96);
    }

    span {
        max-width: 300px;
        flex: 1;
        text-align: center;
    }
`;

export default SolidButton;