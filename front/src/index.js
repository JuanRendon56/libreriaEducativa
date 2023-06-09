/*
Proyecto basado en el tutorial de
Yogesh Chavan, 14 de Abril del 2021
https://www.freecodecamp.org/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/
Editado por: Juan Manuel Rendón García A01731524
*/

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

//Controlador de rutas y dominios por parte de React. El proyecto se ejecuta constantemente bajo React manejado por el componente root
ReactDOM.render(
  <AppRouter />, 
  document.getElementById('root')
);
