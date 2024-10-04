import axios from "axios";

export const GET_USER_EMAIL = "GET_USER_EMAIL";
export const POST_USER_EMAIL = "POST_USER_EMAIL";
export const GET_LIKE = "GET_LIKE";
export const POST_LIKE = "POST_LIKE";

export function getUserEmail(email) {
  return async (dispatch) => {
    const response = await axios(`http://localhost:3001/users/${email}`);
    console.log(response.data);
    dispatch({
      type: GET_USER_EMAIL,
      payload: response.data,
    });
  };
}

export function postUserEmail(data) {
  return async (dispatch) => {
    const response = await axios(`http://localhost:3001/users`, data);
    console.log(response.data);
    dispatch({
      type: POST_USER_EMAIL,
      payload: response.data,
    });
  };
}

export function getlike(data) {
  return async (dispatch) => {
    const response = await axios(`http://localhost:3001/like/${data.userId}`);
    console.log(response.data);
    dispatch({
      type: GET_LIKE,
      payload: response.data,
    });
  };
}

export function postlike(data) {
  return async (dispatch) => {
    const response = await axios.post(
      `http://localhost:3001/like/likepost`,
      data
    );
    dispatch({
      type: POST_LIKE,
      payload: response.data,
    });
  };
}
