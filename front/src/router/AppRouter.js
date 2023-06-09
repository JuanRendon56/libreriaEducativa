import React from 'react';
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Header from '../components/Header';
import AgregarEntrada from '../components/AddElement';
import ListaEntradas from '../components/List';
import useLocalStorage from '../hooks/useLocalStorage';
import EditElement from '../components/EditElement';
import ElementsContext from '../context/ElementsContext';

const AppRouter = () => {
//Se crea una instancia basada en los datos previamente guardados de entrada (En caso de no tener internet)
const [entradas, setEntradas] = useLocalStorage ('entrada', []);

//Redireccionador de paginas web
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          {/* Se da acceso a todas las paginas a las instancias leidas por el generador de contexto*/}
          <ElementsContext.Provider value={{ entradas, setEntradas}}>
            <Routes>
              <Route element={<ListaEntradas/>} path="/" exact={true} />
              <Route element={<AgregarEntrada/>} path="/agregar" />
              <Route element={<EditElement/>} path="/editar/:id"/>
              <Route element={<Navigate to="/" replace/>} path="*"/>
            </Routes>
            </ElementsContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;