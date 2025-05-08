import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.header__logo}
        src="../../Anticoste/assets/svg/rose.svg"
        alt="Rose des vents"
      />
      <h1 className={styles.header__title}>Anticoste</h1>
        <h2 className={styles.second__title}>À propos</h2> 
    </header>
  );
};

export default Header;
