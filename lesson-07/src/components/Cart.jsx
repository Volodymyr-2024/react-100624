import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { getCartTotalPrice } from "../utils";

export default function Cart() {
  const context = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      <details>
        <summary>Cart content</summary>
        <pre>{JSON.stringify(context, null, 2)}</pre>
      </details>
      <p>Total in cart: {context.cart.length}</p>
      <p>Total price: ${getCartTotalPrice(context.cart)}</p>
      <button onClick={context.emptyCart}>Clear cart</button>
    </div>
  );
}
