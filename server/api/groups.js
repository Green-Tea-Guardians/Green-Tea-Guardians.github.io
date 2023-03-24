const router = require('express').Router()
const { models: { Group }} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const groups = await Group.findAll({
    })
    res.json(groups)
  } catch (err) {
    next(err)
  }
})

router.get('/:groupId', async (req, res, next) => {
    try {
        const groupId = await Group.findByPk(req.params.groupId)
        res.json(groupId)
    } catch (err) {
        next(err)
    }
})

module.exports = router