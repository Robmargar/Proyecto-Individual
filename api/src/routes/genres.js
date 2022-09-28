const { Router } = require("express");
const { Genre } = require("../db.js");

const router = Router();

//------- Pedir Generos a la BD --------
router.get("/", async (req, res) => {
  try {
    const instancias = await Genre.findAll();
    // console.log(instancias);
    res.status(200).json(instancias);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
