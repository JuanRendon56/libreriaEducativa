import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Libreria Educativa</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Lista de entradas
        </NavLink>
        <NavLink to="/agregar" className="link" activeClassName="active">
          Añadir entrada
        </NavLink>
      </div>
    </header>
  );
};

export default Header;