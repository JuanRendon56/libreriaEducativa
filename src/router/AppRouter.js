import React from 'react';
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Header from '../components/Header';
import AgregarEntrada from '../components/AddElement';
import ListaEntradas from '../components/List';
import useLocalStorage from '../hooks/useLocalStorage';
import EditElement from '../components/EditElement';

const AppRouter = () => {
const [entradas, setEntradas] = useLocalStorage ('entrada', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route element={<ListaEntradas entradas={entradas} setEntradas={setEntradas} />} path="/" exact={true} />
            <Route element={<AgregarEntrada entradas={entradas} setEntradas={setEntradas}/>} path="/agregar" />
            <Route element={<EditElement entradas={entradas} setEntradas={setEntradas}/>} path="/editar/:id"/>
            <Route element={<Navigate to="/" replace/>} path="*"/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;