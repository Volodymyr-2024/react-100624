import styles from "./Logos.module.css";
import All_Logos from "../../assets/All_Logos.svg";

export default function LogoList() {
  return (
    <div className={styles.logoConteiner}>
      <img src={All_Logos} alt="Company-logo" className="logo" />
    </div>
  );
}
