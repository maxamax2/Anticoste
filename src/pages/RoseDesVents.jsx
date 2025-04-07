import ListeRecits from "../components/ListeRécits/ListeRecits";

import styles from "./RoseDesVents.module.css";

const RoseDesVents = () => {
  return (
    <div className={styles.container}>
      <ListeRecits />
    </div>
  );
};

export default RoseDesVents;
