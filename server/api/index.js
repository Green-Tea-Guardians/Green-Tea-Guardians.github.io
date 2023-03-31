const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users')); // Mount the '/users' sub-router
router.use('/groups', require('./groups')); // Mount the '/groups' sub-router

// Default error handling middleware
router.use((req, res, next) => {
  const error = new Error('Not Found'); // Create a new Error object with a 'Not Found' message
  error.status = 404; // Set the error status to 404 (Not Found)
  next(error); // Pass the error to the error handler middleware
});
