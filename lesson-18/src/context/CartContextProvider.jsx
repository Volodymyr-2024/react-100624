import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { CART_URL } from "../utils";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get(CART_URL)
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  function addToCart(product) {
    axios
      .post(CART_URL, product)
      .then((response) => {
        setCartItems([...cartItems, response.data]);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  function deleteFromCart(id) {
    axios
      .delete(`${CART_URL}/${id}`)
      .then(() => {
        setCartItems(cartItems.filter((item) => item.id !== id));
      })
      .catch((e) => {
        console.error(e);
      });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        deleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
