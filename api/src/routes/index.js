const { Router } = require("express");

//--------- Importar todos los routers ---------

const videogames = require("./videogames");
const genres = require("./genres");
const plataforms = require("./plataforms.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/genres", genres);
router.use("/plataforms", plataforms);
router.use("/videogames", videogames);

module.exports = router;
