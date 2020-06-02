import styled from "styled-components";
import { CardBaseProps } from ".";
import { motion } from "framer-motion";
import { getGlobalTheme } from "../../assets/themes";

export interface CardBaseElementProps {
    width: string;
    height: string;
    color: string;
}

export const CardBaseElement = styled(motion.div)<CardBaseElementProps>`
    min-width: ${(props): string => props.width};
    width: ${(props): string => props.width};
    max-width: calc(100% - 30px);
    min-height: ${(props): string => props.height};
    /* height: ${(props): string => props.height}; */
    background-color: ${(props) => getGlobalTheme().colors[props.color].principal};
    border-radius: calc(${() => getGlobalTheme().borderRadius} * 2);
    margin: 10px;
    padding: 15px;
    box-shadow: ${() => getGlobalTheme().boxShadow.normal};

    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    cursor: pointer;
    transition: all ${() => getGlobalTheme().transitions.fast};
    &:active {
        transform: scale(0.99);
        box-shadow: ${() => getGlobalTheme().boxShadow.active};
    }


    .__title {
        margin: 5px 0;
        text-align: ${() => getGlobalTheme().font.h2.textAlign};
        font-weight: ${() => getGlobalTheme().font.h2.fontWeight};
        font-size: ${() => getGlobalTheme().font.h2.fontSize};
        line-height: ${() => getGlobalTheme().font.h2.lineHeight};
        color: ${(props) => getGlobalTheme().colors[props.color].contrast};

        max-width: calc(100% - 30px);
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .__description {
        text-align: ${() => getGlobalTheme().font.p1.textAlign};
        font-weight: ${() => getGlobalTheme().font.p1.fontWeight};
        font-size: ${() => getGlobalTheme().font.p1.fontSize};
        line-height: ${() => getGlobalTheme().font.p1.lineHeight};
        color: ${(props) => getGlobalTheme().colors[props.color].contrast};

        max-width: calc(100% - 30px);
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .__grid-horizontal {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex: 1;
        width: 100%;
    }

    .__grid-vertical {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: absolute;
        bottom: -10px;
    }
`;