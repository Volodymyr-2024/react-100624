const lightStyles = {
  backgroundColor: "lightblue",
  color: "black",
  display: "flex",
  justifyContent: "space-between",
  padding: "5px 15px 5px 15px",
};

const darkStyles = {
  backgroundColor: "black",
  color: "lightblue",
  display: "flex",
  justifyContent: "space-between",
  padding: "5px 15px 5px 15px",
};
export default function Footer({ theme }) {
  return (
    <footer style={theme === "light" ? lightStyles : darkStyles}>
      <a href="#" style={theme === "light" ? lightStyles : darkStyles}>
        Copyright
      </a>
      <a href="#" style={theme === "light" ? lightStyles : darkStyles}>
        Links
      </a>
    </footer>
  );
}
