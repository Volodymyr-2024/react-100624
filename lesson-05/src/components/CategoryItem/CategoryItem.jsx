import styles from "./Categoryitem.module.css";

const Card = ({ title, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
