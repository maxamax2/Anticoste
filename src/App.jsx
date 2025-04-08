import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import RoseDesVents from "./pages/RoseDesVents";
import FicheRecit from "./pages/FicheRecit";

const App = () => {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <a href="/Accueil">Accueil</a>
          </li>
          <li>
            <a href="/a-propos">À Propos</a>
          </li>
          <li>
            <a href="/">Rose des Vents</a>
          </li>
          <li>
            <a href="/recit">Récit</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/" element={<RoseDesVents />} />
        <Route path="/recit" element={<FicheRecit />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
