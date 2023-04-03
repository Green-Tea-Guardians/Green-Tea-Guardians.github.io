const router = require("express").Router();
const {
  models: { Group },
} = require("../db");
const User = require("../db/models/User");

router.get("/", async (req, res, next) => {
  try {
    const groups = await Group.findAll();
    res.json(groups);
  } catch (err) {
    next(err);
  }
});

router.get("/:groupId", async (req, res, next) => {
  try {
    const groupId = await Group.findByPk(req.params.groupId);
    res.json(groupId);
  } catch (err) {
    next(err);
  }
});

router.get("/creator/:creatorId", async (req, res, next) => {
  try {
    const creatorId = parseInt(req.params.creatorId, 10);
    if (isNaN(creatorId)) {
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

router.post("/", async (req, res) => {
  try {
    const { creatorId, ...groupData } = req.body;
    if (!groupData.name || !groupData.ages) {
      return res.status(400).json({ message: "Name and ages are required fields." });
    }

    const group = await Group.create({ ...groupData, creatorId });
    res.status(201).json(group);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create group." });
  }
});

module.exports = router;
