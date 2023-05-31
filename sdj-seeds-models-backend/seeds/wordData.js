const { Word } = require("../models");

const wordData = [
  {
    title: "dir_name",
    user_id: 1,
  },

  {
    title: "Hash",
    user_id: 2,
  },
  {
    title: "Hash map",
    user_id: 3,
  },
  {
    title: "Spaghetti code",
    user_id: 4,
  },
  {
    title: "Refactoritis",
    user_id: 5,
  }
];

const seedWord = () => Word.bulkCreate(wordData);

module.exports = seedWord;