import {
  CREATE_DISH,
  DELETE_DISH,
  EDIT_DISH,
  SET_ERROR,
  GET_DISHES_SUCCESS,
  GET_ONE_DISH,
  SET_LOADING
} from "./actionType";

export const getDishes = url => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    const mainUrl = `https://redux-6b899.firebaseio.com/${url}.json`;
    try {
      const response = await fetch(mainUrl, {
        method: "GET"
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: GET_DISHES_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, error });
    }
  };
};

export const removeDish = (url, id) => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    const mainUrl = `https://redux-6b899.firebaseio.com/${url}.json`;
    try {
      const response = await fetch(mainUrl, {
        method: "DELETE"
      });
      if (response.ok) {
        dispatch({ type: DELETE_DISH, id });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, error });
    }
  };
};

export const editDish = (url, body) => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    const mainUrl = `https://redux-6b899.firebaseio.com/${url}.json`;
    try {
      const response = await fetch(mainUrl, {
        method: "PUT",
        body: JSON.stringify(body)
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: EDIT_DISH, payload: data });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, error });
    }
  };
};

export const getDishById = id => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    const mainUrl = `https://redux-6b899.firebaseio.com/${id}.json`;
    try {
      const response = await fetch(mainUrl, {
        method: "GET"
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: GET_ONE_DISH, payload: data });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, error });
    }
  };
};

export const createDish = (url, body) => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    const mainUrl = `https://redux-6b899.firebaseio.com/${url}.json`;
    try {
      const response = await fetch(mainUrl, {
        method: "POST",
        body: JSON.stringify(body)
      });
      if (response.ok) {
        dispatch({ type: CREATE_DISH });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, error });
    }
  };
};
