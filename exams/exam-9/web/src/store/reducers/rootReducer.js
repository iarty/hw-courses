import {
  DELETE_CONTACT,
  FETCH_ERROR,
  FETCH_ONE_SUCCESS,
  FETCH_SUCCESS,
  MODAL_HANDLER,
  SET_LOADING
} from "../actions/actionsType";

const initialState = {
  contacts: [],
  contact: {},
  loading: false,
  error: null,
  toggler: false,
  id: ""
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case MODAL_HANDLER:
      return { ...state, toggler: !state.toggler, id: action.id };
    case SET_LOADING:
      return { ...state, loading: true };
    case FETCH_ERROR:
      return { ...state, error: action.error, loading: false };
    case FETCH_SUCCESS:
      const contacts = Object.keys(action.payload).map(key => ({
        ...action.payload[key],
        id: key
      }));
      return {
        ...state,
        contacts,
        loading: false,
        error: null
      };
    case FETCH_ONE_SUCCESS:
      return {
        ...state,
        contact: action.payload,
        loading: false,
        error: null
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== action.payload),
        loading: false,
        error: null
      };

    default:
      return state;
  }
}
