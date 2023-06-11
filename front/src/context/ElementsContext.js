import React from 'react';
//Genera contexto de uso para una llamada o funcion. Sirve para que React reconozca llamadas de variables y/o palabras compartidas entre el servicio sin necesidad de reinstanciar.
const ElementsContext = React.createContext();

export default ElementsContext;