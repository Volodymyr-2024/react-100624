import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BACKEND_URL } from "../api";
import { fetchCategories } from "../redux/slices/categories/categoriesSlice";

export default function Categories() {
  const categories = useSelector((store) => store.categories.categories);
  const loading = useSelector((store) => store.categories.loading);
  const error = useSelector((store) => store.categories.error);

  const dispatch = useDispatch();

  function handleRefreshClick() {
    dispatch(fetchCategories());
  }

  if (error) {
    return (
      <div>
        Ошибка: {error}{" "}
        <button onClick={handleRefreshClick}>Попробовать снова</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.title}{" "}
            <img
              src={BACKEND_URL + category.image}
              width={50}
              alt={category.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
