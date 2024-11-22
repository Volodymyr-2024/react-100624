import React from "react";
import { useCartContext } from "../context/CartContextProvider";

export default function CartPage() {
  const cartContext = useCartContext();

  return (
    <div>
      <h1>Cart</h1>
      <pre>{JSON.stringify(cartContext, null, 2)}</pre>
    </div>
  );
}
