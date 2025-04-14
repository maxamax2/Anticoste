import styles from "./banniere.module.css";

const Banniere = ({ objBanniere }) => {
  return (
    <div className={styles.banniere}>
      <h1 className={styles.banniereTitle}>{objBanniere.title}</h1>
      <img
        className={styles.img}
        src={objBanniere.photoName}
        alt={objBanniere.title}
      />
    </div>
  );
};

export default Banniere;
