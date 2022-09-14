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
  const data = apiData.data.results;
  // --------Llenado de la tabla--------
  data.forEach((e) => {
    Plataform.findOrCreate({
      where: { name: e.name },
    });
  });

  return "Todo bien con las Plataforms";
}

module.exports = fillPlataforms;
