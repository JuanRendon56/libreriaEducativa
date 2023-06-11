import ElementsContext from '../context/ElementsContext';
import React, { useContext} from 'react';
import _ from 'lodash';
import Entrada from './Element';
import Axios from 'axios';

const List = () => {
  //Usa como referencia los elementos previamente creados/guardados
  const { entradas, setEntradas} = useContext(ElementsContext);

  //Obtiene entradas de la base de datos, insertando la información recibida en setEntradas
  Axios.get("http://localhost:3001/obtener").then((response)=> {
      setEntradas(response.data);
  }); 

  //Elimina elementos cuyo id no sea igual al registro
  const handleRemoveElement = (id) => {
    Axios.delete(`http://localhost:3001/eliminar/${id}`)
  };
 
  return (
    <React.Fragment>
      <div className="entrada-lista">
        {/* Si existen datos, se crea una lista ordenada (base ID) de las entradas. De lo contrario, un mensaje introductorio*/}
        {!_.isEmpty(entradas) ? (
          entradas.map((entrada) => (
            <Entrada key={entrada.id} {...entrada} handleRemoveElement={handleRemoveElement}/>
          ))
        ) : (
          <p className="message">No hay entradas. ¡Porfavor añade tu guia!</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default List;