import { actionType, stateType } from "../types";

export const productReducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action?.payload, quantity: 1 }],
      };
    default:
      return state;
  }
};
