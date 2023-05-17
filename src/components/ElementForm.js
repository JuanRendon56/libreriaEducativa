//Importaciones
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
//Formulario de entradas

//Definicion de estado 'entrada'
const ElementForm = (props) => {
  const [entrada, setEntrada] = useState({
    titulo: props.entrada ? props.entrada.titulo : '',
    author: props.entrada ? props.entrada.author : '',
    quantity: props.entrada ? props.entrada.quantity : '',
    price: props.entrada ? props.entrada.price : '',
    date: props.entrada ? props.entrada.date : ''
  });
  //Definicion de estado 'errorMsg' y elementos dentro de 'entrada'
  const [errorMsg, setErrorMsg] = useState('');
  const { titulo, author, price, quantity } = entrada;

  //Entrada de datos
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [titulo, author, price, quantity];
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
        author,
        price,
        quantity,
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
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setEntrada((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setEntrada((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
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
        <Form.Group controlId="author">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of book"
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