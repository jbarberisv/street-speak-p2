
const router = require("express").Router();

const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  try {
    res.render("homepage", {logged_in: req.session.logged_in }); // Render the "homepage" template with data including the "logged_in" variable
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get("/dashboard", withAuth, async (req, res) => {
  try {
    res.render("dashboard", {logged_in: req.session.logged_in }); 
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


module.exports = router;






