export const PICK_PIZZA = "PICK_PIZZA";
export const DELETE_PIZZA = "DELETE_PIZZA";
export const CLEAR_STATE = "CLEAR_STATE";

export const pickPizza = payload => ({ type: PICK_PIZZA, payload });
export const deletePizza = payload => ({ type: DELETE_PIZZA, payload });
export const clearState = () => ({ type: CLEAR_STATE });
