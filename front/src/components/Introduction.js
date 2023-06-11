import React from 'react';

//Pagina introductioria
const Introduction = () => {
  return (
    <header>
      <h2>Bienvenido</h2>
      <div className='intro-div' />
      <p className='intro-text'>
        Esta es tu libreria comunitaria de acceso publico. Por esta pagina es que podras visualizar otras 
      </p>
      <p className='intro-text'>
        guias y recomendaciones hechas por otros usuarios. Simplemente haz click en la barra superior
      </p>
      <p className='intro-text'>
        para moverte entre la lista de entradas actuales o si deseas agregar una entrada!
      </p>
      <div className='intro-div' />
      <p className='intro-text'>
        Recuerda que eres capaz de editar tus entradas o eliminar una entrada que ya no consideres relevante o actualizada. 
      </p>
    </header>
  );
};

export default Introduction;