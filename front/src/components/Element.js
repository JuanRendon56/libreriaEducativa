import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

//Esquema general de cualquier elemento.
const Element = ({id, titulo, autor, docs, guia, date, handleRemoveElement}) => {
    let navigate = useNavigate();
    return (
    <Card className="entrada">
        <Card.Body>
        {/*Card sive como formato general de presentacion con los datos obtenidos.*/}
        <Card.Title className="entrada-title">{titulo}</Card.Title>
        <div className="entrada-details">
            <div>Autor: {autor}</div>
            <div>Guia:</div>
            <textarea className='text-area-style' rows={3}>{guia}</textarea>
            <div>Documentos: {docs} </div>
            <div>Date: {new Date(date).toDateString()}</div>
        </div>
        {/* Botones dentro de cada tarjeta para eliminar o editar elementos*/}
        <Button variant="primary" onClick={() => navigate(`/editar/${id}`)}>
            Editar
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveElement(id)}>
            Borrar
        </Button>
        </Card.Body>
    </Card>
    );
};

export default Element;