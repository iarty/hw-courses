import {
  CREATE_DISH,
  DELETE_DISH,
  EDIT_DISH,
  SET_ERROR,
  GET_DISHES_SUCCESS,
  GET_ONE_DISH,
  SET_LOADING
} from "../actions/actionType";

const initialState = {
  dishes: [],
  dish: {},
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };

    case GET_DISHES_SUCCESS: {
      const dishes = Object.keys(action.payload).map(key => ({
        ...action.payload[key],
        id: key
      }));
      return {
        ...state,
        error: null,
        dishes,
        loading: false
      };
    }

    case CREATE_DISH: {
      return {
        ...state,
        error: null,
        loading: false
      };
    }

    case EDIT_DISH: {
      return {
        ...state,
        error: null,
        dish: action.payload,
        loading: false
      };
    }

    case GET_ONE_DISH: {
      return {
        ...state,
        error: null,
        dish: action.payload,
        loading: false
      };
    }

    case DELETE_DISH: {
      return {
        ...state,
        loading: false,
        error: null,
        dishes: state.dishes.filter(dish => dish.id !== action.id)
      };
    }

    case SET_ERROR:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
};
