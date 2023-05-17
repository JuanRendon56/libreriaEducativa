import React from 'react';
import ElementForm from './ElementForm';
import { useParams, useNavigate } from 'react-router-dom';

const EditElement = ({ entradas, setEntradas }) => {

    const { id } = useParams();
    const elementoEditar = entradas.find((entrada) => entrada.id === id);
    let navigate = useNavigate();

    const handleOnSubmit = (entrada) => {
        const elementosFiltrados = entradas.filter((entrada) => entrada.id !== id);
        setEntradas([entrada, ...elementosFiltrados]);
        navigate('/');
    };
    
    return (
        <div>
        <ElementForm entrada={elementoEditar} handleOnSubmit={handleOnSubmit} />
        </div>
    );
};

export default EditElement;