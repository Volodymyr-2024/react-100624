import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const context = useContext(CartContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.images[0]} alt={product.title} />
            <p>{product.title}</p>
            <p>${product.price}</p>
            <button
              onClick={() => {
                context.addToCart(product);
              }}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
