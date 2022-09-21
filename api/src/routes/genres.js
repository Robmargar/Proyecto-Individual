const { Router } = require("express");
const { Genre } = require("../db.js");

const router = Router();

//------- Pedir Generos a la BD --------
router.get("/", async (req, res) => {
  try {
    const instancias = await Genre.findAll();
    res.sendStatus(200).json(instancias);
  } catch (err) {
    res.sendStatus(500).json(err);
  }
});

module.exports = router;
