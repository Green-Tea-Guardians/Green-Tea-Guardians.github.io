const router = require('express').Router();
const { models: { Group, User }} = require('../db');


// GET all groups
router.get('/', async (req, res, next) => {
  try {
    const groups = await Group.findAll(); // Retrieve all groups
    res.json(groups); // Return the groups as JSON
  } catch (err) {
    next(err); // Pass any errors to the error handler middleware
  }
});

// GET a single group by ID
router.get('/:groupId', async (req, res, next) => {
  try {
    const groupId = await Group.findByPk(req.params.groupId); // Retrieve the group by its ID
    res.json(groupId); // Return the group as JSON
  } catch (err) {
    next(err); // Pass any errors to the error handler middleware
  }
});

// GET all groups created by a particular user
router.get('/creator/:creatorId', async (req, res, next) => {
  try {
    const creatorId = parseInt(req.params.creatorId, 10); // Parse the creator ID as an integer
    if (isNaN(creatorId)) { // Check if the creator ID is valid
      return res.status(400).send("Invalid creatorId"); // Return a 400 error if the ID is invalid
    }

    const groups = await Group.findAll({ // Retrieve all groups created by the user with the specified ID
      where: {
        creatorId: creatorId,
      },
    });

    res.json(groups); // Return the groups as JSON
  } catch (err) {
    next(err); // Pass any errors to the error handler middleware
  }
});

// POST a new group
router.post('/', async (req, res) => {
  try {
    const { creatorId, ...groupData } = req.body; // Extract the creator ID and group data from the request body
    if (!groupData.name || !groupData.ages) { // Check that the name and ages fields are present
      return res.status(400).json({ message: 'Name and ages are required fields.' }); // Return a 400 error if either field is missing
    }
 
    const group = await Group.create({ ...groupData, creatorId }); // Create a new group with the extracted data
    res.status(201).json(group); // Return the new group as JSON
  } catch (error) {
    console.error(error); // Log any errors to the console
    res.status(500).json({ message: 'Failed to create group.' }); // Return a 500 error with a JSON message
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
      include: { model: User, as: 'users' }, // Assuming 'users' is the alias you've used in your many-to-many relationship
    });

    if (!group) {
      return res.status(404).json({ message: `Group with ID ${groupId} not found` });
    }

    res.json(group.users); // Return the members (users) of the group as JSON
  } catch (err) {
    next(err); // Pass any errors to the error handler middleware
  }
});


// POST a user leaving a group
router.post('/:groupId/leave', async (req, res, next) => {
  try {
    const groupId = req.params.groupId; // Get the group ID from the URL parameters
    const userId = req.body.userId; // Get the user ID from the request body

    const group = await Group.findByPk(groupId); // Find the group by its ID
    const user = await User.findByPk(userId); // Find the user by their ID

    await group.removeUser(user); // Remove the user from the group

    res.status(200).json({ message: 'User has left the group' }); // Return a 200 response with a JSON message
  } catch (err) {
    next(err); // Pass any errors to the error handler middleware
  }
});

module.exports = router;
