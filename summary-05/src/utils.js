export function getProductImage(id, imageId) {
  return `${import.meta.env.VITE_API_ENDPOINT}/files/shop_products/${id}/${imageId}?thumb=450x450`;
}
