import styles from "./controles.module.css";

const Controles = ({ currentPage, totalPages, onNext, onPrevious }) => {
  const paginationWidth = ((currentPage + 1) / totalPages) * 99.5;

  return (
    <div className={styles.controles}>
      <div className={styles.pagination}>
        <div
          className={styles.paginationContainer}
          style={{ width: `${paginationWidth}%` }}
        ></div>
      </div>
      <div className={styles.navigation}>
        <button
          className={`${styles.button} ${styles.precedentButton}`}
          onClick={onPrevious}
          disabled={currentPage === 0}
        >
          <img src="../Anticoste/assets/svg/previous.svg" alt="Previous" />
        </button>
        <button
          className={`${styles.button} ${styles.suivantButton}`}
          onClick={onNext}
          disabled={currentPage === totalPages - 1}
        >
          <img src="../Anticoste/assets/svg/next.svg" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Controles;
