const router = require('express').Router();
const { models: { Group }} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const groups = await Group.findAll();
    res.json(groups);
  } catch (err) {
    next(err);
  }
});

router.get('/:groupId', async (req, res, next) => {
  try {
    const groupId = await Group.findByPk(req.params.groupId);
    res.json(groupId);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const { creatorId, ...groupData } = req.body;
    const group = await Group.create({ ...groupData, creatorId });
    res.status(201).json(group);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create group.' });
  }
});


router.get('/creator/:creatorId', async (req, res, next) => {
  try {
    const groups = await Group.findAll({
      where: {
        creatorId: req.params.creatorId,
      },
    });
    res.json(groups);
  } catch (err) {
    next(err);
  }
});


router.post('/', async (req, res, next) => {
  try {
    const { name, description, location, size, public, ages, userId } = req.body;

    // Retrieve the user from the database using the user ID
    const user = await User.findByPk(userId);

    // If the user does not exist, return an error
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Create a new group instance using the request body and user ID
    const group = await Group.create({
      name,
      description,
      location,
      size,
      public,
      ages,
      creatorId: userId
    });

    return res.status(201).json(group);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
