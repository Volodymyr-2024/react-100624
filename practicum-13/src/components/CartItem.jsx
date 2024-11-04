export default function CartItem({ product, removeFromCart, updateQuantity }) {
  return (
    <li>
      <img src={product.image} alt={product.title} />
      {product.title} - <span>${product.price}</span>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
      <input
        type="number"
        value={product.quantity}
        onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
      />
    </li>
  );
}
