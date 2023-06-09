const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

//Correr server con npm run devStart
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  passwword: 'password',
  database: 'libreriacrud'
});

//Axios conexiones
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());
app.use(cors());

//Funcion CREATE
app.post('/agregar', (req, res) => {
  const titulo = req.body.titulo;
  const autor = req.body.autor;
  const guia = req.body.guia;
  const docs = req.body.docs;
  const date = req.body.date;

  const sqlInsert = "INSERT INTO entradas (titulo, autor, guia, docs, date) VALUES (?,?,?,?,?);";
  db.query(sqlInsert,  [titulo, autor, guia, docs, date], (err, result) => {
    res.send(result);
  });
});

//Funcion READ
app.get('/obtener', (req, res) => {
  const sqlSelect = "SELECT * FROM entradas";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//Funcion UPDATE
app.put('/actualizar', (req, res) => {
  console.log("ENTRADA: ", req.body);
  const idAct = req.body.idAct;
  const tituloAct = req.body.tituloAct;
  const autorAct = req.body.autorAct;
  const guiaAct = req.body.guiaAct;
  const docsAct = req.body.docsAct;
  const dateAct = req.body.dateAct;
  console.log("Recibi: ", idAct, " titulo: ", tituloAct);
  const sqlUpdate = 
    "UPDATE entradas SET titulo = ?, autor = ?, guia = ?, docs = ?, date = ? WHERE id = ?";
  db.query(sqlUpdate, [tituloAct,autorAct,guiaAct,docsAct,dateAct,idAct], (err, result) =>{
    if(err) console.log(err)
  });
});

//Funcion DELETE
app.delete('/eliminar/:id', (req, res) => {
  const idBorrar = req.params.id;
  const sqlDelete = "DELETE FROM entradas WHERE id = ?";
  db.query(sqlDelete, idBorrar, (err, result) =>{
    if(err) console.log(err)
  });
});

app.listen(3001, ()=> {
  console.log("Server Ejecutando");
});