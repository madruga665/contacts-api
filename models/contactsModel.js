const connection = require('./connection');

const getAll = async () => {
  const contacts = await connection.execute('SELECT * FROM contacts');
  return contacts;
};

module.exports = {
  getAll,
};
