import styles from "./CategoryList.module.css";
import CategoryItem from "../CategoryItem/CategoryItem";

import financeImage from "../../assets/Finance.svg";
import truckImage from "../../assets/Truck.svg";
import designImage from "../../assets/Design.svg";
import utensilsImage from "../../assets/Utensils.svg";
import medicineImage from "../../assets/Medicine.svg";
import mediaImage from "../../assets/Media.svg";
import supportImage from "../../assets/Support.svg";
import managementImage from "../../assets/Management.svg";
import salesImage from "../../assets/Cart.svg";

const dataItems = [
  {
    imgUrl: financeImage,
    title: "Финансы",
  },
  {
    imgUrl: truckImage,
    title: "Грузоперевозки",
  },

  {
    imgUrl: designImage,
    title: "Дизайн",
  },

  {
    imgUrl: utensilsImage,
    title: "Ресторанный бизнес",
  },
  {
    imgUrl: medicineImage,
    title: "Медицина",
  },
  {
    imgUrl: mediaImage,
    title: "Мультимедиа",
  },
  {
    imgUrl: supportImage,
    title: "Служба поддержки",
  },
  {
    imgUrl: managementImage,
    title: "Менеджмент",
  },
  {
    imgUrl: salesImage,
    title: "Продажи",
  },
];

export default function CategoryList() {
  return (
    <section className={styles.categoryList}>
      <h2 className={styles.categoryListTitle}>Категории</h2>
      <div className={styles.categoryListItems}>
        {dataItems.map((item, index) => (
          <CategoryItem key={index} title={item.title} imageUrl={item.imgUrl} />
        ))}
      </div>
    </section>
  );
}
