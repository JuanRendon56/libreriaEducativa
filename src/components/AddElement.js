import React from 'react';
import ElementForm from './ElementForm';
import { useNavigate } from 'react-router-dom';

const AddElement = ({entradas, setEntradas}) => {
  let navigate = useNavigate();
  const handleOnSubmit = (entrada) => {
    //Se añade entrada al inicio de la lista (Se puede editar para poner hasta abajo)
    setEntradas([entrada, ...entradas]);
    navigate('/');
  };

  return (
    <React.Fragment>
      <ElementForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddElement;