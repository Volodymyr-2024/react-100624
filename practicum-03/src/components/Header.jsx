const lightStyles = {
  backgroundColor: "lightblue",
  color: "black",
  padding: "32px",
};

const darkStyles = {
  backgroundColor: "black",
  color: "lightblue",
  padding: "32px",
};

export default function Header({ theme, toggleTheme }) {
  return (
    <header style={theme === "light" ? lightStyles : darkStyles}>
      Themeswitcher: <button onClick={toggleTheme}>{theme}</button>
    </header>
  );
}
