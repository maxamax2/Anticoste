import Banniere from "../banniere/banniere";
import banniereData from "../../data/banniereData";

import styles from "./listeRecits.module.css";

const ListeRecits = () => {
  const bannieres = banniereData;

  return (
    <div>
      <div className={styles.bannieres}>
        {bannieres.map((banniere) => (
          <a href="" key={banniere.title}>
            <Banniere objBanniere={banniere} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ListeRecits;
