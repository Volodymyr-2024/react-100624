import { useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    // Способ с использованием функции обновления состояния
    // setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

    // Более простой способ, без гарантии, что предыдущее состояние было "light"
    setTheme(theme === "light" ? "dark" : "light");

    // Классический способ с помощью if
    // if (theme === "light") {
    //   setTheme("dark");
    // } else {
    //   setTheme("light");
    // }
  }

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Body theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
