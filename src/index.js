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

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter/>);
*/

ReactDOM.render(
  <AppRouter />, 
  document.getElementById('root')
);
