const axios = require("axios");
const { Router } = require("express");
const router = Router();
const { Videogame, Genre } = require("../db.js");

const API_KEY = "da38c86359b946108a9c60c9030353b2";

//------- Pedir todos los Videojuegos a la BD--------
router.get("/", async (req, res) => {
  try {
    // res.status(200).send("hellow bf");
    //------- Pido los Games a la BD -------
    const infobd = await Videogame.findAll();

    //------- Pido los Games a la API -------
    const apiData = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}`
    );
    let data = await apiData.data.results;
    let next = await apiData.data.next;
    let page = 0;

    while (page < 4) {
      let apiData2 = await axios.get(next);
      let data2 = await apiData2.data.results;
      next = await apiData2.data.next;
      data = [...data, ...data2];
      page++;
    }

    //------- Separo unicamente la infomacion necesaria -------
    let infoapi = data.map((e) => {
      return {
        id: e.id,
        imagen: e.background_image,
        name: e.name,
        raiting: e.rating,
        // la info viene en array por eso mapeo el arreglo
        generos: e.genres.map((gen) => gen.name),
      };
    });

    //------- Junto los datos de la API(infoapi) y de la BD(infobd) -------

    const respuesta = [...infoapi, ...infobd];

    // //------- Data contiene los Games de la API -------

    res.status(200).json(respuesta);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
