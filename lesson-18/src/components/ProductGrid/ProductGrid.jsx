import React from "react";
import ProductCard from "../ProductCard/ProductCard";

import styles from "./ProductGrid.module.css";

export default function ProductGrid({ products }) {
  return (
    <div className={styles.Grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
