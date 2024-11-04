export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

export function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
}

export function updateQuantity(productId, quantity) {
  return {
    type: UPDATE_QUANTITY,
    payload: {
      productId,
      quantity,
    },
  };
}
