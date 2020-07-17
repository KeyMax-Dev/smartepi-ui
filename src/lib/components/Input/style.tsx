import { motion } from "framer-motion";
import styled from 'styled-components';
import { getGlobalTheme } from "../../assets/themes";
import { InputProps } from './index';

export const InputContainerElement = styled(motion.div)<InputProps>`
    min-width: 300px;
    height: 50px;
    padding: 5px;
    margin: 3px;
    display: flex;
    justify-content: center;
    align-items: stretch;
    transition: all ${() => getGlobalTheme().transitions.fast};
    
    
    &&.__input-container-outline {
        background-color: ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'][props.invert ? 'principal' : 'contrast']};
        border: 1px solid ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'][props.invert ? 'contrast' : 'principal']}32;
        border-radius: ${() => getGlobalTheme().borderRadius};

            
        &:focus-within {
            box-shadow: ${() => getGlobalTheme().boxShadow.active};
            border: 2px solid ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'][props.invert ? 'contrast' : 'principal']};
        }
    }

    &&.__input-container-downline {
        background-color: transparent;
        border-bottom: 1px solid ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'][props.invert ? 'contrast' : 'principal']}32;

        &:focus-within {
            border-bottom: 2px solid ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'][props.invert ? 'contrast' : 'principal']};
        }
    }

    @media screen and (max-width: 600px) {   
        width: calc(100% - 30px);
        min-width: 250px;
    }
`;

export const InputElement = styled(motion.input)<InputProps>`
    color: ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'][props.invert ? 'contrast' : 'principal']};
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
        color: ${(props): string => getGlobalTheme().colors[props.color ? props.color : 'primary'][props.invert ? 'contrast' : 'principal']}7A;
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