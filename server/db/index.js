//this is the access point for all things database related!
const db = require('./db')
const User = require('./models/User')
const Group = require('./models/Group')


User.hasMany(Group, { as: "groups", foreignKey: "creatorId" });
Group.belongsTo(User, { as: "creator", foreignKey: "creatorId" });

module.exports = {
  db,
  models: {
    User,
    Group,
  },
}
