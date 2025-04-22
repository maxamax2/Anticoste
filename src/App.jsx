import { Route, Routes } from "react-router-dom";
// import RoseDesVents from "./pages/RoseDesVents";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};

export default App;
