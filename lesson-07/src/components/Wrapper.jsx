export default function Wrapper({ children }) {
  return (
    <>
      <header style={{ border: "1px solid red" }}>Header</header>
      <main style={{ border: "1px solid purple" }}>{children}</main>
      <footer style={{ border: "1px solid blue" }}>Footer</footer>
    </>
  );
}
