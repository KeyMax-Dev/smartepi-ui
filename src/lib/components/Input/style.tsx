import { motion } from "framer-motion";
import styled from 'styled-components';
import { getGlobalTheme } from "../../assets/themes";
import { InputProps } from './index';

export const InputContainerElement = styled(motion.div)<InputProps>`
    min-width: 260px;
    height: 50px;
    padding: 5px;
    margin: 3px;
    display: flex;
    justify-content: center;
    align-items: stretch;
    transition: all ${() => getGlobalTheme().transitions.fast};
    
    
    &&.__input-container-outline {
        background-color: ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'].contrast};
        border: 1px solid ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'].principal}32;
        border-radius: ${() => getGlobalTheme().borderRadius};

            
        &:focus-within {
            box-shadow: ${() => getGlobalTheme().boxShadow.active};
            border: 2px solid ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'].principal};
        }
    }

    &&.__input-container-downline {
        background-color: transparent;
        border-bottom: 1px solid ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'].principal}32;

        &:focus-within {
            border-bottom: 2px solid ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'].principal};
        }
    }

    @media screen and (max-width: 600px) {   
        width: calc(100% - 30px)
    }
`;

export const InputElement = styled(motion.input)`
    color: ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'].principal};
    background-color: transparent;
    flex: 1;
    flex-shrink: 1;
    border: none;
    outline: none;
    font-size: ${() => getGlobalTheme().font.input.fontSize};
    font-weight: ${() => getGlobalTheme().font.input.fontWeight};
    text-align: ${() => getGlobalTheme().font.input.textAlign};
    font-family: ${() => getGlobalTheme().font.input.fontFamily};
    margin: 0 10px;
    
    &::placeholder {
        transition: all ${() => getGlobalTheme().transitions.avarage};
    }
    &:focus {
        &::placeholder {
            color: transparent;
        }
    }

    @media screen and (max-width: 600px) {   
        margin: 0 3px;
        min-width: 130px;
    }
`;