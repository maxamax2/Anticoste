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
      <div className={styles.header}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>

      <div className="content"></div>

      {/* <div className={styles.content}>
        <div className={styles.imageTextuel}>
          <p className={styles.texte}>{item.texte}</p>
          <img
            className={styles.image}
            src={item.photoName}
            alt={item.title || "SubCarousel Image"}
          />
        </div>

        <div className={styles.controls}>

          <div className={styles.navigation}>
            <button onClick={handlePrev} className={styles.prevButton}>
              &lt;
            </button>
            <button onClick={handleNext} className={styles.nextButton}>
              &gt;
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SubCarousel;
