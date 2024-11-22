import React from "react";
import { useCartContext } from "../context/CartContextProvider";
import Cart from "../components/Cart/Cart";

export default function CartPage() {
  const cartContext = useCartContext();

  return (
    <div>
      <h1>Cart</h1>
      <Cart />
      <pre>{JSON.stringify(cartContext, null, 2)}</pre>
    </div>
  );
}
