import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import AgregarEntrada from '../components/AddElement';
import ListaEntradas from '../components/List';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route element={<ListaEntradas/>} path="/" exact={true} />
            <Route element={<AgregarEntrada/>} path="/agregar" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;