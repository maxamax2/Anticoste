import styles from "./subCarousel.module.css";

const SubCarousel = ({ subCarousel, onClose }) => {
  const firstItem = subCarousel[0]; // Display the first item for now

  return (
    <div className={styles.subCarousel}>
      <button className={styles.closeButton} onClick={onClose}>
        Close
      </button>
      <img
        className={styles.image}
        src={firstItem.photoName}
        alt={firstItem.title || "SubCarousel Image"}
      />
      <div className={styles.info}>
        <h2>{firstItem.title}</h2>
        <p>{firstItem.texte}</p>
        <small>{firstItem.reference}</small>
      </div>
    </div>
  );
};

export default SubCarousel;
