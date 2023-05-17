import React from 'react';
import _ from 'lodash';
import Entrada from './Element';

const List = ({ entradas, setEntradas }) => {
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