import React, { useEffect, useState } from "react";
import Controles from "../controles/Controles";
import ListeRecits from "../listeRecits/listeRecit";
import SubCarousel from "../subCarousel/SubCarousel";

import styles from "./main.module.css";

const Main = () => {
  const calculateItemsPerPage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 391) return 7;
    if (screenWidth <= 768) return 3;
    if (screenWidth <= 1000) return 3;
    if (screenWidth >= 2250) return 7;
    return 4;
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 391);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(calculateItemsPerPage());
  const [selectedBanniere, setSelectedBanniere] = useState(null); // Track selected Banniere
  const totalPages = Math.ceil(7 / itemsPerPage); // Dynamically calculate total pages

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 391;
      setIsMobile(mobile);
      setItemsPerPage(calculateItemsPerPage()); // Recalculate items per page on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleBanniereClick = (banniere) => {
    setSelectedBanniere(banniere); // Set the clicked Banniere
  };

  const handleCloseSubCarousel = () => {
    setSelectedBanniere(null); // Close the SubCarousel
  };

  return (
    <div className={styles.main}>
      {selectedBanniere ? (
        <SubCarousel
          subCarousel={selectedBanniere.subCarousel}
          onClose={handleCloseSubCarousel}
        />
      ) : (
        <>
          <ListeRecits
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            onBanniereClick={handleBanniereClick}
          />
          {!isMobile && (
            <Controles
              currentPage={currentPage}
              totalPages={totalPages}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Main;
