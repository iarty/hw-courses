import {
  FETCH_THREAD_SUCCESS,
  POST_SUCCESS,
  SET_ERROR,
  SET_LOADING
} from "../actions/types";

const initialState = {
  threads: [],
  loading: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    case POST_SUCCESS:
      return { ...state, loading: false };
    case FETCH_THREAD_SUCCESS:
      return { ...state, threads: action.payload, error: null, loading: false };

    default:
      return state;
  }
};
