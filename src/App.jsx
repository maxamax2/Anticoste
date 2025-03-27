import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import RoseDesVents from "./pages/RoseDesVents";
import Recit from "./pages/Recit";

const App = () => {
  return (
    <div className="app">
      <div className="content">
        <h1>App</h1>

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/rose-des-vents" element={<RoseDesVents />} />
          <Route path="/recit" element={<Recit />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
