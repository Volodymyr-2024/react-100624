export function getCartTotalPrice(cart) {
  let total = 0;
  cart.forEach((product) => {
    total += product.price;
  });
  return total;
}
