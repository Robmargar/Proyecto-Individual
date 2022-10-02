import {
  CLEAN_STATE,
  CLEAN_CURRENT,
  FILTER_BY,
  GET_VIDEOGAMES,
  GET_VIDEOGAMESSEARCH,
  GET_VIDEOGAMES_ID,
  ORDER_BY,
  PAGINACION,
  POST_VIDEOGAME,
} from "../actions/videogamesActions";

const INITIAL_STATE = {
  backup: [],
  current: [],
  gamedetail: {},
  page: 1,
  creado: "",
};

export function videogamesReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        backup: payload,
        current: payload,
      };

    case GET_VIDEOGAMESSEARCH:
      return {
        ...state,
        current: payload,
      };

    case GET_VIDEOGAMES_ID:
      return {
        ...state,
        gamedetail: payload,
      };

    case POST_VIDEOGAME:
      return {
        ...state,
        page: 1,
        backup: [...state.backup, payload],
        creado: payload,
      };

    case ORDER_BY:
      switch (payload) {
        case "A-->Z":
          return {
            ...state,
            page: 1,
            current: state.current
              .slice()
              .sort((a, b) => (a.name > b.name ? 1 : -1)),
          };

        case "Z-->A":
          return {
            ...state,
            page: 1,
            current: state.current
              .slice()
              .sort((a, b) => (a.name < b.name ? 1 : -1)),
          };

        case "Rating +":
          return {
            ...state,
            page: 1,
            current: state.current
              .slice()
              .sort((a, b) => (a.raiting < b.raiting ? 1 : -1)),
          };

        case "Rating -":
          return {
            ...state,
            page: 1,
            current: state.current
              .slice()
              .sort((a, b) => (a.raiting > b.raiting ? 1 : -1)),
          };

        case "Creado":
          return {
            ...state,
            page: 1,
            current: state.backup.filter((juego) => juego.id.length > 8),
          };

        case "Api":
          return {
            ...state,
            page: 1,
            current: state.backup.filter((juego) => !juego.id.length),
          };

        default:
          console.log("default");
          return state;
      }

    case FILTER_BY:
      return {
        ...state,
        page: 1,
        current: state.backup.filter((juego) =>
          juego.generos.includes(payload)
        ),
      };

    case PAGINACION:
      return {
        ...state,
        page: payload.page,
      };

    case CLEAN_CURRENT:
      return {
        ...state,
        current: [],
      };

    case CLEAN_STATE:
      return {
        ...state,
        creado: "",
        gamedetail: {},
      };

    default:
      return state;
  }
}
