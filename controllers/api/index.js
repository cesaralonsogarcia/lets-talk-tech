const router = require('express').Router();

const postsRoutes = require('./posts-routes.js');

const commentRoutes = require('./comment-routes.js');

router.use('/posts', postsRoutes);

router.use('/comment', commentRoutes);

module.exports = router;