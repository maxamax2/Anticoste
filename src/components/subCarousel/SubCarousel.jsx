import { useState } from "react";
import styles from "./subCarousel.module.css";

const SubCarousel = ({ subCarousel, onClose }) => {
  // const firstItem = subCarousel[0];
  const [item, setItem] = useState(subCarousel[0]);

  const handlePrev = () => {
    const currentIndex = subCarousel.findIndex((i) => i === item);
    const prevIndex =
      (currentIndex - 1 + subCarousel.length) % subCarousel.length;
    setItem(subCarousel[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = subCarousel.findIndex((i) => i === item);
    const nextIndex = (currentIndex + 1) % subCarousel.length;
    setItem(subCarousel[nextIndex]);
  };

  return (
    <div className={styles.subCarousel}>
      <button className={styles.closeButton} onClick={onClose}>
        Close
      </button>
      <img
        className={styles.image}
        src={item.photoName}
        alt={item.title || "SubCarousel Image"}
      />
      <div className={styles.info}>
        <h2>{item.title}</h2>
        <small>{item.reference}</small>
      </div>

      <div className={styles.navigation}>
        <button onClick={handlePrev} className={styles.prevButton}>
          &lt;
        </button>
        <button onClick={handleNext} className={styles.nextButton}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SubCarousel;
