import React, { useState, useCallback, FormEvent } from 'react';
import { StyledForm } from "./style";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { routesName } from 'src/utils/routesName';
import theme from 'src/styles/colors';
import { useMutation } from '@tanstack/react-query';
import { fetchSpecialistCreate } from 'src/services/Specialist/service';
import { ISpecialistPropsDto } from 'src/services/Specialist/dtos/specialistProps.dto';

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [ specialist, setSpecialist ] = useState<ISpecialistPropsDto>({
        name: "", 
        email: "",
        password: "",
        confirmpassword: "",
        crp: "", 
        approach: "", 
        phone: "" 
    });

    const { mutate } = useMutation( 
        () => fetchSpecialistCreate({ 
                name: specialist.name, 
                email: specialist.email, 
                password: specialist.password,
                confirmpassword: specialist.confirmpassword,
                crp: specialist.crp, 
                approach: specialist.approach, 
                phone: specialist.phone 
            }), {
            onSuccess: () => {
                console.log("SUCCESS");
                navigate(routesName.home);
            },
            onError: (msg: any) => {
                console.log("ERROR:", msg);
            }
        }
    );
    
    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Object.values(specialist).every(value => value !== "")) {
            console.log("tudo certo");
            mutate();
        }
    }, [specialist, navigate]);

    return (
        <StyledForm onSubmit={handleSubmit}>
            <p>Crie uma conta para começar a utilizar o sistema</p>
            <Form.Control id="name" type="text" onChange={ e => setSpecialist({ ...specialist, name: e.target.value }) } placeholder="Nome" />
            <Form.Control id="email" type="email" onChange={ e => setSpecialist({ ...specialist, email: e.target.value }) } placeholder="E-mail" />
            <Form.Control id="senha" type="password" onChange={ e => setSpecialist({ ...specialist, password: e.target.value }) } placeholder="Senha" />
            <Form.Control id="confirmarsenha" type="password" onChange={ e => setSpecialist({ ...specialist, confirmpassword: e.target.value }) } placeholder="Confirme a senha" />
            <Form.Control id="crp" type="text" onChange={ e => setSpecialist({ ...specialist, crp: e.target.value }) } placeholder="CRP" />
            <Form.Control id="abordagem" type="text" onChange={ e => setSpecialist({ ...specialist, approach: e.target.value }) } placeholder="Abordagem" />
            <Form.Control id="telefone" type="text" onChange={ e => setSpecialist({ ...specialist, phone: e.target.value }) } placeholder="Telefone" />
            <div className="linha">
                <Form.Check type="checkbox" id="terms">
                    <Form.Check.Input type="checkbox"/>
                    <Form.Check.Label>
                    Aceito os <span><strong>termos</strong></span> e <span><strong>políticas de privacidade</strong></span>
                    </Form.Check.Label>
                </Form.Check>
            </div>
            <div className="sign-in">
                <Button type="submit" style={{ backgroundColor: theme.primary, borderColor: theme.primary }}>Cadastrar</Button>
            </div>
            <Link className="sign-up" to={routesName.signIn}>Fazer login</Link>
        </StyledForm>
    );
}

export default SignUp;
