import { FETCH_SUCCESS, SET_ERROR, SET_LOADING } from "./actionsType";
import axios from "axios";

const fetchSuccess = payload => ({ type: FETCH_SUCCESS, payload });
const getError = error => ({ type: SET_ERROR, error });
const setLoading = () => ({ type: SET_LOADING });

export const getShorLink = () => {
  return async dispatch => {
    try {
      dispatch(setLoading());
      const response = await axios.get("/:id");
      if (response.data) {
        dispatch(fetchSuccess(response.data));
      }
    } catch (error) {
      dispatch(getError(error));
    }
  };
};

export const postLink = data => {
  return async dispatch => {
    try {
      dispatch(setLoading());
      const response = await axios.post("/links", { url: data });
      if (response.data) {
        dispatch(fetchSuccess(response.data));
      }
    } catch (error) {
      dispatch(getError(error));
    }
  };
};
