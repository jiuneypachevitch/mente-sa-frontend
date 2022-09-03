import styled from "styled-components";
import theme from 'src/styles/colors';
import Card from 'react-bootstrap/Card';

/*export const PageResetPassword = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 30px auto;
   padding: 10px;
   width: 400px;
   align-items: center;
   border: 1px solid red;
   background-color: ${theme.background};
`*/

export const ResetPasswordCards = styled(Card)`
    flex: 1;
    margin: 20px auto;
    padding: 20px;
    h3 {
        text-align: center;
        padding: 30px;
    }
    form {
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
            margin-top: 10px;
        }
        button {
            flex: 0;
            min-width: 150px;
            align: right;
            &:hover {
                color: ${theme.primaryContrast}
            }
        }
        & .sign-up {
            margin: 10px 0px 0px 0px;
            text-align: center;
        }
        & .submit {
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
        }
    }
`
