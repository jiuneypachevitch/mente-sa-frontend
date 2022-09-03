import React, { useEffect } from 'react';
import { SignUpCard } from "./style";
import Container from 'react-bootstrap/Container';
import SignUpForm from 'src/components/SignUp';
import { routesName } from 'src/utils/routesName';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from 'src/services/Auth/service';
import { useAppSelector, useAppDispatch } from 'src/hooks';
import { logIn, logOut } from 'src/store/loginReducer';

const styleContainer = {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "marginBottom": "30px",
    "paddingTop": "10px"
}

const SignUp: React.FC = () => {
    const dispatch = useAppDispatch();
    isAuthenticated() ? dispatch(logIn()) : dispatch(logOut());
    
    const navigate = useNavigate();
    const isLogged = useAppSelector(state => state.login.isLogged); 
    useEffect( () => {
        if ( isLogged ) {
            navigate(routesName.dashboard);
        }
    }, [navigate]);
    return (
        <Container style={styleContainer} className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
            <SignUpCard> 
                <h3>Cadastro do profissional</h3>
                <SignUpForm />
            </SignUpCard>
        </Container>
    );
}

export default SignUp;
