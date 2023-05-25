const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

// GET all posts for homepage
router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one post
router.get("/posts/:id", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
        },
        {
          model: User,
          attributes: ["username", "id"],
        },
      ],
    });
    const post = dbPostData.get({ plain: true });

    req.session.save(() => {
      req.session.post_id = post.id;
      req.session.post_title = post.title;
      req.session.post_content = post.content;
    });

    res.render("posts", {
      post,
      loggedIn: req.session.loggedIn,
      user_id: post.user_id,
      owner: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all posts for user
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render("dashboard", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Render the login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// Render the signup page
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

// Render the add comment page
router.get("/addComment", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.session.post_id, {
      include: [
        {
          model: User,
          attributes: ["username", "id"],
        },
      ],
    });

    const post = dbPostData.get({ plain: true });

    res.render("addComment", { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Render the add post page
router.get("/addPost", withAuth, (req, res) => {
  res.render("addPost", { loggedIn: req.session.loggedIn });
});

// Render the edit post page
router.get("/editPost/", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.session.post_id, {
      include: [
        {
          model: User,
          attributes: ["username", "id"],
        },
      ],
    });

    const post = dbPostData.get({ plain: true });

    res.render("editPost", { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
