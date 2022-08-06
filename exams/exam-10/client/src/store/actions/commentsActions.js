import {
  DELETE_COMMENT,
  FETCH_COMMENTS_BY_ID_SUCCESS,
  POST_COMMENT_SUCCESS,
  SET_ERROR_COMMENT,
  SET_LOADING_COMMENT
} from "./actionsType";
import axios from "axios";

const setLoading = () => ({ type: SET_LOADING_COMMENT });
const getComments = payload => ({
  type: FETCH_COMMENTS_BY_ID_SUCCESS,
  payload
});
const setError = error => ({ type: SET_ERROR_COMMENT, payload: error });
const deleteComments = id => ({ type: DELETE_COMMENT, id });
const addComments = payload => ({ type: POST_COMMENT_SUCCESS, payload });

export const getCommentById = id => {
  return async dispatch => {
    dispatch(setLoading());
    try {
      const response = await axios.get(`/comments?news_id=${id}`);
      if (response.data) {
        dispatch(getComments(response.data));
      }
    } catch (error) {
      dispatch(setError(error.response.data));
    }
  };
};

export const postComment = data => {
  return async dispatch => {
    dispatch(setLoading());
    try {
      const response = await axios.post(`/comments`, data);
      if (response.data) {
        dispatch(addComments(response.data));
      }
    } catch (error) {
      dispatch(setError(error.response.data));
    }
  };
};

export const deleteComment = id => {
  return async dispatch => {
    dispatch(setLoading());
    try {
      await axios.delete(`/comments/${id}`);
      dispatch(deleteComments(id));
    } catch (error) {
      dispatch(setError(error.response.data));
    }
  };
};
