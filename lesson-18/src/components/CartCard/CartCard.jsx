import React from "react";

import styles from "./CartCard.module.css";
import { useCartContext } from "../../context/CartContextProvider";
import { formatMoney } from "../../utils";

export default function CartCard({ product }) {
  const { deleteFromCart } = useCartContext();

  function handleDeleteFromCartClick() {
    deleteFromCart(product.id);
  }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.CardTop}>
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
      </div>
      <div className={styles.CardBottom}>
        <div>
          <p className={styles.PriceTitle}>Цена:</p>
          <p className={styles.PriceContent}>{formatMoney(product.price)}</p>
        </div>
        <button className={styles.Button} onClick={handleDeleteFromCartClick}>
          <img src="/trash.svg" alt="delete" />
        </button>
      </div>
    </div>
  );
}
