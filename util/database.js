const Sequelize = require('sequelize');

const sequelize = new Sequelize('timeattendance', 'sa', '', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3308
});

module.exports = sequelize;
