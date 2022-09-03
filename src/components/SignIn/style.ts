import styled from "styled-components";
import theme from 'src/styles/colors';
import Form from 'react-bootstrap/Form';

/* COMPONENTS */

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    p, input, a, label {
        color: ${theme.black};
    }
    a {
        text-decoration: underline;
        &:hover {
            color: ${theme.primaryContrast};
        }
    }
    p {
        font-size: 16px;
        margin-bottom: 0;
    }
    input {
        margin-top: 15px;
    }
    button {
        flex: 0;
        min-width: 150px;
        align: right;
        &:hover {
            color: ${theme.primaryContrast}
        }
    }
    & .form-check {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        margin: 0px;
        label {
            margin-left: 5px;
        }
    }
    & .linha {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        font-size: 12px;
        margin-top: 5px;
    }
    & .sign-up {
        margin: 10px 0px 0px 0px;
        text-align: center;
    }
    & .sign-in {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
    }
`
