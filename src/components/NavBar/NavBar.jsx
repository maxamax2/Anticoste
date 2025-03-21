import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/a-propos">À propos</Link>
      <Link to="/rose-des-vents">Rose des vents</Link>
      <Link to="/recit">Récit</Link>
    </nav>
  );
};

export default NavBar;
