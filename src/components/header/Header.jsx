import { useState } from "react";
import styles from "./header.module.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <img
          className={styles.header__logo}
          src="../../Anticoste/assets/svg/rose.svg"
          alt="Rose des vents"
        />
        <h1 className={styles.header__title}>Anticoste</h1>
        <h2 className={styles.second__title} onClick={toggleModal}>
          À propos
        </h2>
      </header>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modal__content}>
            <button className={styles.modal__close} onClick={toggleModal}>
              &times;
            </button>
            <h2>À propos</h2>
            <h3>Remerciements</h3>
            <p>
            L’exposition Anticoste a été réalisée dans le cadre d’un projet de recherche-création subventionné par le Fonds de recherche Société et culture 
            (Québec). L’artiste tient à remercier la Division de la gestion de documents et des archives de l’Université de Montréal, 
            la Direction des services aux usagers et aux partenaires de Bibliothèque et Archives nationales du Québec, le service de la Gestion des documents 
            administratifs et archives historiques de l’Université Laval, Bibliothèque et archives Canada, ainsi que Simon Beauregard et Lisanne Nadeau. 
            Que soit également remerciée la Sépaq-Anticosti <a href="https://www.sepaq.com/sepaq-anticosti/">(https://www.sepaq.com/sepaq-anticosti/)</a> qui, à l’été 2011, a facilité le séjour et les 
            déplacements sur l’île.  
            </p>
            <p>Également, de très chaleureux remerciements à Audrey Lahaie et à Sévryna Martel-Lupien qui, à titre d’auxiliaires de recherche, ont contribué de nombreuses manières au projet d’exposition, à Alain Fournier, 
              technicien au Laboratoire intégré de tirage et d’impression numérique de l’École des arts visuels <a href="https://www.art.ulaval.ca/">(https://www.art.ulaval.ca/)</a>, 
              pour les impressions numériques et leur grande qualité. Remerciements aussi au Centre VU <a href="https://vuphoto.org/fr/">(https://vuphoto.org/fr/)</a>, 
              à l’atelier de L’œil de Poisson <a href="https://oeildepoisson.com/">(https://www.oeildepoisson.com/)</a>, 
              ainsi qu’au centre GéoStat de la Bibliothèque de l’Université Lavala <a href="https://www.bibl.ulaval.ca/services/ressources-et-services-specialises/centre-geostat">(https://www.bibl.ulaval.ca/services/centregeostat)</a>.
              </p>

              <img src="../../Anticoste/assets/images/logo_fondRecherche.png" alt="Logo du fond de recherche Société et culture du gouvernement du Québec" />

              <h3>Crédits</h3>
              <h4>Oeuvre de Richard Baillargeon</h4>
              <p>Assisté par Audrey Lahaie et Sévryna Martel-Lupien</p>

              <h3>Conception visuelle et intégration</h3>
              <p>Ugo Nanini ainsi que Maxime Lebrun</p>

              <h3>Support Institutionnel</h3>
              <p>École des arts visuels, Université Laval </p>
              <p>Centre GéoStat, Bibliothèque de l’Université Laval</p>
              <p>Division de la gestion de documents et des archives, Université de Montréal </p>
              <p>Bibliothèque et Archives nationales du Québec </p>
              <p>Gestion des documents administratifs et archives historiques, Université Laval</p>
              <p>Sépaq-Anticosti </p>

          </div>
        </div>
      )}
    </>
  );
};

export default Header;