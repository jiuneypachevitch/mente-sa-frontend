import styled from "styled-components";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import theme from 'src/styles/colors';
//import cover from '../../Assets/Images/cover.jpg';

/*export const PageHeader = styled.header`
   display: flex;
   width: 100%;
   height: 300px;
   max-width: 100%;
   max-height: 300px;
   background-image: url(${cover});
   background-repeat: no-repeat;
   background-size: cover;
`*/

export const MyNavbar = styled(Navbar)`
    background-color: ${theme.primary};
`

export const TitleHome = styled.span`
    font-size: 28px;
    font-weight: 500;
    color: ${theme.white};
    
`
export const NavLink = styled(Nav.Link)`
    text-align: center;
    color: ${theme.white};
    font-weight: 500;
    transition: 300;
    margin: 0px 15px;
    &:hover {
        color: ${theme.primaryContrastVariant};
    }
`
export const NavBarCollapse = styled(Navbar.Collapse)`
` 
export const MyNav = styled(Nav)`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    & .nav-link.active {
        color: ${theme.primaryContrast};
    }
`
export const Toggle = styled(Navbar.Toggle)`
    border-color: ${theme.white};
    * { 
        color: ${theme.white};
    }
`
export const Welcome = styled.div`
    display: flex;
    justify-content: flex-start;
    max-width: 250px;
    span {
        color: ${theme.white};
    }
    & .hidden {
        display: none;
    }
` 
