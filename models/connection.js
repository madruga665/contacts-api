const mysql = require('mysql2/promise');
require('dotenv').config();

const PASSWORD = process.env.PASSWORD;

const connection = mysql.createPool({
  user: 'root',
  password: PASSWORD,
  host: 'localhost',
  database: 'contacts_db',
});

module.exports = connection;