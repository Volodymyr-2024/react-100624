export const PRODUCTS_URL =
  "https://6718a7e07fc4c5ff8f4a6ab9.mockapi.io/products";
export const CART_URL = "https://6718a7e07fc4c5ff8f4a6ab9.mockapi.io/cart";

export function formatMoney(amount) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}
