const { Router } = require("express");
const { Plataform } = require("../db.js");

const router = Router();

//------- Pedir  todas las plataformas al servidor--------
router.get("/", async (req, res) => {
  try {
    const instancias = await Plataform.findAll();
    res.sendStatus(200).json(instancias);
  } catch (err) {
    res.sendStatus(500).json(err);
  }
});

module.exports = router;
