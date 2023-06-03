import ElementsContext from '../context/ElementsContext';
import React, { useContext} from 'react';
import _ from 'lodash';
import Entrada from './Element';
import Axios from 'axios';

const List = () => {
  const { entradas, setEntradas} = useContext(ElementsContext);
  //Obtiene entradas de la base de datos
  Axios.get("http://localhost:3001/obtener").then((response)=> {
      setEntradas(response.data);
  }); 

  //Elimina elementos cuyo id no sea igual al registro
  const handleRemoveElement = (id) => {
    setEntradas(entradas.filter((entrada) => entrada.id !== id));
  };
 
  return (
    <React.Fragment>
      <div className="entrada-lista">
        {!_.isEmpty(entradas) ? (
          entradas.map((entrada) => (
            <Entrada key={entrada.id} {...entrada} handleRemoveElement={handleRemoveElement} />
          ))
        ) : (
          <p className="message">No hay entradas. ¡Porfavor añade tu guia!</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default List;