const contactsSevice = require('../services/contactsService');

const getAll = async (_req, res) => {
  const { status, data } = await contactsSevice.getAll();
  res.status(status).json(data[0]);
};

module.exports = {
  getAll,
};
