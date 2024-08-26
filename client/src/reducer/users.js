import {
  GET_USER_EMAIL,
  POST_USER_EMAIL,
  GET_LIKE,
  POST_LIKE,
} from "../actions/usersActions.js";

const INITIAL_STATE = {
  backup: [],
  current: [],
  likes: [],
  userdetail: {},
  creado: "",
};

export function userReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_USER_EMAIL:
      return {
        ...state,
        backup: payload,
        current: payload,
      };

    case POST_USER_EMAIL:
      return {
        ...state,
        backup: payload,
        current: payload,
      };
    case GET_LIKE:
      return {
        ...state,
        likes: payload,
      };
    case POST_LIKE:
      return {
        ...state,
        likes: payload,
      };
  }
}
