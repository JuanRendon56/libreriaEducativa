const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database');
});

connection.query('SELECT * FROM your_table', (err, results) => {
  if (err) {
    console.error('Error executing the query: ', err);
    return;
  }
  console.log('Query results: ', results);
});

connection.end((err) => {
  if (err) {
    console.error('Error closing the database connection: ', err);
    return;
  }
  console.log('Connection closed');
});