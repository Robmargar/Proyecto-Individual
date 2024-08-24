const { Router } = require("express");
const router = Router();
const { User } = require("../db.js");
const { where } = require("sequelize");

// ------ Pedir Usuario a la BD ------
router.get("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({
      where: { email: email },
    });
    if (user === null) {
      return res.send("Usuario no encontrado");
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//------- Create User -------
router.post("/", async (req, res) => {
  const { name, last_name, email } = req.body;
  console.log(req.body);
  try {
    const [usuario, created] = await User.findOrCreate({
      where: {
        name: name,
        last_name: last_name,
        email: email,
      },
    });
    if (created) {
      console.log("Usuario CREADO");
      res.status(200).json(usuario);
    } else {
      res.status(200).json("El Usuario ya existe.");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.put("/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const { name, last_name } = req.body;
    const editdUser = await User.update(
      {
        name: name,
        last_name: last_name,
        email: email,
      },
      { where: { email: email } }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
