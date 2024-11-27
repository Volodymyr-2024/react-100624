import { useDispatch, useSelector } from "react-redux";
import CounterButtons from "./components/CounterButtons";
import CounterNumber from "./components/CounterNumber";
import Language from "./components/Language";
import { useEffect } from "react";
import { fetchCategories } from "./redux/dataSlice";

function App() {
  const isLoading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);
  const categories = useSelector((state) => state.data.categories);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(fetchCategories());
  }

  return (
    <div>
      <h1>Redux Toolkit</h1>
      <button onClick={handleClick}>Fetch categories</button>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <CounterNumber />
      <CounterButtons />
      <Language />
      <p>Categories: {categories.length}</p>
    </div>
  );
}

export default App;
