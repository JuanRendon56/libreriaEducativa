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
