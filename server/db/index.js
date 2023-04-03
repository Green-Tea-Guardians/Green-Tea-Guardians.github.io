//this is the access point for all things database related!
const db = require('./db')
const User = require('./models/User')
const Group = require('./models/Group')
const GroupMembers = require('./models/Members')

User.hasMany(Group, { as: "groups", foreignKey: "creatorId" });
Group.belongsTo(User, { as: "creator", foreignKey: "creatorId" });
User.belongsToMany(Group, { through: GroupMembers });
Group.belongsToMany(User, { through: GroupMembers });

module.exports = {
  db,
  models: {
    User,
    Group,
    GroupMembers
  },
}
