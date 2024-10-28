import { Routes, Route, NavLink, useParams } from "react-router-dom";
import clsx from "clsx";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <header>
        <nav>
          <NavLink
            className={({ isActive }) =>
              clsx({
                [styles.Link]: true,
                [styles.active]: isActive,
              })
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx({
                [styles.Link]: true,
                [styles.active]: isActive,
              })
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              clsx({
                [styles.Link]: true,
                [styles.active]: isActive,
              })
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/:city" element={<AboutPage />} />
          <Route path="/contact" element={<ContactsPage />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
