const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  passwword: 'password',
  database: 'libreriacrud'
});

app.get('/', (req, res) => {
  const sqlInsert = "INSERT INTO entradas (titulo, autor, guia, docs, date) VALUES ('TEST2', 'Juan', 'MIDMAIDAMDIASMIMDAIDAIMD', 0, 4);";
  db.query(sqlInsert, (err, result) => {
    res.send("Mande datos!");
  })
});

app.listen(3001, ()=> {
  console.log("Server Ejecutando");
});