
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ButtonProps } from '.';
import { getGlobalTheme } from '../..';

const IconButton = styled(motion.button) <ButtonProps>`
    all: unset;
    background: transparent;
    min-height: 40px;
    min-width: 40px;
    margin: 3px;
    filter: drop-shadow(${() => getGlobalTheme().boxShadow.normal});
    transition: all ${() => getGlobalTheme().transitions.fast};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:active {
        filter: drop-shadow(${() => getGlobalTheme().boxShadow.active});
        transform: scale(0.96);
    }

    span {
        max-width: 300px;
        flex: 1;
        text-align: center;
    }
`;

export default IconButton;