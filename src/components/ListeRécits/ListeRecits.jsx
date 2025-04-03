import Banniere from "../Bannières/Banniere";
import banniereData from "../../data/banniereData";

const ListeRecits = () => {
  const bannieres = banniereData;

  return (
    <div>
      <div className="bannieres__recit--container">
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
