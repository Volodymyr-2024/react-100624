import LoadingBar from "react-top-loading-bar";
import Posts from "./components/Posts";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCategories } from "./redux/slices/categories/categoriesSlice";
import Categories from "./components/Categories";
import Breadcrumbs from "./components/Breadcrumbs";

const links = [
  {
    label: "Main Page",
    url: "/",
  },
  {
    label: "Categories",
    url: "/categories",
  },
  // {
  //   label: "Dry & Wet Food",
  //   url: "/categories/5",
  // },
  // {
  //   label: "Dry Dog Food Brand Name",
  //   url: "/products/4",
  // },
];

function App() {
  const loadingRef = useRef(null);
  const status = useSelector((store) => store.posts.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "loading") {
      loadingRef.current.continuousStart();
    } else {
      loadingRef.current.complete();
    }
  }, [status]);

  useEffect(() => {
    // Запрашиваем список категорий, и потом каждые 5 минут
    dispatch(fetchCategories());
    // Сохраняем id интервала в переменную
    const intervalId = setInterval(() => {
      dispatch(fetchCategories());
    }, 5 * 69 * 1000);

    // Возвращаем функцию, которая очистит интервал
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);

  return (
    <div>
      <Breadcrumbs links={links} />
      <LoadingBar color="#0172ad" ref={loadingRef} />
      <Posts />
      <Categories />
    </div>
  );
}

export default App;
