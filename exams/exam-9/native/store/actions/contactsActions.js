import {
  FETCH_ERROR,
  FETCH_ONE_SUCCESS,
  FETCH_SUCCESS,
  MODAL_HANDLER,
  SET_LOADING
} from "./actionsType";
import axiosContact from "../../axiosContact";

export const modalHandler = (id = "") => ({ type: MODAL_HANDLER, id });

export const getContacts = () => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axiosContact.get("/contacts.json");
      if (response.data) {
        dispatch({ type: FETCH_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: FETCH_ERROR, error });
    }
  };
};

export const getContactById = id => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axiosContact.get(`/contacts/${id}.json`);
      if (response.data) {
        dispatch({ type: FETCH_ONE_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: FETCH_ERROR, error });
    }
  };
};
