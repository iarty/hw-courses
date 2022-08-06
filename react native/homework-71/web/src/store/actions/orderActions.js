import { DELETE_ORDER, SET_ERROR, GET_ORDERS, SET_LOADING } from "./actionType";

export const getOrders = url => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    const mainUrl = `https://redux-6b899.firebaseio.com/${url}.json`;
    try {
      const response = await fetch(mainUrl, {
        method: "GET"
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: GET_ORDERS, payload: data });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, error });
    }
  };
};

export const removeOrder = (url, id) => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    const mainUrl = `https://redux-6b899.firebaseio.com/${url}.json`;
    try {
      const response = await fetch(mainUrl, {
        method: "DELETE"
      });
      if (response.ok) {
        dispatch({ type: DELETE_ORDER, id });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, error });
    }
  };
};
