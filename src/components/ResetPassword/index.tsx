import React from 'react';
import { ResetPasswordCards } from "./style";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { routesName } from 'src/utils/routesName';
import theme from 'src/styles/colors';

const styleContainer = {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "minHeight": "500px",
    "height": "50vh",
}

const ResetPassword: React.FC = () => {
    return (
        <Container style={styleContainer} className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
            <ResetPasswordCards> 
                <h3>Recuperação do accesso</h3>
                <Form>
                    <p>Informe o e-mail utilizado no cadastro</p>
                    <Form.Control id="email" type="email" placeholder="E-mail" />
                    <div className="submit">
                        <Button type="submit" style={{ backgroundColor: theme.primary, borderColor: theme.primary }}>Recuperar</Button>
                    </div>
                    <Link className="sign-up" to={routesName.signUp}>Criar conta</Link>
                </Form>
            </ResetPasswordCards>
            </Container>
    );
}

export default ResetPassword;
