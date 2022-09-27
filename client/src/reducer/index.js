import { combineReducers } from "redux";
import { videogamesReducer } from "./videogames";
import { GET_VALUES, SET_APP_IS_LOADING } from "../actions/appActions";

const INICIAL_STATE = {
  plataforms: [],
  genres: [],
  pagina: 1,
  isLoading: false,
};

function appReducer(state = INICIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_VALUES:
      return {
        ...state,
        [payload.name]: payload.response,
      };

    case SET_APP_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };

    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  app: appReducer,
  videogames: videogamesReducer,
});
