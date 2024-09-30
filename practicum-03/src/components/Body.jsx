import clsx from "clsx";

import styles from "./Body.module.css";

export default function Body({ theme }) {
  return (
    <Main
      className={clsx({
        [styles.Main]: true,
        [styles.Light]: theme === "light",
        [styles.Dark]: theme === "dark",
      })}
    >
      <section>
        <h2>Paragraph 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum vitae
          assumenda aliquid possimus doloribus distinctio nesciunt temporibus
          quasi animi repellendus, est sunt, doloremque quod! Minus iusto hic
          qui nostrum quas!
        </p>
      </section>
      <section>
        <h2>Paragraph 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum vitae
          assumenda aliquid possimus doloribus distinctio nesciunt temporibus
          quasi animi repellendus, est sunt, doloremque quod! Minus iusto hic
          qui nostrum quas!
        </p>
      </section>
    </main>
  );
}
