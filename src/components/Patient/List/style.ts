import styled from "styled-components";
import theme from 'src/styles/colors';
import Card from 'react-bootstrap/Card';


export const Container= styled(Card)`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    background-color: ${theme.background};
    button {
        color: ${theme.white};
        &:hover {
            color: ${theme.primaryContrast};
        }
    }
    & .header {
        display: flex;
        margin: 10px auto;
        width: 95%;
        flex-direction: row;
        align-items: baseline;
        padding-bottom: 10px;
        justify-content: space-between;
        border-bottom: 2px solid ${theme.primary};
    }
`
