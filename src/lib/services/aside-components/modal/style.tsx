import { getGlobalTheme } from "../../../assets/themes";
import Icon from "../../../components/Icon";
import styled from "styled-components";

export const ModalBaseElement = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;

    .__overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        background-color: ${() => getGlobalTheme().colors.primary.principal}4D;
        opacity: 0;
    }

    .__container {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: ${() => getGlobalTheme().borderRadius};
        background-color: ${() => getGlobalTheme().colors.primary.contrast};
        border-radius: ${() => getGlobalTheme().borderRadius};
        box-shadow: ${() => getGlobalTheme().boxShadow.normal};
        opacity: 0;
        max-width: calc(100% - 30px);
        max-height: calc(100% - 30px);

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ModalCloseButton = styled(Icon)`
    position: absolute;
    right: calc(${() => getGlobalTheme().borderRadius} / 3);
    top: calc(${() => getGlobalTheme().borderRadius} / 3);

    cursor: pointer;
    transition: ${() => getGlobalTheme().transitions.fast};
    &:active {
        transform: scale(0.90);
    }
`;