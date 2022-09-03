import { createGlobalStyle } from "styled-components";
import theme from './colors'; 

export default createGlobalStyle`
    * {
        padding: 0px;
        color: #7b31d9;
        font-family:  'Montserrat', 'Roboto', sans-serif;
        font-size: 16px;
    }
    body {
        background-color: ${theme.background};
        min-width: 350px;
        min-height: 500px;
    }
    a {
        color: #7b31d9;
        text-decoration: none;
    }
`
