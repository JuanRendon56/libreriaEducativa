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

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());
app.use(cors());

app.get('/obtener', (req, res) => {
  const sqlSelect = "SELECT * FROM entradas";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  })
});

app.post('/agregar', (req, res) => {
  const titulo = req.body.titulo;
  const autor = req.body.autor;
  const guia = req.body.guia;
  const docs = req.body.docs;
  const date = req.body.date;

  const sqlInsert = "INSERT INTO entradas (titulo, autor, guia, docs, date) VALUES (?,?,?,?,?);";
  db.query(sqlInsert,  [titulo, autor, guia, docs, date], (err, result) => {
    res.send(result);
  })
});

app.listen(3001, ()=> {
  console.log("Server Ejecutando");
});