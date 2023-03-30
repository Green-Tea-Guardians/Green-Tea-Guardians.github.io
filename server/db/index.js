//this is the access point for all things database related!
const db = require('./db')
const User = require('./models/User')
const Group = require('./models/Group')

//associations could go here!
// User model
User.hasMany(Group, { as: "groups", foreignKey: "creatorId" });

// Group model
Group.belongsTo(User, { as: "creator", foreignKey: "creatorId" });

module.exports = {
  db,
  models: {
    User,
    Group,
  },
}
