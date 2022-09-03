import React, { useState } from 'react';
import { SessionCreateEditModal } from "./style";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link, BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routesName } from 'src/utils/routesName';
import theme from 'src/styles/colors';

const styleContainer = {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "minHeight": "500px",
    "marginBottom": "30px",
}
/*
 * Pacientes 
 * Data do agendamento
 * Temas abordados
 * Duracao
 * Status
 * Queixa
 * Status
 * Tipo da sessão
 * */

interface IOperation {
    isEditing?: boolean;
}

const SessionCreateEdit: React.FC<IOperation> = ({isEditing}: IOperation) => {
    const [ show, setShow ] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container style={styleContainer} className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
            <SessionCreateEditModal show={show} onHide={handleClose} > 
                <Modal.Header closeButton>
                    <Modal.Title>{ isEditing ? "Edição" : "Cadastro" } do paciente</Modal.Title>
                </Modal.Header> 
                <Modal.Body>
                    <Form>
                        <p>Informe os dados do paciente</p>
                        <Form.Control id="name" type="text" placeholder="Nome" />
                        <Form.Control id="datanascimento" type="text" placeholder="Data de nascimento (DD/MM/YYYY)" />
                        <Form.Control id="cpf" type="text" placeholder="CPF" />
                        <Form.Select>
                            <option>Gênero</option>
                            <option value="1">Masculino</option>
                            <option value="2">Feminino</option>
                            <option value="3">Não binário</option>
                        </Form.Select>
                        <Form.Control id="endereco" type="text" placeholder="Endereço" />
                        <Form.Control id="telefone" type="text" placeholder="Telefone" />
                        <Form.Control id="email" type="email" placeholder="E-mail" />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>Cancelar</Button>
                    <Button style={{ backgroundColor: theme.primary, borderColor: theme.primary }} onClick={handleClose}>Salvar</Button>
                </Modal.Footer>
            </SessionCreateEditModal>
        </Container>
    );
}

export default SessionCreateEdit;
