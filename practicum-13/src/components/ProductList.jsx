import { useState, useEffect } from "react";
import { connect } from "react-redux";

import { addToCart } from "../redux/actions";

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <div>
              {product.title} - <span>${product.price}</span>
              <button
                onClick={() => {
                  addToCart(product);
                }}
              >
                Add to cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
  };
}

export default connect(null, mapDispatchToProps)(ProductList);
