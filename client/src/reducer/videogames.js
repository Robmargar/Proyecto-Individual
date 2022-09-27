import {
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_ID,
  POST_VIDEOGAME,
} from "../actions/videogamesActions";

const INITIAL_STATE = {
  backup: [],
  current: [],
  gamedetail: {},
};

export function videogamesReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        backup: payload,
      };

    case GET_VIDEOGAMES_ID:
      return {
        ...state,
        gamedetail: payload,
      };

    case POST_VIDEOGAME:
      return {
        ...state,
        current: payload,
      };

    default:
      return state;
  }
}
