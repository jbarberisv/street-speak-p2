const { Word } = require("../models");

const wordData = [
  {
    title: "dir_name",
    description: "Stands for directory name, refers to the name of a directory or folder in a file system.",
    user_id: 1,
  },

  {
    title: "Hash",
   description: "In programming, a hash is a function that generates a fixed-size string or value from an input (key). Used for indexing or cryptography.",
    user_id: 2,
  },
  {
    title: "Hash map",
  description: "Hash map, also known as a hash table or dictionary, stores key-value pairs. Uses a hash function to map keys to specific array locations, enabling efficient retrieval and storage.",
    user_id: 3,
  },
  {
    title: "Spaghetti code",
   description: "Spaghetti code refers to poorly structured or unorganized code that's hard to understand and maintain. Lacks clear control flow or modularization, leading to errors.",
    user_id: 4,
  },
  {
    title: "Refactoritis",
    description: "Refactoritis is the compulsion to excessively refactor code without clear purpose, resulting in complex and unstable codebases.",
    user_id: 5,
  }
];

const seedWord = () => Word.bulkCreate(wordData);

module.exports = seedWord;