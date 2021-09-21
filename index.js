const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./models/connection');

const app = express();

app.use(bodyParser.json());

const PORT = 3001;

app.get('/contacts', async (_req, res) => {
  const contacts = await connection.execute('SELECT * FROM contacts');
  res.status(200).json(contacts);
});

app.listen(PORT, () => {
  console.log(`App rodando na porta ${PORT}`);
});
