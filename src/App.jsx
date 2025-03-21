import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import RoseDesVents from "./pages/RoseDesVents";
import Recit from "./pages/Recit";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Routes>
      <div className="app">
        <Header />

        <div className="content">
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/rose-des-vents" element={<RoseDesVents />} />
          <Route path="/recit" element={<Recit />} />
        </div>
      </div>
    </Routes>
  );
};

export default App;
