const { Router } = require("express");
const { Genre } = require("../db.js");

const router = Router();

//------- Pedir Generos a la BD --------
router.get("/", async (req, res) => {
  try {
    const instancias = await Genre.findAll();
    res.send(instancias);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
