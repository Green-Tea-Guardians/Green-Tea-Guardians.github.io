//this is the access point for all things database related!
const db = require('./db')
const User = require('./models/User')
const Group = require('./models/Group')

//associations could go here!
User.hasMany(Group, { as: 'groups', foreignKey: 'creatorId' });
Group.belongsTo(User, { as: 'creator' });

module.exports = {
  db,
  models: {
    User,
    Group,
  },
}
