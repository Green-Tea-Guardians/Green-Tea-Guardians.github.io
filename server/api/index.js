const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users')); 
router.use('/groups', require('./groups'));



// Default error handling middleware
router.use((req, res, next) => {
  const error = new Error('Not Found'); 
  error.status = 404; // Set the error status to 404 (Not Found)
  next(error); // Pass the error to the error handler middleware
});
