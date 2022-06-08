import { actionType, stateType } from "../types";

export const productReducer = (
  state: stateType,
  { type, payload }: actionType
) => {
  console.log(state, type, payload);
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== payload.id),
      };
    case "INCREMENT_QTY":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case "DECREMENT_QTY":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === payload.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    case "SAVE_FOR_LATER": {
      const product = state.cart.find((product) => product.id === payload.id);
      if (product) {
        return {
          ...state,
          cart: state.cart.filter((product) => product.id !== payload.id),
          saved: [...state.saved, product],
        };
      }
      return state;
    }

    case "MOVE_TO_CART": {
      const product = state.saved.find((product) => product.id === payload.id);
      if (product) {
        return {
          ...state,
          cart: [...state.cart, product],
          saved: state.saved.filter((product) => product.id !== payload.id),
        };
      }
      return state;
    }

    default:
      return state;
  }
};
