const { Router } = require("express");
const axios = require("axios");
const { Plataform } = require("../db.js");
const API_KEY = "da38c86359b946108a9c60c9030353b2";

//---------intentando Obtener la API_KEY desde el .env----------
//require("dotenv").config();
//const { API_KEY } = process.env;
// console.log(API_KEY);

/*--------Llenado de tabla trayendo info desde API--------*/

async function fillPlataforms() {
  //--------Solicito la informacion--------
  const apiData = await axios.get(
    `https://api.rawg.io/api/platforms?key=${API_KEY}`
  );
  const data = await apiData.data.results;
  const apiData2 = await axios.get(apiData.data.next);
  const data2 = await apiData2.data.results;
  const data3 = [...data, ...data2];
  // --------Llenado de la tabla--------
  data3.forEach((e) => {
    Plataform.findOrCreate({
      where: { name: e.name },
    });
  });
  console.log(data3.length + " Plataforms loaded...");
}

module.exports = fillPlataforms;
