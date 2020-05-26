import styled from "styled-components";
import { motion } from "framer-motion";
import { getGlobalTheme } from "../../assets/themes";

interface ToastProps {
    color: string;
}

export const ToastElement = styled(motion.div)<ToastProps>`
    position: fixed;
    width: 1024px;
    left: calc(50% - 512px);
    padding: 15px;
    bottom: -100px;
    z-index: 99;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props): string => getGlobalTheme().colors[props.color].principal};
    color: ${(props): string => getGlobalTheme().colors[props.color].contrast};
    font-size: ${() => getGlobalTheme().font.h2.fontSize};
    font-weight: ${() => getGlobalTheme().font.h2.fontWeight};
    border-radius: ${() => getGlobalTheme().borderRadius};
    box-shadow: ${() => getGlobalTheme().boxShadow.normal};

    @media screen and (max-width: 1024px) {
        width: calc(100% - 30px);
        left: 15px;
        font-size: calc(${() => getGlobalTheme().font.h2.fontSize} / 2);
    }
`;