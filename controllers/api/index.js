const router = require('express').Router();

const postsRoutes = require('./posts-routes.js');

router.use('/posts', postsRoutes);

module.exports = router;