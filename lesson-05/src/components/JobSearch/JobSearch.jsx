import styles from "./JobSearch.module.css";
import lupa from "../../assets/Lupa.svg";
import globus from "../../assets/Globe.svg";

export default function JobSearch() {
  return (
    <div className={styles.jobSearch}>
      <h1 className={styles.jobSearchTitle}>
        Один клик <br /> и работа в кармане
      </h1>
      <div className={styles.jobSearchInput}>
        <img src="/Lupa.svg" alt="" className={styles.lupa} />
        <input
          className={styles.searchPosition}
          type="text"
          placeholder="Должность или компания"
        />
        <img src={globus} alt="" className={styles.globus} />
        <input
          className={styles.searchSity}
          type="text"
          placeholder="Город, Страна"
        />
        <button className={styles.btnSearch}>Поиск</button>
      </div>
    </div>
  );
}
