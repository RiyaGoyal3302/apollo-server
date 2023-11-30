const mysql = require('mysql2');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Riya@3302',
  database: 'alertcenter',
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Connected to database');
});

module.exports = connection;
