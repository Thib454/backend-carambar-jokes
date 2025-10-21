const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './carambar.sqlite', // base locale
});

module.exports = sequelize;
