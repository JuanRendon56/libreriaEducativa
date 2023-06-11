import React, { useContext} from 'react';
import ElementForm from './ElementForm';
import { useNavigate } from 'react-router-dom';
import ElementsContext from '../context/ElementsContext';
import Axios from 'axios';

//Función para editar un elemento preexistente desde el front
const EditElement = () => {
    //Genera el contexto para las entradas
    const { entradas, setEntradas } = useContext(ElementsContext);
    //Convierte en numero el id del usuario guardado
    const id = parseInt(sessionStorage.getItem("elementoActual"));
    //Obtiene como datos la entrada que va a editar a partir de su id existente
    const elementoEditar = entradas.find(entrada => entrada.id === id);
    let navigate = useNavigate();

    const handleOnSubmit = (entrada) => {
        //Añade de regreso el elemento editado a la lista en base a los cambios
        const elementosFiltrados = entradas.filter((entrada) => entrada.id !== id);
        setEntradas([entrada, ...elementosFiltrados]);
        //Envia al servidor el cambio para ser ejecutado
        Axios.put("http://localhost:3001/actualizar", {
            idAct: id,
            tituloAct: entrada.titulo, 
            autorAct: entrada.autor, 
            guiaAct: entrada.guia, 
            docsAct: 1,
            dateAct: entrada.date
        });
        navigate('/lista');
    };
    
    return (
        <div>
        {/* Carga una forma con datos ya existentes basado en el elementoEditar, para enviar la edición al proceso de envio*/}
        <ElementForm entrada={elementoEditar} handleOnSubmit={handleOnSubmit} />
        </div>
    );
};

export default EditElement;