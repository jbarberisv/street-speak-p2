
const User = require("./User");
const Word = require("./Word");
const Comment = require("./Comment");

User.hasMany(Word, {
  foreignKey: "user_id", 
});

Word.belongsTo(User, {
  foreignKey: "user_id", 
});

Comment.belongsTo(User, {
  foreignKey: "user_id", 
});

Comment.belongsTo(Word, {
  foreignKey: "Word_id", 
  onDelete:"CASCADE"
});

Word.hasMany(Comment, {
  foreignKey: "Word_id", 
});

User.hasMany(Comment, {
  foreignKey: "user_id", 
});

module.exports = { User, Word, Comment };