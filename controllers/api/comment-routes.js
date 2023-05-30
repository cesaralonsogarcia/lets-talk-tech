const router = require("express").Router();
const Comment = require("../../models/Comment");

// Api route /api/comment

// Route to add a new comment
router.post("/", async (req, res) => {
  try {
    const commentData = await Comment.create({
      ...req.body,
      date: Date.now(),
      user_id: req.session.user_id,
      //post_id: req.session.post_id,
    });

    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
