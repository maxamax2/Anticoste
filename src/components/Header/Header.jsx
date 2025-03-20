import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>My Blog</h1>

      <nav>
        <Link to="/">Accueil</Link>
      </nav>
    </header>
  );
};

export default Header;
