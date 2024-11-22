import React from "react";

import styles from "./ProductCard.module.css";
import { useCartContext } from "../../context/CartContextProvider";
import { formatMoney } from "../../utils";

export default function ProductCard({ product }) {
  const { addToCart } = useCartContext();

  function handleAddToCartClick() {
    addToCart(product);
  }

  return (
    <div className={styles.Wrapper}>
      <p className={styles.SaleBanner}>SALE</p>
      <div className={styles.CardTop}>
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
      </div>
      <div className={styles.CardBottom}>
        <div>
          <p className={styles.PriceTitle}>Цена:</p>
          <p className={styles.PriceContent}>{formatMoney(product.price)}</p>
        </div>
        <button
          className={styles.Button}
          onClick={handleAddToCartClick}
        ></button>
      </div>
    </div>
  );
}
