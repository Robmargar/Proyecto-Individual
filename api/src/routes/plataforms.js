const { Router } = require("express");
const { Plataform } = require("../db.js");

const router = Router();

//------- Pedir  todas las plataformas al servidor--------
router.get("/", async (req, res) => {
  try {
    const instancias = await Plataform.findAll();
    res.status(200).json(instancias);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
