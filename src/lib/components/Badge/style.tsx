import styled from "styled-components";
import { getGlobalTheme } from "../../assets/themes";
import { motion } from "framer-motion";


interface BadgeElementProps {
    color: string;
}

export const BadgeElement = styled(motion.div)<BadgeElementProps>`
    padding: 2px;
    border-radius: calc(${() => getGlobalTheme().borderRadius} * 2);
    background-color: ${(props): string => getGlobalTheme().colors[props.color].principal};
    color: ${(props): string => getGlobalTheme().colors[props.color].contrast};
    margin: 0 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    .__text {
        flex: 1;
        margin: 0 5px;
        text-transform: uppercase;
    }
`;