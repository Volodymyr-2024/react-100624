import { Routes, Route, Link } from "react-router-dom";

import ProductListPage from "./pages/ProductListPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <h1>Shop Admin Dashboard</h1>

      <Routes>
        {/* Домашний компонент */}
        <Route path="/" element={<HomePage />} />
        {/* Компонент с таблицей товаров */}
        <Route path="/products" element={<ProductListPage />} />
        {/* Компонент с деталями товара */}
        <Route path="/products/:id" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
