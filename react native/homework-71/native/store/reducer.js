import { PICK_PIZZA, DELETE_PIZZA, CLEAR_STATE } from "./actions";

const initialState = {
  orders: [],
  isComplete: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PICK_PIZZA: {
      const orders = [...state.orders];
      if (orders.findIndex(el => el.id === action.payload.id) === -1) {
        orders.push(action.payload);
      } else {
        orders.map(el =>
          el.id === action.payload.id ? { ...el, ...el.amount++ } : el
        );
      }
      return {
        ...state,
        orders,
        isComplete: false
      };
      return { ...state };
    }
    case DELETE_PIZZA: {
      return {
        ...state,
        orders: state.orders.filter(el => el.id !== action.payload)
      };
      return { ...state };
    }
    case CLEAR_STATE: {
      return {
        ...initialState,
        isComplete: true
      };
    }
    default:
      return state;
  }
};

export default reducer;
