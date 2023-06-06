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
  },
  {
    title: "A.I",
    description: "artificial intelligence",
    user_id: 1,
  },

  {
    title: "GIT",
   description: "is a version control system used for tracking changes in computer files. It is generally used for source code management in software development.",
    user_id: 2,
  },
  {
    title: "Merge conflict",
  description: " is an event that takes place when Git is unable to automatically resolve differences in code between two commits",
    user_id: 3,
  },
  {
    title: "OOP",
   description: "Object-oriented programming is a computer programming model that organizes software design around data, or objects, rather than functions and logic",
    user_id: 4,
  },
  {
    title: "Typescript",
    description: "is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.",
    user_id: 5,
  },
  {
    title: "API",
    description: "(Application programming interface) A computer programming term meaning a series of rules. APIs allow an application to extract information from a service and use that information in their own application, or sometimes for data analysis.",
    user_id: 6,
  },
  {
    title: "Cookies/Tracking Cookies",
    description: "A small file that a web server automatically sends to your personal computer when you browse certain websites.",
    user_id: 3,
  },
  {
    title: "Git Good",
    description: "Somehting an opposing programmer would says, when you hit a merging conflict",
    user_id: 1,
  },
  {
    title: "Plugin/Plug-In",
    description: "A software extension that adds a specific feature to an existing software application.",
    user_id: 4,
  },
  

];

const seedWord = () => Word.bulkCreate(wordData);

module.exports = seedWord;