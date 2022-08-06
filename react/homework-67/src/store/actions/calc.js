import { CLEAR_STATE, GET_RESULT, KEY_PRESSED } from "./actionType";

export const keyPressed = param => {
  if (param === "C") {
    return {
      type: CLEAR_STATE
    };
  }

  if (param === "=") {
    return {
      type: GET_RESULT
    };
  }

  return {
    type: KEY_PRESSED,
    payload: param
  };
};
