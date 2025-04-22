import Banniere from "../banniere/banniere";
import banniereData from "../../data/banniereData";

import styles from "./listeRecits.module.css";

const ListeRecits = ({ currentPage, onBanniereClick }) => {
  return (
    <div
      className={styles.listeRecits}
      style={{
        transform: `translateX(-${currentPage * 100}%)`,
        transition: "transform 0.5s ease-in-out",
      }}
    >
      {banniereData.map((item, index) => (
        <Banniere
          key={index}
          objBanniere={item}
          onClick={() => onBanniereClick(item)} // Pass the clicked Banniere
        />
      ))}
    </div>
  );
};

export default ListeRecits;
