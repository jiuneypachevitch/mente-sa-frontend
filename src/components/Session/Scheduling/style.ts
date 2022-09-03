import styled from "styled-components";
import theme from 'src/styles/colors';
//import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

export const SessionCreateEditModal = styled(Modal)`
    flex: 1;
    margin: 20px auto;
    padding: 20px;
    button {
        flex: 0;
        min-width: 150px;
        margin: 5px;
        &:hover {
            color: ${theme.primaryContrast}
        }
    }
    & .btn-close {
            min-width: 30px;
    }
    & .modal-footer {
        padding-right: 18px;
    }
    form {
        display: flex;
        flex-direction: column;
        padding: 10px 5px;
        p, input, a, label, select {
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
            margin-bottom: 0px;
        }
        input, select {
            margin-top: 15px;
        }
    }
`
