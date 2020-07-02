import styled from "styled-components";
import { motion } from "framer-motion";
import { getGlobalTheme } from "../../assets/themes";

export const TabsLayoutElement = styled(motion.section)`
    flex: 1 1 100%;
    width: 100%;
    min-height: 100%;
    justify-self: stretch;
    align-self: stretch;
    
    display: flex;
    flex-direction: column;
    .tabs-header {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: stretch;
        width: 100%;
        min-height: 50px;
        background-color: ${() => getGlobalTheme().colors.primary.principal};
        box-shadow: ${() => getGlobalTheme().boxShadow.normal};
        color: ${() => getGlobalTheme().colors.primary.contrast}33;
        .tab {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            min-height: 100%;
            cursor: pointer;
            border-bottom: 5px solid ${() => getGlobalTheme().colors.primary.contrast}33;
            text-transform: uppercase;
            overflow: hidden;
        }
        .tab-selector {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 5px;
            background-color: ${() => getGlobalTheme().colors.primary.contrast};
            z-index: 3;
        }
        .tab-selected {
            color: ${() => getGlobalTheme().colors.primary.contrast};
        }
    }
    .tab-body {
        width: 100%;
        flex: 1;
        position: relative;
    }
`;

export const TabElement = styled(motion.div)`

`;

