const axios = require("axios");
const { Router } = require("express");
const router = Router();
const { Videogame } = require("../db.js");

const API_KEY = "da38c86359b946108a9c60c9030353b2";

//------- Pedir todos los Videojuegos a la BD--------
router.get("/", async (req, res) => {
  try {
    // res.status(200).send("hellow bf");
    //------- Pido los Games a la BD -------
    const infobd = await Videogame.findAll();

    //------------- https://api.rawg.io/api/games?search={game}----------------
    // se piden por query
    if (req.query.name) {
      try {
        const respuesta = await axios.get(
          ` https://api.rawg.io/api/games?search=${req.query.name}&key=${API_KEY}`
        );
        if ((respuesta.data.count = 0)) {
          const juegosbd = infobd.filter((e) =>
            e.name.toLowerCase().includes(req.query.name.toLowerCase())
          );
          const juegos = [...juegosbd].slice(0, 15);
          if (juegos.length > 0) {
            res.status(200).json(juegos);
          } else {
            res
              .status(200)
              .json(`No existen videojugos con el nombre: "${req.query.name}"`);
          }
        } else {
          const juegosapi = respuesta.data.results.map((e) => {
            return {
              id: e.id,
              imagen: e.background_image,
              name: e.name,
              raiting: e.rating,
              // la info viene en array por eso mapeo el arreglo
              generos: e.genres.map((gen) => gen.name),
            };
          });
          const juegosbd = infobd.filter((e) =>
            e.name.toLowerCase().includes(req.query.name.toLowerCase())
          );
          const juegos = [...juegosbd, ...juegosapi].slice(0, 15);
          if (juegos.length > 0) {
            res.status(200).json(juegos);
          } else {
            res
              .status(200)
              .json(`No existen videojugos con el nombre: "${req.query.name}"`);
          }
        }
      } catch (err) {
        return console.log(err);
      }
    } else {
      //------- Pido todos los Games a la API -------
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
      console.log("numero de videojuegos traidos");
      console.log(respuesta.length);
      res.status(200).json(respuesta);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  // ------------------https://api.rawg.io/api/games/{id}------------------
  // se pide por  params
  const { id } = req.params;
  try {
    let respuesta;
    if (id.length < 7) {
      const data = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      );

      const juegoapi = await data.data;

      respuesta = {
        id: juegoapi.id,
        name: juegoapi.name,
        imagen: juegoapi.background_image,
        descripcion: juegoapi.description_raw,
        fecha_lanzamiento: juegoapi.released,
        raiting: juegoapi.rating,
        generos: juegoapi.genres.map((gen) => gen.name),
      };
      // console.log(respuesta);
      res.status(200).json(respuesta);
    } else {
      respuesta = await Videogame.findByPk(id);
      if (respuesta === null) {
        return res
          .status(404)
          .send(`No se encontraron coincidencias con el id: ${id}`);
      } else {
        res.status(200).json(respuesta);
      }
    }
  } catch {
    res.status(404).send(`Videojuego no encontrado con el id: ${id}`);
  }
});

//------------------------POST----------------------------
router.post("/", async (req, res) => {
  const {
    name,
    descripcion,
    fecha_lanzamiento,
    raiting,
    plataformas,
    generos,
  } = req.body;
  try {
    console.log("soy feo yyyyyyyy");
    const [juego, created] = await Videogame.findOrCreate({
      where: {
        name: name,
        descripcion: descripcion,
        fecha_lanzamiento: fecha_lanzamiento,
        raiting: raiting,
        plataformas,
        generos,
      },
    });
    if (created) {
      console.log("JUEGO CREADO");
      res.status(200).json(juego);
    } else {
      res.status(200).json("El videojuego ya existe.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
