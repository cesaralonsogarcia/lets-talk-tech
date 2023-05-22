const router = require('express').Router();

const postsRoutes = require('./posts-routes');

const commentRoutes = require('./comment-routes');

const userRoutes = require('./user-routes');

router.use('/posts', postsRoutes);

router.use('/comment', commentRoutes);

router.use('/users', userRoutes);

module.exports = router;