const router = require('express').Router();

const userRoutes = require('./userROute');
const postRoutes = require('./postRoute');
const commentRoutes = require('./commentROute');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;