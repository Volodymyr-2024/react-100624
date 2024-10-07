import styles from "./Footer.module.css";

import linkedInLogo from "../../assets/linkedin.svg";
import GoogleLogo from "../../assets/google.svg";
import TwitterLogo from "../../assets/twitter.svg";
import FacebookLogo from "../../assets/facebook_footer.svg";
const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__up}>
        <h5>Популярные города</h5>
        <ul>
          <li>Осака</li>
          <li>Коясан</li>
          <li>Токио</li>
          <li>Хаконэ</li>
          <li>Наэба</li>
          <li>Томаму</li>
          <li>Йокогама</li>
          <li>Нагоя</li>
          <li>Саппоро</li>
          <li>Кобе</li>
        </ul>
      </div>
      <div className={styles.Footer__down}>
        <div className={styles.logo}>
          <span>Cooljob</span>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#">
                <img src={linkedInLogo} alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={GoogleLogo} alt="Google" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={TwitterLogo} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={FacebookLogo} alt="Facebook" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
