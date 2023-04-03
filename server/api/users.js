const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

// GET all users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({ 
      attributes: ['id', 'username'] 
    });
    res.json(users);
  } catch (err) {
    next(err); 
  }
});

// GET a single user by username
router.get('/:username', async (req, res, next) => {
  try {
    const user = await User.findOne({ 
      where: {
        username: req.params.username, 
      },
      attributes: ['id', 'username'], 
    });
    res.json(user); // Return the user as JSON
  } catch (err) {
    next(err); // Pass any errors to the error handler middleware
  }
});

// GET a single user by id
router.get('/id/:id', async (req, res, next) => {
  try {
    const user = await User.findOne({ 
      where: {
        id: req.params.id, // Find the user by their id, which is passed as a URL parameter
      },
      attributes: ['id', 'username'], 
    });
    res.json(user); // Return the user as JSON
  } catch (err) {
    next(err); // Pass any errors to the error handler middleware
  }
});
