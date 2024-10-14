import { useState } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function emptyCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
