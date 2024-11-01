import axios from "axios";
import { useState, useEffect } from "react";
import ProductItem from "../components/ProductItem.jsx";

export default function ProductListPage() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const URL =
      import.meta.env.VITE_API_ENDPOINT + "/collections/shop_products/records/";

    try {
      const response = await axios.get(URL);
      setProducts(response.data.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
