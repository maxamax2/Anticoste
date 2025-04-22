import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.header__logo}
        src="../../assets/svg/rose.svg"
        alt="Rose des vents"
      />
      <h1 className={styles.header__title}>Anticoste</h1>
    </header>
  );
};

export default Header;
