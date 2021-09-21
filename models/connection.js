const mysql = require('mysql2/promise');
require('dotenv').config();

const { PASSWORD } = process.env;

const connection = mysql.createPool({
  user: 'madruga665',
  password: PASSWORD,
  host: 'localhost',
  database: 'contacts_db',
});

module.exports = connection;
