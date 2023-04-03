const router = require('express').Router();
const { models: { Group, User }} = require('../db');


// GET all groups
router.get('/', async (req, res, next) => {
  try {
    const groups = await Group.findAll(); 
    res.json(groups); 
  } catch (err) {
    next(err);
  }
});

// GET a single group by ID
router.get('/:groupId', async (req, res, next) => {
  try {
    const groupId = await Group.findByPk(req.params.groupId); 
    res.json(groupId); 
  } catch (err) {
    next(err); // Pass any errors to the error handler middleware
  }
});

// GET all groups created by a particular user
router.get('/creator/:creatorId', async (req, res, next) => {
  try {
    const creatorId = parseInt(req.params.creatorId, 10);
    if (isNaN(creatorId)) { // Check if the creator ID is valid
      return res.status(400).send("Invalid creatorId");
    }

    const groups = await Group.findAll({ 
      where: {
        creatorId: creatorId,
      },
    });

    res.json(groups); 
  } catch (err) {
    next(err); 
  }
});

// POST a new group
router.post('/', async (req, res) => {
  try {
    const { creatorId, ...groupData } = req.body; 
    if (!groupData.name || !groupData.ages) { 
      return res.status(400).json({ message: 'Name and ages are required fields.' }); 
    }
 
    const group = await Group.create({ ...groupData, creatorId }); 
    res.status(201).json(group); 
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: 'Failed to create group.' }); 
  }
 });

 router.post('/:groupId/join', async (req, res, next) => {
  try {
    const groupId = req.params.groupId;
    const userId = req.body.userId;

    const group = await Group.findByPk(groupId);
    const user = await User.findByPk(userId);

    if (!group) {
      return res.status(404).json({ message: `Group with ID ${groupId} not found` });
    }

    if (!user) {
      return res.status(404).json({ message: `User with ID ${userId} not found` });
    }

    await group.addUser(user);
    const updatedGroup = await Group.findByPk(groupId, {
      include: { model: User, as: 'users' },
    });

    res.status(200).json({ message: 'User has joined the group', group: updatedGroup });
  } catch (err) {
    next(err);
  }
});

// GET all members of a specific group
router.get('/:groupId/members', async (req, res, next) => {
  try {
    const groupId = req.params.groupId;
    const group = await Group.findByPk(groupId, {
      include: { model: User, as: 'users' }, 
    });

    if (!group) {
      return res.status(404).json({ message: `Group with ID ${groupId} not found` });
    }

    res.json(group.users);
  } catch (err) {
    next(err);
  }
});


// POST a user leaving a group
router.post('/:groupId/leave', async (req, res, next) => {
  try {
    const groupId = req.params.groupId; 
    const userId = req.body.userId; 

    const group = await Group.findByPk(groupId); 
    const user = await User.findByPk(userId); 

    await group.removeUser(user);

    res.status(200).json({ message: 'User has left the group' }); 
  } catch (err) {
    next(err);
  }
});

module.exports = router;
