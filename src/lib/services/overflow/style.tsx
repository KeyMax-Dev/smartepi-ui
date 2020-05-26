import styled from "styled-components";
import { motion } from "framer-motion";
import { getGlobalTheme } from "../../assets/themes";

export const OverflowElement = styled(motion.div)`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;

    border-radius: ${() => getGlobalTheme().borderRadius};
    box-shadow: ${() => getGlobalTheme().boxShadow.normal};
    background-color: ${() => getGlobalTheme().colors.primary.contrast};
    padding: 5px;
    
    &::after {
        content: ' ';
        position: absolute;
        border: 5px solid transparent;
    }

    &.__bottom {
        top: 100%;
        &::after {
            left: calc(50% - 5px);
            top: -10px;
            border-bottom-color: ${() => getGlobalTheme().colors.primary.contrast};
        }
    }

    &.__top {
        bottom: 100%;
        &::after {
            left: calc(50% - 5px);
            bottom: -10px;
            border-top-color: ${() => getGlobalTheme().colors.primary.contrast};
        }
    }

    &.__right {
        left: 100%;
        &::after {
            top: calc(50% - 5px);
            left: -10px;
            border-right-color: ${() => getGlobalTheme().colors.primary.contrast};
        }
    }

    &.__left {
        right: 100%;
        &::after {
            top: calc(50% - 5px);
            right: -10px;
            border-left-color: ${() => getGlobalTheme().colors.primary.contrast};
        }
    }
`;