import {
  SEARCH_TVSHOW,
  SELECTED_SHOW,
  SET_LOADING,
  SET_TOGGLER
} from "./types";

const handlers = {
  [SEARCH_TVSHOW]: (state, { payload }) => ({
    ...state,
    searchResult: payload,
    loading: false
  }),
  [SELECTED_SHOW]: (state, { payload }) => ({
    ...state,
    toggler: false,
    selectedTvShow: payload,
    loading: false
  }),
  [SET_LOADING]: state => ({ ...state, loading: true }),
  [SET_TOGGLER]: state => ({ ...state, toggler: true }),
  DEFAULT: state => state
};

export const tvmazeReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
