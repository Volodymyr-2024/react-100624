import styles from "./JobItem.module.css";
import globe from "../../assets/Globe.svg";

export default function JobItem({
  backgroundColor,
  name,
  vacancy,
  city,
  country,
  logo,
  company,
  date,
  location,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          className={styles.circle}
          style={{
            backgroundColor: backgroundColor,
          }}
        ></div>
        <h4>{name}</h4>
      </div>
      <div className={styles.body}>
        <h3>{vacancy}</h3>
        <div>
          <img src={globe} alt="globe" />
          {city}, {country}
        </div>
        <div className={styles.footer}>
          <img src={logo} alt="logo" />
          <p>{company}, </p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}
