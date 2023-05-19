//Importaciones
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
//Formulario de entradas

//Definicion de estado 'entrada'
const ElementForm = (props) => {
  const [entrada, setEntrada] = useState(() => {
    return{
      titulo: props.entrada ? props.entrada.titulo : '',
      autor: props.entrada ? props.entrada.autor : '',
      guia: props.entrada ? props.entrada.guia : '',
      docs: props.entrada ? props.entrada.docs : '',
      date: props.entrada ? props.entrada.date : ''
    };
  });
  //Definicion de estado 'errorMsg' y elementos dentro de 'entrada'
  const [errorMsg, setErrorMsg] = useState('');
  const { titulo, autor, docs, guia } = entrada;

  //Entrada de datos
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [titulo, autor, docs, guia];
    let errorMsg = '';
    //Filtro de entradas NO vacias
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });
    //Entradas validas
    if (allFieldsFilled) {
      const entrada = {
        id: uuidv4(),
        titulo,
        autor,
        docs,
        guia,
        date: new Date()
      };
      props.handleOnSubmit(entrada);
    } else {
      errorMsg = 'No dejes espacios en blanco';
    }
    setErrorMsg(errorMsg);
  };

  //Cambio de datos basado en evento
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      default:
        setEntrada((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Titulo de guia</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="titulo"
            value={titulo}
            placeholder="Ingresa un titulo"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="autor">
          <Form.Label>Autor de la guia</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="autor"
            value={autor}
            placeholder="Ingresa tu nombre"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="guia">
          <Form.Label>Guia de pasos</Form.Label>
          <div>
            <textarea 
            className='input-control' 
            type="text" 
            name="guia"
            value={guia}
            placeholder="Ingresa los pasos de tu guia (Se recomienda dar Enter por cada paso)"
            onChange={handleInputChange}
            />
          </div>
        </Form.Group>
        <Form.Group controlId="docs">
          <Form.Label>Documentos de apoyo</Form.Label>
          <Form.Control
            className="input-control"
            type="file"
            name="docs"
            multiple
            placeholder="Ingresa las imagenes que desees"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default ElementForm;