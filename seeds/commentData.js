const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "WHOOP WHOOP",
    user_id: 1,
    word_id: 1,
  },
  {
    comment_text: "Who else hates these",
    user_id: 2,
    word_id: 2,
  },
  {
    comment_text: "check out this video for a more detailed example https://www.youtube.com/watch?v=HsdmP7c1gkQ",
    user_id: 3,
    word_id: 3,
  },
  {
    comment_text: "I prefer fettuccine code anyone else?",
    user_id: 4,
    word_id: 4,
  },
  {
    comment_text: "who else had this on their first challenge ",
    user_id: 5,
    word_id: 5,
  },
  {
    comment_text: "if dotenv cant find the file use this require('dotenv').config({ path: `${__dirname}/../.env` });",
    user_id: 2,
    word_id: 1,
  },
  {
    comment_text: "Refactoritis is a psychological compulsion in software development. Excessive code refactoring without clear purpose, leading to complex and unstable codebases.",
    user_id: 2,
    word_id: 5,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;

