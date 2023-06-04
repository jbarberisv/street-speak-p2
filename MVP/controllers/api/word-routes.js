const router = require("express").Router();
const  Word = require("../../models/Word");

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
