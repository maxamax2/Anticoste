import { useState } from "react";
import styles from "./subCarousel.module.css";

const SubCarousel = ({ subCarousel, onClose }) => {
  const [item, setItem] = useState(subCarousel[0]);
  const [animationClass, setAnimationClass] = useState(""); // State to track animation class

  const handlePrev = () => {
    const currentIndex = subCarousel.findIndex((i) => i === item);
    const prevIndex =
      (currentIndex - 1 + subCarousel.length) % subCarousel.length;
    setAnimationClass(styles.fadeOut); // Set fade-out animation
    setTimeout(() => {
      setItem(subCarousel[prevIndex]);
      setAnimationClass(styles.fadeIn); // Set fade-in animation
      setTimeout(() => setAnimationClass(""), 500); // Reset animation after transition
    }, 500); // Match the CSS transition duration
  };

  const handleNext = () => {
    const currentIndex = subCarousel.findIndex((i) => i === item);
    const nextIndex = (currentIndex + 1) % subCarousel.length;
    setAnimationClass(styles.fadeOut); // Set fade-out animation
    setTimeout(() => {
      setItem(subCarousel[nextIndex]);
      setAnimationClass(styles.fadeIn); // Set fade-in animation
      setTimeout(() => setAnimationClass(""), 500); // Reset animation after transition
    }, 500); // Match the CSS transition duration
  };

  return (
    <div className={styles.subCarousel}>
      <button className={styles.closeButton} onClick={onClose}>
        <img src="/Anticoste/assets/svg/close.svg" alt="Close" />
      </button>
      <div className={styles.content}>
        <button className={styles.prevButton} onClick={handlePrev}>
          <img src="/Anticoste/assets/svg/previous.svg" alt="Previous button" />
        </button>
        <div className={styles.contentImage}>
          <p className={styles.texte}>{item.texte}</p>
          <img
            className={`${styles.image} ${animationClass}`}
            src={item.photoName}
            alt={item.title || "SubCarousel Image"}
          />
          <div className={styles.info}>
            <h2 className={styles.infoTitle}>{item.title}</h2>
            <p className={styles.reference}>{item.reference}</p>
          </div>
        </div>
        <button className={styles.nextButton} onClick={handleNext}>
          <img src="/Anticoste/assets/svg/next.svg" alt="Next button" />
        </button>
      </div>
    </div>
  );
};

export default SubCarousel;
