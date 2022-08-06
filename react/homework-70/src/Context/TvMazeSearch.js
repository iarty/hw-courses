import { createContext, useCallback, useReducer } from "react";
import React from "react";
import { tvmazeReducer } from "./tvmazeReducer";
import AxiosTv from "../AxiosTv";
import {
  SEARCH_TVSHOW,
  SELECTED_SHOW,
  SET_LOADING,
  SET_TOGGLER
} from "./types";

export const TvaMazeContext = createContext();

export const TvMazeSearch = ({ children }) => {
  const initialState = {
    searchResult: [],
    selectedTvShow: {},
    loading: false,
    toggler: false
  };

  const [state, dispatch] = useReducer(tvmazeReducer, initialState);

  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };
  const setToggler = () => {
    dispatch({
      type: SET_TOGGLER
    });
  };

  const searchTvShow = useCallback(async name => {
    setLoading();
    try {
      const response = await AxiosTv.get(`search/shows?q=${name}`);
      if (response.data) {
        const result = response.data.map(el => el.show);
        dispatch({
          type: SEARCH_TVSHOW,
          payload: result
        });
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getTvShow = useCallback(async id => {
    setLoading();
    try {
      const response = await AxiosTv.get(`/shows/${id}`);
      if (response.data) {
        dispatch({
          type: SELECTED_SHOW,
          payload: response.data
        });
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  const { searchResult, selectedTvShow, loading, toggler } = state;

  return (
    <TvaMazeContext.Provider
      value={{
        searchTvShow,
        searchResult,
        selectedTvShow,
        loading,
        toggler,
        getTvShow,
        setToggler
      }}
    >
      {children}
    </TvaMazeContext.Provider>
  );
};
