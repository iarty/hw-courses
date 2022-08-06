import {
  FETCH_THREAD_SUCCESS,
  POST_SUCCESS,
  SET_ERROR,
  SET_LOADING
} from "./types";
import axios from "axios";

export const getThreads = () => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await axios.get("/threads");
      if (response.data) {
        dispatch({ type: FETCH_THREAD_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.response.data });
    }
  };
};

const handleDataToFormData = data => {
  const formData = new FormData();
  for (let key in data) {
    if (key === "image") {
      for (let key in data["image"]) {
        formData.append("image", data["image"][key]);
      }
    } else {
      formData.append(key, data[key]);
    }
  }
  return formData;
};

export const postThread = data => {
  return async dispatch => {
    dispatch({ type: SET_LOADING });
    try {
      await axios.post("/newThread", handleDataToFormData(data), {
        header: { "content-type": "multipart/form-data" }
      });
      dispatch({ type: POST_SUCCESS });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.response.data });
    }
  };
};
