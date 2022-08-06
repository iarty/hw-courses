import axiosContact from "../../axiosContact";

import {
  DELETE_CONTACT, EDIT_CONTACT,
  FETCH_ERROR,
  FETCH_ONE_SUCCESS,
  FETCH_SUCCESS,
  MODAL_HANDLER,
  SET_LOADING
} from "./actionsType";

export const modalHandler = (id = "") => ({ type: MODAL_HANDLER, id });

export const postContacts = data => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    try {
      await axiosContact.post("/contacts.json", data);
      dispatch({ type: FETCH_SUCCESS });
    } catch (error) {
      dispatch({ type: FETCH_ERROR, error });
    }
  };
};

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

export const deleteContact = id => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    try {
      await axiosContact.delete(`/contacts/${id}.json`);
      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (error) {
      dispatch({ type: FETCH_ERROR, error });
    }
  };
};

export const editContactData = (id, data) => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    try {
      await axiosContact.patch(`/contacts/${id}.json`, data);
      dispatch({ type: EDIT_CONTACT, payload: id });
    } catch (error) {
      dispatch({ type: FETCH_ERROR, error });
    }
  };
};