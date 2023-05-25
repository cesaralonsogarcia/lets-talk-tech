const router = require('express').Router();
const { Post, Comment, User } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one post
router.get('/posts/:id', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    try {
      const dbPostData = await Post.findByPk(req.params.id, {
        include: [
          { 
            model: Comment,
            include: [
              {
                model: User,
                attributes: ['username'],
              },
            ],
          },
          { 
            model: User,
            attributes: ['username', 'id'],
          }
        ],
      });
      const post = dbPostData.get({ plain: true });

      req.session.save(() => {
        req.session.post_id = post.id;
      });

      res.render('posts', { 
        post, 
        user_id: post.user_id,
        owner: req.session.user_id, 
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET all posts for user
router.get('/dashboard', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );

    res.render('dashboard', {
      posts,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Render the login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


// Render the signup page
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

// Render the add comment page
router.get('/addComment', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  res.render('addComment', {loggedIn: req.session.loggedIn});
});

// Render the add post page
router.get('/addPost', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }

  res.render('addPost', {loggedIn: req.session.loggedIn});
});

// Render the edit post page
router.get('/editPost/', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  } else {
    try {
      const dbPostData = await Post.findByPk(req.session.post_id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
      const post = dbPostData.get({ plain: true });

      res.render('editPost', { post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

module.exports = router;
