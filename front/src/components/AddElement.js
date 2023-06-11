import React from 'react';
import ElementForm from './ElementForm';
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

//Función para añadir un elemento desde el front al back
const AddElement = () => {
  let navigate = useNavigate();
  const handleOnSubmit = (entrada) => {
    //Se añade entrada al servidor
    Axios.post("http://localhost:3001/agregar", {
      titulo: entrada.titulo, 
      autor: entrada.autor, 
      guia: entrada.guia, 
      docs: 1,
      date: entrada.date
    }).then(() => {
      console.log("Entrada enviada!");
    });
    navigate('/lista');
  };

  return (
    <React.Fragment>
      {/* Envia los para ser leidos por el servidor*/}
      <ElementForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddElement;