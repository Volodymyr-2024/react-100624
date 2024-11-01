import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetailsPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);

  async function fetchProducts() {
    const URL =
      import.meta.env.VITE_API_ENDPOINT +
      "/collections/shop_products/records/" +
      params.id;

    try {
      const response = await axios.get(URL);

      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [params.id]);

  return (
    <div>
      <h2>Details about {product?.title}</h2>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
}
