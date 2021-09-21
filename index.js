const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const PORT = '3001';

app.get('/contacts', () => 'contacts');

app.listen(PORT, () => {
  console.log(`App rodando na porta ${PORT}`);
});
