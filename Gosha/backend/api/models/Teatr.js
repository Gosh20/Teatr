const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const tableName = 'teatrs';

const Teatr = sequelize.define('Teatr', {
  id: {
    type: Sequelize.NUMBER,
    unique: true,
    primaryKey: true,
  },
  shortName: {
    type: Sequelize.STRING,
  },
  chiefPosition: {
    type: Sequelize.STRING,
  },
  chiefName: {
    type: Sequelize.STRING,
  },

  website: {
    type: Sequelize.STRING,
  },
  
}, { tableName });

module.exports = Teatr;
