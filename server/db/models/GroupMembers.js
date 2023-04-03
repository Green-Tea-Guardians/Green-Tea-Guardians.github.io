const Sequelize = require('sequelize')
const db = require("../db");

const GroupMembers = db.define("groupMembers", {
  role: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "member",
  },
});

module.exports = GroupMembers;
