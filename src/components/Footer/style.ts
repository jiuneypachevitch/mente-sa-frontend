import styled from "styled-components";
import theme from 'src/styles/colors';

export const PageFooter = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 40px;
    p { 
        padding-top: 15px;
        font-size: 14px;
        color: ${theme.white};
        text-align: center;
        flex-grow: 1;
    }
    background-color: ${theme.secondaryVariant};
`
