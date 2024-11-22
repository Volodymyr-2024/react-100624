import React from "react";
import styles from "./Cart.module.css";
import CartTotals from "../CartTotals/CartTotals";
import { useCartContext } from "../../context/CartContextProvider";
import CartCard from "../CartCard/CartCard";

export default function Cart() {
  const context = useCartContext();

  return (
    <div className={styles.Wrapper}>
      <div className={styles.CartList}>
        {context.cartItems.map((item) => (
          <CartCard key={item.id} product={item} />
        ))}
      </div>
      <CartTotals cartItems={context.cartItems} />
    </div>
  );
}
