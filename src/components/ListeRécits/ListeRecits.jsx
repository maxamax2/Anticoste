import Banniere from "../Bannières/Banniere";
import banniereData from "../../data/banniereData";

const ListeRecits = () => {
  const bannieres = banniereData;

  return (
    <div>
      <h1>Récits</h1>
      <div>
        {bannieres.map((banniere) => (
          <Banniere key={banniere.title} objBanniere={banniere} />
        ))}
      </div>
    </div>
  );
};

export default ListeRecits;
