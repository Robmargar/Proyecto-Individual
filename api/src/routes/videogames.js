const axios = require("axios");
const router = require("express").Router();
const { Videogames, Genre } = require("../db.js");

const API_KEY = "da38c86359b946108a9c60c9030353b2";

//------- Pedir todos los Videojuegos a la BD--------
router.get("/", async (req, res) => {
  try {
    const apiData = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}`
    );
    const data = apiData.data.results;
    console.log(data);
    const instancias = await Videogames.findAll();
    res.send(instancias);
  } catch (e) {
    next(e);
  }
});
