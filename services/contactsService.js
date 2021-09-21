const contactsModel = require('../models/contactsModel');

const getAll = async () => {
  const contacts = await contactsModel.getAll();
  return { status: 200, data: contacts };
};

module.exports = {
  getAll,
};
