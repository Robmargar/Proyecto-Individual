const { Router } = require("express");
const router = Router();
const { User, Videogame } = require("../db.js");


async function encontrarUsuario(userId) {
  const usuarioVid = await User.findOne({
    attributes: ["name", "id"],
    where: {
      id: userId,
    },
    include: [
      {
        model: Videogame,
        attributes: ["name", "id"],
        through: {
          attributes: [],
        },
      },
    ],
  });
 
  return usuarioVid;
}
// ------ Obtener listado de videojuegos likeados ------
router.get("/:userId", async (req, res) => {
  const {userId} = req.params;
  try {
    const usuarioVid = await encontrarUsuario(userId);
    res.status(200).json(usuarioVid.videogames);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ------ Poner o quitar like de un videojuego ------
router.post("/likepost", async (req, res) => {
  
  const { userId, videogameId } = req.body;
  try {
    const usuarioVid = await encontrarUsuario(userId);
    const found = usuarioVid.videogames.find((e) => e.id === videogameId);
    found
      ? usuarioVid.removeVideogames(videogameId)
      : usuarioVid.addVideogames(videogameId);
    res.status(200).json(found);
  } catch (err) {
    console.log("error del post");
    res.status(500).json(err);
  }
});

module.exports = router;
