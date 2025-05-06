import { useState } from "react";
import styles from "./subCarousel.module.css";

const SubCarousel = ({ subCarousel, onClose }) => {
  const [item, setItem] = useState(subCarousel[0]);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handlePrev = () => {
    const currentIndex = subCarousel.findIndex((i) => i === item);
    const prevIndex =
      (currentIndex - 1 + subCarousel.length) % subCarousel.length;
    setItem(subCarousel[prevIndex]);
    setIsTextVisible(false);
  };

  const handleNext = () => {
    const currentIndex = subCarousel.findIndex((i) => i === item);
    const nextIndex = (currentIndex + 1) % subCarousel.length;
    setItem(subCarousel[nextIndex]);
    setIsTextVisible(false);
  };

  const toggleTextVisibility = () => {
    setIsTextVisible((prev) => !prev);
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
          <img
            className={styles.image}
            src={item.photoName}
            alt={item.title || "SubCarousel Image"}
          />
          <div
            className={`${styles.info} ${isTextVisible ? styles.showText : ""}`}
          >
            <h2 className={styles.infoTitle}>{item.title}</h2>
            <p className={styles.reference}>{item.reference}</p>
          </div>
          <button
            className={`${styles.toggleButton} ${
              isTextVisible ? styles.rotated : ""
            }`}
            onClick={toggleTextVisibility}
          >
            <svg
              className={styles.toggleIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M10.94 7.94c.28-.28.66-.44 1.06-.44s.78.16 1.06.44l5.66 5.66c.14.14.25.31.32.49.07.18.11.37.11.57s-.04.39-.11.57c-.07.18-.18.35-.32.49-.14.14-.31.25-.49.32-.18.07-.37.11-.57.11s-.39-.04-.57-.11c-.18-.07-.35-.18-.49-.32L12 11.12l-4.6 4.6c-.14.14-.31.25-.49.32-.18.07-.37.11-.57.11s-.39-.04-.57-.11c-.18-.07-.35-.18-.49-.32-.14-.14-.25-.31-.32-.49-.07-.18-.11-.37-.11-.57s.04-.39.11-.57c.07-.18.18-.35.32-.49l5.66-5.66z"
                fill="#FFF8F0"
              />
            </svg>
          </button>
        </div>
        <button className={styles.prevButton} onClick={handlePrev}>
          <img src="/Anticoste/assets/svg/next.svg" alt="Previous button" />
        </button>
      </div>
    </div>
  );
};

export default SubCarousel;
