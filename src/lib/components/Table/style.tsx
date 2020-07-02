import styled from "styled-components";
import { TableColumnProps } from './table-column';
import { getGlobalTheme } from "../../assets/themes";


export const TableElement = styled.table`
    flex: 1 1 100%;
    width: 100%;
    justify-self: stretch;
    align-self: stretch;
    
    border-spacing: 0;
    display: flex;
    flex-direction: column;
    tr {
        display: flex;
        justify-content: center;
        align-items: stretch;
        text-align: center;
        width: 100%;
        max-width: 1024px;
    }
`;

export const TableHeaderElement = styled.thead`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${() => getGlobalTheme().colors.primary.principal};
    box-shadow: ${() => getGlobalTheme().boxShadow.normal};
    th {
        color: ${() => getGlobalTheme().colors.primary.contrast};
        font-size: ${() => getGlobalTheme().font.h2.fontSize};
        font-weight: ${() => getGlobalTheme().font.h2.fontWeight};
        text-align: center;
        padding: 10px;
    }
`;

export const TableBodyElement = styled.tbody`
    flex: 1;
    position: relative;
    tr {        
        border-bottom: 1px solid ${() => getGlobalTheme().colors.primary.principal}32;
    }
`;

export const TableColumnElement = styled.td<TableColumnProps>`
    flex: ${(props) => props.flex || 'initial'};
    min-width: ${(props) => props.width || 'initial'};
    max-width: ${(props) => props.width || 'initial'};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    transition: all ${() => getGlobalTheme().transitions.avarage};
    &:hover {
        background-color: ${() => getGlobalTheme().colors.primary.principal}08;
    }
`;