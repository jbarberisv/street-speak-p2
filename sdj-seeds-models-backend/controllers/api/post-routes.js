const router = require("express").Router()
const {Word, User, Comment } = require("../../models")
const withAuth = require("../../utils/auth")

router.get("/", async (req, res) =>{
    try{
        const wordData = await Word.findAll({
            include: [{model: User, attributes: ["username"]}]
        })
        res.status(200).json(wordData)
    } catch(err){
        res.status(500).json(err)
    }
})

router.get("/:id", async (req, res) => {
    try {
      const wordData = await Word.findByPk(req.params.id, {
        include: [
          { model: User, attributes: ["username"] },
          {
            model: Comment,
            include: [{ model: User, attributes: ["username"] }],
          },
        ],
      });
      if (!wordData) {
        res.status(404).json({ message: "No word found with that id!" });
        return;
      }
      res.status(200).json(wordData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.word("/", withAuth, async (req, res) => {
    try {
      const newWord = await Word.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(newWord);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put("/:id", withAuth, async (req, res) => {
    try {
      const updatedWord = await Word.update(req.body, {
        where: { id: req.params.id },
      });
  
      if (!updatedWord) {
        res.status(404).json({ message: "No word found with that id!" });
        return;
      }
      res.status(200).json(updatedWord);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete("/:id", withAuth, async (req, res) => {
    try {
 
      await Comment.destroy({
        where: { word_id: req.params.id },
      });
  
      const deletedWord = await Word.destroy({
        where: { id: req.params.id },
      });
  
      if (!deletedWord) {
        res.status(404).json({ message: "No word found with that id!" });
        return;
      }
      res.status(200).json(deletedWord);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;