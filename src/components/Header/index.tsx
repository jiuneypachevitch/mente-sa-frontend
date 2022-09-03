import React from 'react';
import { TitleHome, MyNavbar, MyNav, NavLink, NavBarCollapse, Toggle, Welcome } from "./style";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { routesName } from 'src/utils/routesName';
import { LinkContainer } from 'react-router-bootstrap'
import { isAuthenticated, getUserName, getUserId } from 'src/services/Auth/service';
import { useAppSelector, useAppDispatch } from 'src/hooks';
import { logIn, logOut } from 'src/store/loginReducer';
import { setUserName, setUserId } from 'src/store/userInfoReducer';

const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    isAuthenticated() ? dispatch(logIn()) : dispatch(logOut());
    dispatch(setUserName(getUserName()));
    dispatch(setUserId(getUserId()));
    const logged = useAppSelector(state => state.login.isLogged);
    const userName = useAppSelector(state => state.userInfo.name);
    if (userName !== null) {
        var [firstName, ...other] = JSON.parse(userName).split(" ");
    }
    return (
        <MyNavbar expand="sm">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand><TitleHome>|Mente Sã|</TitleHome></Navbar.Brand>
                </LinkContainer>
                <Welcome> 
                    <span className={ logged ? "" : "hidden"}>Bem vindo(a), {firstName}</span>
                </Welcome>
                <Toggle aria-controls="basic-navbar-nav">
                    <i className="bi bi-list"></i>
                </Toggle>
                <NavBarCollapse id="basic-navbar-nav">
                    <MyNav>
                        { useAppSelector(state => state.login.isLogged) ? 
                            <>
                            <LinkContainer to={`${routesName.dashboard}/${routesName.patients}`} >
                                <NavLink>Pacientes</NavLink>
                            </LinkContainer>  
                            <LinkContainer to={routesName.signOut} >
                                <NavLink>Sair</NavLink>
                            </LinkContainer>  
                            </>
                            :  
                                <>
                                <LinkContainer to={routesName.signIn} >
                                    <NavLink>Entre</NavLink>
                                </LinkContainer>
                                <LinkContainer to={routesName.signUp} >
                                    <NavLink>Cadastre-se</NavLink>
                                </LinkContainer>
                                </> 
                            }
                    </MyNav>    
                </NavBarCollapse>    
            </Container>
        </MyNavbar>
    );
}
                                /*<LinkContainer to={routesName.patientCreate} >
                                    <NavLink>New Paciente</NavLink>
                                </LinkContainer>
                                <LinkContainer to={routesName.patientEdit} >
                                    <NavLink>Edit Pacient</NavLink>
                                </LinkContainer>*/

export default Header;
