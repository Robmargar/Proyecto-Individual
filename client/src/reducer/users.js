import {
  GET_USER_EMAIL,
  POST_USER_EMAIL,
  GET_LIKE,
  POST_LIKE,
} from "../actions/usersActions.js";

const INITIAL_USER_STATE = {
  user: {},
  likes: [],
  userdetail: {},
};

export function userReducer(state = INITIAL_USER_STATE, { type, payload }) {
  switch (type) {
    case GET_USER_EMAIL:
      return {
        ...state,
        userdetail: payload,
      };

    case POST_USER_EMAIL:
      return {
        ...state,
        user: payload,
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

    default:
      return state;
  }
}
