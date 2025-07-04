/*const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);

module.exports = {
  sequelize,
  models: sequelize.models, // Esto es lo que necesitas para acceder luego como models.User
};*/
const { Sequelize } = require('sequelize');
const setupModels = require('../db/models');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false,
});

setupModels(sequelize);

module.exports = {
  sequelize,
  models: sequelize.models,
};
