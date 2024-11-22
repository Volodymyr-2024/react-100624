import React from "react";
import styles from "./Main.module.css";

export default function Main({ children }) {
  return (
    <div className={styles.Wrapper}>
      <main className={styles.Main}>{children}</main>
    </div>
  );
}
