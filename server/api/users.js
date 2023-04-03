const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

// GET all users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({ // Retrieve all users from the database
      attributes: ['id', 'username'] // Include only the 'id' and 'username' fields in the returned data
    });
    res.json(users); // Return the users as JSON
  } catch (err) {
    next(err); // Pass any errors to the error handler middleware
  }
});

// GET a single user by username
router.get('/:username', async (req, res, next) => {
  try {
    const user = await User.findOne({ // Retrieve a user with the given username from the database
      where: {
        username: req.params.username, // Find the user by their username, which is passed as a URL parameter
      },
      attributes: ['id', 'username'], // Include only the 'id' field in the returned data
    });
    res.json(user); // Return the user as JSON
  } catch (err) {
    next(err); // Pass any errors to the error handler middleware
  }
});

// GET a single user by id
router.get('/id/:id', async (req, res, next) => {
  try {
    const user = await User.findOne({ // Retrieve a user with the given id from the database
      where: {
        id: req.params.id, // Find the user by their id, which is passed as a URL parameter
      },
      attributes: ['id', 'username'], // Include only the 'id' and 'username' fields in the returned data
    });
    res.json(user); // Return the user as JSON
  } catch (err) {
    next(err); // Pass any errors to the error handler middleware
  }
});