const { Router } = require("express");
const { Videogame } = require("../db.js");
const axios = require("axios");

const API_KEY = "da38c86359b946108a9c60c9030353b2";

/*--------Llenado de tabla trayendo info desde API--------*/

async function fillVideogames() {
  //--------Solicito la informacion a la Api--------
  const apiData = await axios.get(
    `https://api.rawg.io/api/games?key=${API_KEY}`
  );
  let data = await apiData.data.results;
  let next = await apiData.data.next;
  let page = 0;

  while (page < 3) {
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
      name: e.name,
      imagen: e.background_image,
      fecha_lanzamiento: e.released,
      rating: e.rating,
      // la info viene en array por eso mapeo el arreglo
      generos: e.genres.map((gen) => gen.name),
      plataformas: e.platforms.map((p) => p.platform.name),
    };
  });
  console.log(infoapi);
  infoapi.forEach((e) => {
    Videogame.findOrCreate({
      where: {
        name: e.name,
        imagen: e.imagen,
        fecha_lanzamiento: e.fecha_lanzamiento,
        rating: e.rating,
        plataformas: e.plataformas,
        generos: e.generos,
      },
    });
  });

  console.log(" Videogames loaded...");
  return "Todo bien con los Videogames";
}

module.exports = fillVideogames;
