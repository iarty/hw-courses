import {
  DECODE_SUCCESS,
  ENCODE_SUCCESS,
  SET_ERROR,
  SET_LOADING
} from "./actionsType";

export const decoder = body => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    try {
      if (body) {
        body = JSON.stringify(body);
      }
      const data = await fetch("http://localhost:8000/encode", {
        method: "POST",
        body,
        headers: { "Content-Type": "application/json" }
      });
      const response = await data.text();
      if (response) {
        dispatch({ type: ENCODE_SUCCESS, payload: response });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };
};

export const encoder = body => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    try {
      if (body) {
        body = JSON.stringify(body);
      }
      const data = await fetch("http://localhost:8000/decode", {
        method: "POST",
        body,
        headers: { "Content-Type": "application/json" }
      });
      const response = await data.text();
      if (response) {
        dispatch({ type: DECODE_SUCCESS, payload: response });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };
};
