//this is the access point for all things database related!
const db = require('./db')
const User = require('./models/User')
const Group = require('./models/Group')
const GroupMembers = require('./models/GroupMembers')

User.hasMany(Group, { as: "groups", foreignKey: "creatorId" });
Group.belongsTo(User, { as: "creator", foreignKey: "creatorId" });
Group.belongsToMany(User, { through: GroupMembers });
User.belongsToMany(Group, { through: GroupMembers });
GroupMembers.belongsTo(User);
GroupMembers.belongsTo(Group); 

module.exports = {
  db,
  models: {
    User,
    Group,
    GroupMembers
  },
}
