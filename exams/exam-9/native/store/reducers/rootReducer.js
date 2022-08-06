import {
  FETCH_ERROR,
  FETCH_ONE_SUCCESS,
  FETCH_SUCCESS,
  MODAL_HANDLER,
  SET_LOADING
} from "../actions/actionsType";

const initialState = {
  contacts: [],
  contact: {},
  id: "",
  loading: false,
  error: null,
  toggler: false
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      const contacts = Object.keys(action.payload).map(key => ({
        ...action.payload[key],
        id: key
      }));
      return { ...state, contacts, error: null, loading: false };
    case FETCH_ONE_SUCCESS:
      return { ...state, contact: action.payload, loading: false, error: null };
    case FETCH_ERROR:
      return { ...state, error: action.error, loading: false };
    case MODAL_HANDLER:
      return { ...state, toggler: !state.toggler, id: action.id };
    default:
      return state;
  }
}
