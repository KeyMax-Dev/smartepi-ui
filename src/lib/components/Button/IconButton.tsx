
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ButtonProps } from '.';
import { getGlobalTheme } from '../..';

const IconButton = styled(motion.button) <ButtonProps>`
    all: unset;
    background: transparent;
    padding: 5px;
    border-radius: ${() => getGlobalTheme().borderRadius};
    margin: 3px;
    transition: all ${() => getGlobalTheme().transitions.fast};
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    &:active {
        transform: scale(0.96);
    }

    span {
        max-width: 80px;
        text-align: center;
        color: ${(props): string => props.color ? getGlobalTheme().colors[props.color].principal : getGlobalTheme().colors['primary'].principal};
        font-size: calc(${() => getGlobalTheme().font.h2.fontSize} / 2);
        font-weight: ${() => getGlobalTheme().font.h2.fontWeight};
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .__icon {
        flex: 1;
        margin: 5px;
    }
`;

export default IconButton;