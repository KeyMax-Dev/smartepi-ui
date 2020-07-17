import styled from "styled-components";
import { TableColumnProps } from './table-column';
import { getGlobalTheme } from "../../assets/themes";


export const TableElement = styled.table`
    flex: 1 1 100%;
    width: 100%;
    min-height: 100px;
    justify-self: flex-start;
    align-self: flex-start;
    overflow: auto;
    
    border-spacing: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    tr {
        display: flex;
        justify-content: center;
        align-items: stretch;
        text-align: center;
        width: 100%;
        max-width: 1024px;
    }

    .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        flex: 1;
        text-align: center;
    }
`;

export const TableHeaderElement = styled.thead`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${() => getGlobalTheme().colors.primary.principal};
    box-shadow: ${() => getGlobalTheme().boxShadow.normal};
    min-width: fit-content;
    height: 50px;
    th {
        color: ${() => getGlobalTheme().colors.primary.contrast};
        font-size: ${() => getGlobalTheme().font.h2.fontSize};
        font-weight: ${() => getGlobalTheme().font.h2.fontWeight};
        text-align: center;
    }
`;

export const TableBodyElement = styled.tbody`
    flex: 1;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: fit-content;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    tr {        
        border-bottom: 1px solid ${() => getGlobalTheme().colors.primary.principal}32;
    }
`;

export const TableColumnElement = styled.td<TableColumnProps>`
    flex: ${({flex}) => flex || 'initial'};
    min-width: ${({minwidth: minWidth}) => minWidth || 'initial'};
    max-width: ${({maxwidth: maxWidth}) => maxWidth || 'initial'};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px 0;
    transition: all ${() => getGlobalTheme().transitions.avarage};
    &:hover {
        background-color: ${() => getGlobalTheme().colors.primary.principal}08;
    }
`;