const { Router } = require("express");
const router = Router();
const { User, Videogame } = require("../db.js");
const { where } = require("sequelize");

// ------ Poner o quitar like de un videojuego ------

router.post("/", async (req, res) => {
  const { userId, videogameId } = req.body;
  try {
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
    const found = usuarioVid.videogames.find((e) => e.id === videogameId);
    found
      ? usuarioVid.removeVideogames(videogameId)
      : usuarioVid.addVideogames(videogameId);
    res.status(200).json(found);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
