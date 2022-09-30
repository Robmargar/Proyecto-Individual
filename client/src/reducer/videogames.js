import {
  CLEAN_STATE,
  FILTER_BY,
  GET_VIDEOGAMES,
  GET_VIDEOGAMESSEARCH,
  GET_VIDEOGAMES_ID,
  ORDER_BY,
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
        current: payload,
      };

    case ORDER_BY:
      switch (payload) {
        case "A-->Z":
          return {
            ...state,
            current: state.current
              .slice()
              .sort((a, b) => (a.name > b.name ? 1 : -1)),
          };

        case "Z-->A":
          return {
            ...state,
            current: state.current
              .slice()
              .sort((a, b) => (a.name < b.name ? 1 : -1)),
          };

        case "Rating +":
          return {
            ...state,
            current: state.current
              .slice()
              .sort((a, b) => (a.raiting < b.raiting ? 1 : -1)),
          };

        case "Rating -":
          return {
            ...state,
            current: state.current
              .slice()
              .sort((a, b) => (a.raiting > b.raiting ? 1 : -1)),
          };

        case "Creado":
          return {
            ...state,
            current: state.backup.filter((juego) => {
              if (juego.id.length > 8) {
                return juego;
              }
            }),
          };

        case "Api":
          return {
            ...state,
            current: state.backup.filter((juego) => {
              if (!juego.id.length) {
                return juego;
              }
            }),
          };

        default:
          console.log("default");
          return state;
      }

    case FILTER_BY:
      return {
        ...state,
        current: state.backup.filter((juego) => {
          console.log(juego.generos);
          console.log("lo que recibo ------------->" + payload);
          if (juego.generos.includes(payload)) {
            console.log(juego.generos);
            return juego;
          }
        }),
      };

    case CLEAN_STATE:
      return {
        ...state,
        gamedetail: {},
      };

    default:
      return state;
  }
}
