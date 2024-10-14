import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import CartProvider from "./components/CartProvider";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Wrapper from "./components/Wrapper";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
      }}
    >
      <Wrapper>
        <h1>Shop</h1>
      </Wrapper>
      <ThemeSwitcher />
      <CartProvider>
        <Cart />
        <ProductList />
      </CartProvider>
    </ThemeContext.Provider>
  );
}

export default App;
