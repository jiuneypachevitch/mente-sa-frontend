import React from 'react';
import Container from 'react-bootstrap/Container';
import PatientContainer from 'src/components/Patient/List';
//import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from 'src/services/Auth/service';
import { useAppDispatch } from 'src/hooks';
import { logIn, logOut } from 'src/store/loginReducer';

const styleContainer = {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "marginBottom": "30px",
    "paddingTop": "10px"
}

const Patient: React.FC = () => {
    const dispatch = useAppDispatch();
    isAuthenticated() ? dispatch(logIn()) : dispatch(logOut());
    
    //const navigate = useNavigate();
    //const isLogged = useAppSelector(state => state.login.isLogged); 
    return (
        <Container style={styleContainer} >
            <PatientContainer />
        </Container>
    );
}

export default Patient;
