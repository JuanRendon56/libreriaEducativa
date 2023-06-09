import React, { useContext} from 'react';
import ElementForm from './ElementForm';
import { useNavigate } from 'react-router-dom';
import ElementsContext from '../context/ElementsContext';
import Axios from 'axios';

const EditElement = () => {
    const { entradas, setEntradas } = useContext(ElementsContext);
    const id = parseInt(sessionStorage.getItem("elementoActual"));
    const elementoEditar = entradas.find(entrada => entrada.id === id);
    let navigate = useNavigate();

    const handleOnSubmit = (entrada) => {
        const elementosFiltrados = entradas.filter((entrada) => entrada.id !== id);
        setEntradas([entrada, ...elementosFiltrados]);
        Axios.put("http://localhost:3001/actualizar", {
            idAct: id,
            tituloAct: entrada.titulo, 
            autorAct: entrada.autor, 
            guiaAct: entrada.guia, 
            docsAct: 1,
            dateAct: entrada.date
        });
        navigate('/');
    };
    
    return (
        <div>
        <ElementForm entrada={elementoEditar} handleOnSubmit={handleOnSubmit} />
        </div>
    );
};

export default EditElement;