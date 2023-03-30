const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/groups', require('./groups'));

console.log('Registered /api/groups route'); // Add this line

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
