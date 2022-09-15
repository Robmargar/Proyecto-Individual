const { Router } = require("express");
const { Plataform } = require("../db.js");


const router = Router();

//------- Pedir  todas las plataformas al servidor--------
router.get("/", async (req, res) => {
  try {
    

    const instancias = await Plataform.findAll();
    res.send(instancias);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
