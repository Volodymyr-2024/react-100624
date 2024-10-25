import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem.jsx";
import ProductForm from "./ProductForm.jsx";
import ProductAddForm from "./ProductAddForm.jsx";
import ProductEditForm from "./ProductEditForm.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

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
      <h1>Shop Admin Dashboard</h1>

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
            <ProductItem
              key={product.id}
              product={product}
              handleSelected={setSelectedId}
            />
          ))}
        </tbody>
      </table>

      {selectedId ? <ProductEditForm id={selectedId} /> : <ProductAddForm />}
    </div>
  );
}

export default App;
