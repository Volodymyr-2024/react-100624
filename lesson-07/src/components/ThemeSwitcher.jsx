import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const context = useContext(ThemeContext);

  console.log(context);

  function handleToggleClick() {
    context.setTheme(context.theme === "light" ? "dark" : "light");
  }

  return (
    <div>
      <p>Current theme: {context.theme}</p>
      <button onClick={handleToggleClick}>Toggle</button>
    </div>
  );
}
