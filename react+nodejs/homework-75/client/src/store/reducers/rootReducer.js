import {
  DECODE_SUCCESS,
  ENCODE_SUCCESS,
  SET_ERROR,
  SET_LOADING
} from "../actions/actionsType";

const initialState = {
  decode: "",
  encode: "",
  loading: false,
  error: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case DECODE_SUCCESS:
      return { ...state, loading: false, decode: action.payload, encode: "" };
    case ENCODE_SUCCESS:
      return { ...state, loading: false, encode: action.payload, decode: "" };
    case SET_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
