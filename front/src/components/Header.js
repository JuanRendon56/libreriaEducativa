import React from 'react';
import { NavLink } from 'react-router-dom';

//Barra superior en todas las paginas para redireccionar.
const Header = () => {
  return (
    <header>
      <h1>Aprendizaje360°</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Inicio
        </NavLink>
        <NavLink to="/lista" className="link" activeClassName="active" exact>
          Lista de entradas
        </NavLink>
        <NavLink to="/agregar" className="link" activeClassName="active">
          Añadir entrada
        </NavLink>
      </div>
      <hr />
    </header>
  );
};

export default Header;