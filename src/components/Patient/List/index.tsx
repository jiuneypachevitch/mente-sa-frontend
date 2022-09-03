import React, { useState } from 'react';
import { Container } from "./style";
import theme from 'src/styles/colors';
import Button from 'react-bootstrap/Button';
import PatientCreateEdit from 'src/components/Patient/CreateEdit';

const PatientList: React.FC = () => {
    const [ showCreatePatient, setShowCreatePatient ] = useState(false);
    //const [ showEditPatient, setShowEditPatient ] = useState(false);
    // handle to open and close create patient form
    const handleNewPatient = () => setShowCreatePatient(true);
    // handle to open and close edit patient form
    //const handleEditPatient = () => setShowEditPatient(true);
    //const handleCloseEditForm = () => setShowEditPatient(false);
    const closeModal = () => { setShowCreatePatient(false) }
    return (
        <Container>
            <div className="header">
                <h5>Todos os pacientes</h5>
                <Button onClick={handleNewPatient} style={{ backgroundColor: theme.primary, borderColor: theme.primary }}>Novo paciente</Button>
            </div>
            <PatientCreateEdit close={closeModal} isEditing={false} isOpen={showCreatePatient} /> 

        </Container>
    );
}

export default PatientList;
