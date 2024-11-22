import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Content}>
        <div>
          <h1 className={styles.Brand}>Сникер - магазин</h1>
        </div>

        <nav>
          <ul className={styles.Nav}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.Link + " " + styles.Active}`
                    : styles.Link
                }
                to="/"
              >
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.Link + " " + styles.Active}`
                    : styles.Link
                }
                to="/cart"
              >
                Корзина
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.Link + " " + styles.Active}`
                    : styles.Link
                }
                to="/contacts"
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
