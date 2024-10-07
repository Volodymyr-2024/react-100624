import styles from "./JobList.module.css";
import JobItem from "../JobItem/JobItem";

import sonyLogo from "../../assets/Sony.png";
import facebookLogo from "../../assets/facebook.png";
import colaLogo from "../../assets/Cola.svg";

const jobCards = [
  {
    category: "Финансы",
    color: "#5182FF",
    position: "Менеджер по управлению финансами в крупной компании",
    city: "Осака",
    country: "Япония",
    company: "SONY",
    posted: "3 дня назад",
    logo: sonyLogo,
  },
  {
    color: "#FF51EE",
    category: "Продажи",
    position: "Специалист по продажам",
    city: "Киото",
    country: "Япония",
    company: "Facebook",
    posted: "7 дней назад",
    logo: facebookLogo,
  },
  {
    color: "#FF9051",
    category: "Мультимедиа",
    position: "Системный администратор",
    city: "Токио",
    country: "Япония",
    company: "SONY",
    posted: "3 дня назад",
    logo: sonyLogo,
  },
  {
    color: "#F84242",
    category: "Дизайн",
    position: "Дизайнер интерьера в профессиональную студию в центре города",
    city: "Йокогама",
    country: "Япония",
    company: "Facebook",
    posted: "7 дней назад",
    logo: facebookLogo,
  },
  {
    color: "#58D94D",
    category: "Служба поддержки",
    position: "Оператор колл центра",
    city: "Токио",
    country: "Япония",
    company: "CocaCola",
    posted: "1 день назад",
    logo: colaLogo,
  },
  {
    color: "#383838",
    category: "Грузоперевозки",
    position: "Водитель на дальние дистанции",
    city: "Кобе",
    country: "Япония",
    company: "CocaCola",
    posted: "1 день назад",
    logo: colaLogo,
  },
];

export default function JobList() {
  return (
    <>
      <h2 className={styles.header}>Новые вакансии</h2>
      <h3 className={styles.subHeader}>
        Найди работу своей мечты прямо сейчас
      </h3>
      <div className={styles.items}>
        {jobCards.map((val, index) => {
          return (
            <JobItem
              key={index}
              backgroundColor={val.color}
              name={val.category}
              vacancy={val.position}
              city={val.city}
              country={val.country}
              logo={val.logo}
              date={val.posted}
              company={val.company}
            />
          );
        })}
      </div>
      <div className={styles.btns}>
        <button className={styles.btn}>Все вакансии</button>
      </div>
    </>
  );
}
