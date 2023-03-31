const router = require('express').Router();
const { models: { Group, User, GroupMembers }} = require('../db');


// POST a new group member
router.post('/', async (req, res, next) => {
    try {
      const { groupId, userId, role } = req.body;
  
      // Check if user and group exist
      const user = await User.findByPk(userId);
      const group = await Group.findByPk(groupId);
  
      if (!user || !group) {
        return res.status(404).json({ message: "User or group not found." });
      }
  
      // Add the user to the group
      const newGroupMember = await GroupMembers.create({ groupId, userId, role });
  
      res.json(newGroupMember);
    } catch (err) {
      next(err);
    }
  }); 

// GET all group members
router.get('/', async (req, res, next) => {
    try {
      const groupMembers = await GroupMembers.findAll();
      res.json(groupMembers);
    } catch (err) {
      next(err);
    }
  }
);

