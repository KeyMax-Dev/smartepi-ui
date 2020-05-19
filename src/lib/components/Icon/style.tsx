import styled from 'styled-components';
import { IconProps } from './index';
import DefaultTheme from './../../assets/themes/default-theme';

export const IconElement = styled.div<IconProps>`
    width: ${(props): string => props.width ? props.width : '100%'};
    height: ${(props): string => props.height ? props.height : '100%'};

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 100%;
        height: 100%;
    }

    path {
        fill: ${(props): string => props.color ? DefaultTheme.colors[props.color][props.invert ? 'contrast' : 'principal'] : DefaultTheme.colors['primary'][props.invert ? 'contrast' : 'principal'] };
    }
`;