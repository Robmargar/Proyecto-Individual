import axios from "axios";

export const GET_VALUES = "GET_VALUES";
export const SET_APP_IS_LOADING = "SET_APP_IS_LOADING";

//--------------- Obtener valores generos/plataformas ---------------
export function getValues(name) {
  return async (dispatch) => {
    var response;
    response = await axios(`http://localhost:3001/${name}`);
    dispatch({
      type: GET_VALUES,
      payload: {
        name: name,
        response: response.data,
      },
    });
  };
}

//---------------
export function setIsLoading(value) {
  return {
    type: SET_APP_IS_LOADING,
    payload: value,
  };
}
