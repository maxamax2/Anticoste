import { Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import RoseDesVents from "./pages/RoseDesVents";
import Recit from "./pages/Recit";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/rose-des-vents" element={<RoseDesVents />} />
      <Route path="/recit" element={<Recit />} />
    </Routes>
  );
};

export default App;
