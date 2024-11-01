import React from "react";
import { getProductImage } from "../utils.js";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
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
        <Link to={`/products/${product.id}`}>Details</Link>
      </td>
    </tr>
  );
};

export default ProductItem;
