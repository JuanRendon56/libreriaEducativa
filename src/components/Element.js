import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Element = ({
    id,
    titulo,
    autor,
    docs,
    guia,
    date,
    handleRemoveElement
    }) => {
        let navigate = useNavigate();
        return (
        <Card style={{ width: 'auto', height: 'auto' }} className="entrada">
            <Card.Body>
            <Card.Title className="entrada-titulo">{titulo}</Card.Title>
            <div className="entrada-detalle">
                <div>Autor: {autor}</div>
                <div>Guia: {guia} </div>
                <div>Documentos: {docs} </div>
                <div>Date: {new Date(date).toDateString()}</div>
            </div>
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