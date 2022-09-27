import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAMES_ID = "GET_VIDEOGAMES_ID";
export const POST_VIDEOGAME = "POST_VIDEOGAME";

export function getVideogames(name) {
  return async (dispatch) => {
    var response;
    if (name)
      response = await axios(`http://localhost:3001/videogames?name=${name}`);
    else response = await axios(`http://localhost:3001/videogames`);

    dispatch({
      type: GET_VIDEOGAMES,
      payload: response.data,
    });
  };
}

export function getVideogamesId(id) {
  return async (dispatch) => {
    const response = await axios(`http://localhost:3001/videogames/${id}`);
    console.log(response.data);
    dispatch({
      type: GET_VIDEOGAMES_ID,
      payload: response.data,
    });
  };
}

export function postVideogame(data) {
  return async (dispatch) => {
    const response = await axios.post(`http://localhost:3001/videogames`,data);
    dispatch({
      type: POST_VIDEOGAME,
      payload: response.data,
    });
  };
}
