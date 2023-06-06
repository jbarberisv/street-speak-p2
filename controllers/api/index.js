// Import the required modules
const router = require("express").Router();
const userRoutes = require("./user-routes");
const wordRoutes = require("./word-routes");
const commentRoutes= require("./comment-routes");
const newwordRoutes= require("./newword-routes");


// Set up the routes
router.use("/users", userRoutes); // Routes for user-related functionality
router.use("/words", wordRoutes );
router.use("/comments", commentRoutes);
router.use("/newword", newwordRoutes);


// Export the router
module.exports = router;
