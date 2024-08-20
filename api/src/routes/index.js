const { Router } = require("express");

//--------- Importar todos los routers ---------

const videogames = require("./videogames");
const genres = require("./genres");
const plataforms = require("./plataforms.js");
const users = require("./users.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/genres", genres);
router.use("/plataforms", plataforms);
router.use("/vidseogames", videogames);
router.use("/users", users);

module.exports = router;
