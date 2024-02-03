const Sequelize = require('sequelize');

const sequelize = require('../util/database');


const Cricket = sequelize.define('cricket', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dob: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  birthPlace: {
    type: Sequelize.STRING,
    allowNull: false
  },
  career: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  matches: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  fifties: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  centuries: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  wickets: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  average: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Cricket;