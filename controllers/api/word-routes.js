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

  router.delete("/:id", async (req, res) => {
    try {
     
      
  
      const deletedPost = await Word.destroy({
        where: { id: req.params.id },
      });
  
      if (!deletedPost) {
        res.status(404).json({ message: "No post found with that id!" });
        return;
      }
      res.status(200).json(deletedPost);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });

  router.put("/:id", async (req, res) => {
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
module.exports = router;
