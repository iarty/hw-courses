import {
  DELETE_ORDER,
  GET_ORDERS,
  SET_ERROR,
  SET_LOADING
} from "../actions/actionType";

const initialState = {
  orders: [],
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };

    case GET_ORDERS: {
      const orders = Object.keys(action.payload).map(key => ({
        id: key,
        ...action.payload[key]
      }));
      return { ...state, orders, loading: false, error: null };
    }

    case DELETE_ORDER: {
      return {
        ...state,
        loading: false,
        error: null,
        orders: state.orders.filter(el => el.id !== action.id)
      };
    }

    case SET_ERROR:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
};
