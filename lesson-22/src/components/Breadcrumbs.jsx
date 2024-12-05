import React from "react";
import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs({ linkss }) {
  return (
    <nav className={styles.Breadcrumbs}>
      <ul className="List" >
        {linkss.map((link) => (
          <li key={link.url}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}