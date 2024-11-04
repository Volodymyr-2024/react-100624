import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./actions";

const initialState = [];

export const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case ADD_TO_CART: {
      const alreadyExists = state.find((p) => p.id === action.payload.id);
      if (alreadyExists) {
        return state.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        });
      } else {
        return [
          ...state,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }
    }
    case REMOVE_FROM_CART:
      return state.filter((product) => product.id !== action.payload);
    case UPDATE_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            quantity: action.payload.quantity,
          };
        }
        return product;
      });
    default:
      return state;
  }
};
