import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <div className={styles.logo}>
          <span>Cooljob</span>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#">Поиск работы</a>
            </li>
            <li>
              <a href="#">Поиск стартапов</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.header__right}>
        <a href="#">Регистрация</a>
        <button>Вход</button>
      </div>
    </header>
  );
};

export default Header;
