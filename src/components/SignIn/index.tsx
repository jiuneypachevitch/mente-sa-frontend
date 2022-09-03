import React, { useState, useCallback, FormEvent } from 'react';
import { StyledForm } from "./style";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { routesName } from 'src/utils/routesName';
import { fetchUserLogin, ILoginProps } from 'src/services/Auth/service';
import theme from 'src/styles/colors';
import { RootState } from 'src/store';
import { logIn, logOut } from 'src/store/loginReducer';
import { setUserName, setUserId } from 'src/store/userInfoReducer';
import { useAppSelector, useAppDispatch } from 'src/hooks';

const SignInForm: React.FC = () => {
    const navigate = useNavigate();
    const [ credentials, setCredentials ] = useState<ILoginProps>({"email": "", password: ""});
    
    const dispatch = useAppDispatch();

    const { mutate } = useMutation( 
        (data) => fetchUserLogin({ email: credentials.email, password: credentials.password }), {
            onSuccess: (data) => {
                console.log("SUCCESS");
                dispatch(logIn());
                console.log("data:", data);
                dispatch(setUserName(data.user.name));
                dispatch(setUserId(data.user.id));
                navigate(`/${routesName.dashboard}`);
            },
            onError: (msg: any) => {
                console.log("ERROR:", msg);
                dispatch(logOut());
            }
        }
    );
    
    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (credentials.email !== '' && credentials.password !== '') {
            mutate();
        }
    }, [credentials, navigate]);

    return (
        <StyledForm onSubmit={handleSubmit}>
            <p>Informe seus dados de acesso </p>
            <Form.Control id="email" type="email" onChange={ e => setCredentials({ ...credentials, email: e.target.value }) } placeholder="E-mail" />
            <Form.Control id="password" type="password"  onChange={ e => setCredentials({ ...credentials, password: e.target.value }) } placeholder="Senha" />
            <div className="linha">
                <Form.Check type="checkbox" id="remember-me" label="Lembrar usuário"/>
                <Link to={routesName.resetPassword}>Esqueci minha senha</Link>
            </div>
            <div className="sign-in">
                <Button type="submit" style={{ backgroundColor: theme.primary, borderColor: theme.primary }}>Entrar</Button>
            </div>
            <Link className="sign-up" to={routesName.signUp}>Criar conta</Link>
        </StyledForm>
    );
}

export default SignInForm;
