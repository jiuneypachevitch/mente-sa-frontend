import React from 'react';
import Container from 'react-bootstrap/Container';
import DashboardContainer from 'src/components/Dashboard';
//import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from 'src/services/Auth/service';
import { useAppDispatch } from 'src/hooks';
import { logIn, logOut } from 'src/store/loginReducer';

const styleContainer = {
    "display": "flex",
    "marginBottom": "30px",
    "paddingTop": "10px",
    "border": "1px solid red"
}

const Dashboard: React.FC = () => {
    const dispatch = useAppDispatch();
    isAuthenticated() ? dispatch(logIn()) : dispatch(logOut());
    
    //const navigate = useNavigate();
    //const isLogged = useAppSelector(state => state.login.isLogged); 
    return (
        <Container fluid style={styleContainer}>
                <DashboardContainer />
        </Container>
    );
}

export default Dashboard;
