import React, { useState, useEffect, useRef } from "react";
import Banniere from "../banniere/banniere";
import banniereData from "../../data/banniereData";

import styles from "./listeRecits.module.css";

const ListeRecits = () => {
  const bannieres = banniereData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannieresPerSlide = 4;
  const containerRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Calculate total number of pages
  const totalPages = Math.ceil(bannieres.length / bannieresPerSlide);

  // Check window size on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Common breakpoint for mobile
    };

    // Initialize on mount
    checkMobile();

    // Update on resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle slide transition
  const slideToIndex = (index) => {
    if (isMobile) return; // No sliding on mobile

    if (containerRef.current) {
      setIsTransitioning(true);
      containerRef.current.style.transform = `translateX(-${
        (index * 100) / totalPages
      }%)`;

      // Reset the transitioning state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Match this with your CSS transition duration
    }
  };

  useEffect(() => {
    if (!isMobile) {
      slideToIndex(currentIndex / bannieresPerSlide);
    }
  }, [currentIndex, isMobile]);

  const handleNext = () => {
    // Prevent multiple clicks during transition
    if (isTransitioning) return;

    // Verify we can still advance
    if (currentIndex + bannieresPerSlide < bannieres.length) {
      setCurrentIndex(currentIndex + bannieresPerSlide);
    }
  };

  const handlePrev = () => {
    // Prevent multiple clicks during transition
    if (isTransitioning) return;

    // Verify we can still go back
    if (currentIndex - bannieresPerSlide >= 0) {
      setCurrentIndex(currentIndex - bannieresPerSlide);
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselViewport}>
        <div
          ref={containerRef}
          className={styles.bannieres}
          style={
            !isMobile
              ? {
                  width: `${totalPages * 100}%`,
                  display: "flex",
                  transition: "transform 0.5s ease-in-out",
                }
              : {}
          }
        >
          {isMobile
            ? // Mobile view - show all items in a column
              bannieres.map((banniere) => (
                <a
                  href={banniere.link || "#"}
                  key={banniere.title}
                  className={styles.banniereLink}
                >
                  <Banniere objBanniere={banniere} />
                </a>
              ))
            : // Desktop view - show items in sliding carousel
              bannieres.map((banniere) => (
                <a
                  href={banniere.link || "#"}
                  key={banniere.title}
                  className={styles.banniereLink}
                  style={{
                    flex: `0 0 ${100 / bannieres.length}%`,
                  }}
                >
                  <Banniere objBanniere={banniere} />
                </a>
              ))}
        </div>
      </div>

      {!isMobile && (
        <div className={styles.navigationButtons}>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`${styles.navButton} ${
              currentIndex === 0 ? styles.disabled : ""
            }`}
          >
            Précédent
          </button>

          <div className={styles.pageIndicator}>
            <span>
              {Math.floor(currentIndex / bannieresPerSlide) + 1} /
              {Math.ceil(bannieres.length / bannieresPerSlide)}
            </span>
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex + bannieresPerSlide >= bannieres.length}
            className={`${styles.navButton} ${
              currentIndex + bannieresPerSlide >= bannieres.length
                ? styles.disabled
                : ""
            }`}
          >
            Suivant
          </button>
        </div>
      )}
    </div>
  );
};

export default ListeRecits;
