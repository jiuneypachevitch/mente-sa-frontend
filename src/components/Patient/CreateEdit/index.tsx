import React, { useState } from 'react';
import { PatientCreateEditModal } from "./style";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import theme from 'src/styles/colors';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { IPatientPropsDto } from 'src/services/Patient/dtos/patientProps.dto';
import { fetchPatientCreate } from 'src/services/Patient/service';
import { getUserId } from 'src/services/Auth/service'; 
import { routesName } from 'src/utils/routesName';
/*const styleContainer = {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "minHeight": "500px",
    "marginBottom": "30px",
}*/

type CloseModal = () => void;

interface IModalProps {
    close: CloseModal;
    isEditing: boolean;
    isOpen: boolean;
}

const PatientCreateEdit: React.FC<IModalProps> = ({ close, isEditing, isOpen }: IModalProps) => {
    const navigate = useNavigate();
    const [ patient, setPatient ] = useState<IPatientPropsDto>({
        name: "", 
        email: "",
        birthday: "",
        cpf: "",
        gender: "", 
        address: "", 
        city: "",
        state: "",
        phone: "" 
    });

    const specialistId = JSON.parse( getUserId() !== null ? getUserId() as string : "" );

    const { mutate } = useMutation( 
        () => fetchPatientCreate({
                specialistid: specialistId,
                name: patient.name, 
                email: patient.email, 
                birthday: patient.birthday,
                cpf: patient.cpf,
                gender: patient.gender, 
                address: patient.address, 
                city: patient.city, 
                state: patient.state, 
                phone: patient.phone, 
            }), {
            onSuccess: () => {
                console.log("SUCCESS");
                Object.keys(patient).map(k => k = "");
                close();
                navigate(`/${routesName.dashboard}/${routesName.patients}`);
            },
            onError: (msg: any) => {
                close();
                console.log("ERROR:", msg);
            }
        }
    );
    
    const handleSubmit = () => {

        if (Object.values(patient).every(value => value !== "")) {
            console.log("tudo certo");
            mutate();
        }
    };

    return (
        <PatientCreateEditModal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>{ isEditing ? "Edição" : "Cadastro" } do paciente</Modal.Title>
            </Modal.Header> 
            <Modal.Body>
                <Form>
                    <p>Informe os dados do paciente</p>
                    <Form.Control id="name" type="text" onChange={ e => setPatient({ ...patient, name: e.target.value }) } placeholder="Nome" />
                    <Form.Control id="email" type="email" onChange={ e => setPatient({ ...patient, email: e.target.value }) } placeholder="E-mail" />
                    <Form.Control id="birthday" type="text" onChange={ e => setPatient({ ...patient, birthday: e.target.value }) } placeholder="Data de nascimento (DD/MM/YYYY)" />
                    <Form.Control id="cpf" type="text" onChange={ e => setPatient({ ...patient, cpf: e.target.value }) } placeholder="CPF" />
                    <Form.Select id="gender"onChange={ e => setPatient({ ...patient, gender: e.target.value }) }  >
                        <option>Gênero</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="nao_binario">Não binário</option>
                        <option value="nao_informado">Não informado</option>
                    </Form.Select>
                    <Form.Control id="address" type="text" onChange={ e => setPatient({ ...patient, address: e.target.value }) } placeholder="Endereço" />
                    <Form.Control id="city" type="text" onChange={ e => setPatient({ ...patient, city: e.target.value }) } placeholder="Cidade" />
                    <Form.Control id="state" type="text" onChange={ e => setPatient({ ...patient, state: e.target.value }) } placeholder="Estado" />
                    <Form.Control id="phone" type="text" onChange={ e => setPatient({ ...patient, phone: e.target.value }) } placeholder="Telefone" />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                    <Button variant="danger" onClick={close}>Cancelar</Button>
                    <Button style={{ backgroundColor: theme.primary, borderColor: theme.primary }} onClick={handleSubmit}>Salvar</Button>
            </Modal.Footer>
        </PatientCreateEditModal>
    );
}

export default PatientCreateEdit;
