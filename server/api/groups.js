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

module.exports = router;
