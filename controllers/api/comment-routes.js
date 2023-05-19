const router = require('express').Router();
const Comment = require('../../models/Comment');

// Route to create/add a new post
router.post('/', async (req, res) => {
  try { 
    const commentData = await Comment.create({
    content: req.body.content,
    username: req.body.username,
    date: req.body.date,
    post_id: req.body.post_id,
  });
  // If the post is successfully created, the new response will be returned as json
  res.status(200).json(commentData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;
