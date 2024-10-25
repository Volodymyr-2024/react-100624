import React from "react";
import { getProductImage } from "./utils.js";

const ProductItem = ({ product, handleSelected }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>
        <img
          src={getProductImage(product.id, product.mainImage)}
          alt={product.title}
        />
      </td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>
        <button
          onClick={() => {
            handleSelected(product.id);
          }}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
