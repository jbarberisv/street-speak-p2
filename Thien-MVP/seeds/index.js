// Importing the seed data functions
const seedUserData = require("./userData");
const seedWordData = require("./wordData");
const seedCommentData = require("./commentData")


// Importing the sequelize connection from ../config/connection
const sequelize = require("../config/connection");

// Function to seed all data by calling the three seed functions in sequence
const seedFile = async () => {
    // Syncing the sequelize models and wiping out the tables
  await sequelize.sync({ force: true });
  // Calling each of the seed data functions
  await seedUserData();
  await seedWordData();
  await seedCommentData();

  // Exiting the process with a successful exit code
  process.exit(0);
};
// Calling the seedAll function to seed the database
seedFile();