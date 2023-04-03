const Sequelize = require('sequelize')
const db = require('../db')


const Group = db.define('groups', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  location: {
    type: Sequelize.STRING
  },
  size: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  public: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  ages: {
    type: Sequelize.STRING,
    allowNull: false
  },
  creatorId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Group