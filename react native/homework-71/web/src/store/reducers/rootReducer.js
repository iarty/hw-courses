import { combineReducers } from "redux";
import dishesReducer from "./dishesReducer";
import orderReducer from "./orderReducer";

export const rootReducer = combineReducers({
  orders: orderReducer,
  dishes: dishesReducer
});
