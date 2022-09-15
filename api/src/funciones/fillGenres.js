const { Router } = require("express");
const axios = require("axios");
const { Genre } = require("../db.js");

const API_KEY = "da38c86359b946108a9c60c9030353b2";

/*--------Llenado de tabla trayendo info desde API--------*/

async function fillGenres() {
  //--------Solicito la informacion--------
  const apiData = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  const data = await apiData.data.results;

  //--------Llenado de la tabla--------
  data.forEach(async (e) => {
    await Genre.findOrCreate({
      where: { name: e.name },
    });
  });
  console.log(data.length + " Genres loaded...");
  return "Todo bien con los Genres";
}

module.exports = fillGenres;
