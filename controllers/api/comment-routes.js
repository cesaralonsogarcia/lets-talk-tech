const router = require('express').Router();
const Comment = require('../../models/Comment');

// Route to create/add a new post
router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const commentData = await Comment.create({
      ...req.body,
      date: new Date(),
      user_id: req.session.user_id,
      post_id: req.session.post_id,
  });
  console.log(commentData);
  // If the post is successfully created, the new response will be returned as json
  res.status(200).json(commentData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;
