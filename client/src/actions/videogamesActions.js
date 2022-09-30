import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAMESSEARCH = "GET_VIDEOGAMESSEARCH";
export const GET_VIDEOGAMES_ID = "GET_VIDEOGAMES_ID";
export const POST_VIDEOGAME = "POST_VIDEOGAME";
export const ORDER_BY = "ORDER_BY";
export const FILTER_BY = "FILTER_BY";
export const CLEAN_STATE = "CLEAN_STATE";

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

export function getVideogamesSearch(name) {
  return async (dispatch) => {
    var response;
    if (name)
      response = await axios(`http://localhost:3001/videogames?name=${name}`);
    else response = await axios(`http://localhost:3001/videogames`);

    dispatch({
      type: GET_VIDEOGAMESSEARCH,
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
    const response = await axios.post(`http://localhost:3001/videogames`, data);
    dispatch({
      type: POST_VIDEOGAME,
      payload: response.data,
    });
  };
}

export function orderBy(data) {
  return async (dispatch) => {
    dispatch({
      type: ORDER_BY,
      payload: data,
    });
  };
}

export function filterBy(data) {
  return async (dispatch) => {
    dispatch({
      type: FILTER_BY,
      payload: data,
    });
  };
}

export function cleanState() {
  return async (dispatch) => {
    dispatch({
      type: CLEAN_STATE,
    });
  };
}
