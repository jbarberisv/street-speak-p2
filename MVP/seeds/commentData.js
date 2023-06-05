const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Stands for directory name, refers to the name of a directory or folder in a file system.",
    user_id: 1,
    word_id: 1,
  },
  {
    comment_text: "In programming, a hash is a function that generates a fixed-size string or value from an input (key). Used for indexing or cryptography.",
    user_id: 2,
    word_id: 2,
  },
  {
    comment_text: "Hash map, also known as a hash table or dictionary, stores key-value pairs. Uses a hash function to map keys to specific array locations, enabling efficient retrieval and storage.",
    user_id: 3,
    word_id: 3,
  },
  {
    comment_text: "Spaghetti code refers to poorly structured or unorganized code that's hard to understand and maintain. Lacks clear control flow or modularization, leading to errors.",
    user_id: 4,
    word_id: 4,
  },
  {
    comment_text: "Refactoritis is the compulsion to excessively refactor code without clear purpose, resulting in complex and unstable codebases.",
    user_id: 5,
    word_id: 5,
  },
  {
    comment_text: "Symbolic amalgamation denoting a specific folder in a file system hierarchy. Vital identifier for organizing, retrieving, and managing digital artifacts.",
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

