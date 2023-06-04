// Import the required modules
const router = require("express").Router();
const userRoutes = require("./user-routes");
const wordRoutes = require("./word-routes");
const postRoutes = require("./post-routes");
const commentRoutes= require("./comment-routes");


// Set up the routes
router.use("/users", userRoutes); // Routes for user-related functionality
router.use("/words", wordRoutes );
router.use("/post", postRoutes);
router.use("/comments", commentRoutes);


// Export the router
module.exports = router;
