const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "who else struggled with this ",
    user_id: 1,
    word_id: 8,
  },
  {
    comment_text: "this is my biggest weakness haha",
    user_id: 2,
    word_id: 4,
  },
  {
    comment_text: " Why did the developer refuse to attend the dance party Because they were afraid of merge conflicts on the dance floor! ",
    user_id: 3,
    word_id: 8,
  },
  {
    comment_text: "I prefer fettuccine code anyone else?",
    user_id: 4,
    word_id: 4,
  },
  {
    comment_text: "who else had this on their first challenge ",
    user_id: 5,
    word_id: 4,
  },
  {
    comment_text: "https://drkellierose.files.wordpress.com/2016/03/michellepastaa.gif?w=442&h=332&zoom=2",
    user_id: 2,
    word_id: 4,
  },
  {
    comment_text: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github",
    user_id: 2,
    word_id: 8,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;

