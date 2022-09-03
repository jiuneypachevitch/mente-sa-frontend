import React, { useEffect } from 'react';
import { SignInCard } from "./style";
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { routesName } from 'src/utils/routesName';
import SignInForm from 'src/components/SignIn';
import { isAuthenticated } from 'src/services/Auth/service';
import { useAppSelector, useAppDispatch } from 'src/hooks';
import { logIn, logOut } from 'src/store/loginReducer';

const styleContainer = {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "minHeight": "500px",
}

const SignIn: React.FC = () => {
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
            <SignInCard> 
                <h3>Bem vindo ao sistema</h3>
                <SignInForm />
            </SignInCard>
        </Container>
    );
}

export default SignIn;
