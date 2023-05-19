const router = require('express').Router();
const Post = require('../models/Post');
const Comment = require('../models/Comment');

// Route to get all posts and comments
router.get('/', async (req, res) => {
  const postData = await Post.findAll(
    { include: [{ Comment }]
    })
  .catch((err) => { 
      res.json(err);
    });
      const posts = postData.map((post) => post.get({ plain: true }));
      res.render('all', { posts });
    });

// Route to get one post
router.get('/posts/:id', async (req, res) => {
  try{ 
      const postData = await Post.findByPk(req.params.id);
      if(!postData) {
          res.status(404).json({message: 'No post with this id!'});
          return;
      }
      const post = postData.get({ plain: true });
      res.render('post', post);
    } catch (err) {
        res.status(500).json(err);
    };     
});

module.exports = router;
