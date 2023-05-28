// Import the required modules
const router = require("express").Router();
const userRoutes = require("./user-routes");


// Set up the routes
router.use("/users", userRoutes); // Routes for user-related functionality


// Export the router
module.exports = router;
