import Banniere from "../Bannières/Banniere";
import banniereData from "../../data/banniereData";

import styles from "./ListeRecits.module.css";

const ListeRecits = () => {
  const bannieres = banniereData;

  return (
    <div>
      <div className={styles.bannieres}>
        {bannieres.map((banniere) => (
          <a href="">
            <Banniere key={banniere.title} objBanniere={banniere} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ListeRecits;
