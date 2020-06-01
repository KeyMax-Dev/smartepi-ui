import styled from "styled-components";
import { motion } from "framer-motion";
import { getGlobalTheme } from "../../assets/themes";
import { CheckboxProps } from './index';

const CheckboxElement = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all ${() => getGlobalTheme().transitions.avarage};
    border: 2px solid transparent;
    margin: 3px;

    &:hover {
        cursor: pointer;
    }

    &&.__checkbox-true {
        border-color: transparent;
        background-color: ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'].principal};

        &:hover {
            background-color: ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'].principal}B3;
        }
    }

    &&.__checkbox-false {
        border-color: ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'].principal}32;

        &:hover {
            background-color: ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'].principal}32;
        }
    }

    label {
        margin: 3px;
        color: ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'].principal};
    }
`;

export default CheckboxElement;