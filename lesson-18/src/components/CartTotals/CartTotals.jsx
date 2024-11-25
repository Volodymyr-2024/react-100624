import { useMemo } from "react";
import styles from "./CartTotals.module.css";
import productCardStyles from "../ProductCard/ProductCard.module.css";
import { formatMoney } from "../../utils";

export default function CartTotals({ cartItems }) {
  function calculateTotalPrice(items) {
    return items.reduce((acc, item) => Number(acc) + Number(item.price), 0);
  }

  const totalPrice = useMemo(() => calculateTotalPrice(cartItems), [cartItems]);

  return (
    <div className={styles.CartTotals}>
      <h2>Итого</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <hr />
      <p className={productCardStyles.PriceTitle}>Цена:</p>
      <p className={productCardStyles.PriceContent}>
        {formatMoney(totalPrice)}
      </p>
    </div>
  );
}
