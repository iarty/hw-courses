import { FETCH_SUCCESS, SET_ERROR, SET_LOADING } from "../actions/actionsType";

const initialState = {
  link: {},
  loading: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, loading: false, link: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
