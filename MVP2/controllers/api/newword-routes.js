const router = require('express').Router();
const { Word } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
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

router.get("/", async (req, res) =>{
  try{
      const wordData = await Word.findAll()
      res.status(200).json(wordData);
  } catch(err){
res.status(500).json(err + "im sorry bro!")
  }
})
router.get("/:id", async (req, res) => {
  try {
    const wordData = await Word.findByPk(req.params.id,);
    if (!wordData) {
      res.status(404).json({ message: "No word found with that id!" });
      return;
    }
    res.status(200).json(wordData);
  } catch (err) {
    res.status(500).json(err + " id failed");
  }
});

module.exports = router;
