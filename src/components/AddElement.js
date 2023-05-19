import React, { useContext} from 'react';
import ElementForm from './ElementForm';
import { useNavigate } from 'react-router-dom';
import ElementsContext from '../context/ElementsContext';

const AddElement = () => {
  let navigate = useNavigate();
  const { entradas, setEntradas } = useContext(ElementsContext);
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