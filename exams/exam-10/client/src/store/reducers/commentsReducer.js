import {
  DELETE_COMMENT,
  FETCH_COMMENTS_BY_ID_SUCCESS,
  POST_COMMENT_SUCCESS,
  SET_ERROR_COMMENT,
  SET_LOADING_COMMENT
} from "../actions/actionsType";

const initialState = {
  comments: [],
  loading: false,
  error: null
};

export function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_COMMENT:
      return { ...state, loading: true };
    case SET_ERROR_COMMENT:
      return { ...state, loading: false, error: action.payload.error };
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload.comments],
        loading: false,
        error: null
      };
    case FETCH_COMMENTS_BY_ID_SUCCESS:
      return {
        ...state,
        comments: action.payload.comments,
        loading: false,
        error: null
      };
    case DELETE_COMMENT:
      return {
        ...state,
        loading: false,
        error: null,
        comments: state.comments.filter(el => el.id !== action.id)
      };
    default:
      return state;
  }
}
