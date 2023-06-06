
const router = require("express").Router();
const { Post, User, Comment, Word } = require("../models");
const withAuth = require("../utils/auth");

//--------------
router.get("/", async (req, res) => {
  try {
        // Find all posts with associated usernames
    const wordData = await Word.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    // Convert post data to plain JavaScript object
    const words = wordData.map((word) => word.get({ plain: true }));
    // Render homepage template with posts and login status
    res.render("homepage", {
      words,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
        // If there is an error, return 500 status code and error message
    res.status(500).json(err);
  }
});

//-----------------
router.get("/words/:id", withAuth, async (req, res) => {
  try {
        // Find post by ID with associated username and comments with associated usernames
    const wordData = await Word.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });
    // Convert post data to plain JavaScript object
    const word = wordData.get({ plain: true });
    // Render post template with post data and login status
    res.render("template", {
      ...word,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
        // If there is an error, return 500 status code and error message
    res.status(500).json(err);
  }
});
// R
//----------------

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const wordData = await Word.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User, attributes: ["username"] }],
    });
    
    const words = wordData.map((word) => word.get({ plain: true }));

    res.render("dashboard", {
      words,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});

// newword
router.get("/newword", withAuth, async (req, res) => {
  try {
    res.render("newword", {logged_in: req.session.logged_in }); 
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/contact_form", withAuth, async (req, res) => {
  try {
    res.render("contact_form", {logged_in: req.session.logged_in }); 
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/template", withAuth, async (req, res) => {
//   try {
//     res.render("template", {logged_in: req.session.logged_in }); 
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;






