const { Router } = require("express");

//--------- Importar todos los routers ---------

const plataforms = require("./plataforms.js");
const videogames = require("./videogames");
const genres = require("./genres");
const users = require("./users.js");
const like = require("./like.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/plataforms", plataforms);
router.use("/videogames", videogames);
router.use("/genres", genres);
router.use("/users", users);
router.use("/like", like);

module.exports = router;
