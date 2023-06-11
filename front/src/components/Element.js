import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

//Esquema general de cualquier elemento.
const Element = ({id, titulo, autor, docs, guia, date, handleRemoveElement}) => {
    let navigate = useNavigate();
    //Al momento de dar click al boton Editar, se genera una copia del id del usuario actual. Para ser reutilizado por la edicion
    function editClick () {
        navigate(`/editar/${id}`);
        sessionStorage.setItem( "elementoActual", id);
    }

    return (
    <Card className="entrada">
        <Card.Body>
        {/*Card sive como formato general de presentacion con los datos obtenidos.*/}
        <Card.Title className="entrada-title">{titulo}</Card.Title>
        <div className="entrada-details">
            <div>Autor: {autor}</div>
            <div>Guía:</div>
            <textarea className='text-area-style' rows={3}>{guia}</textarea>
            <div>Documentos: {docs} </div>
            <div>Fecha: {new Date(date).toDateString()}</div>
        </div>
        {/* Botones dentro de cada tarjeta para eliminar o editar elementos*/}
        <Button variant="primary" onClick={editClick}>
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