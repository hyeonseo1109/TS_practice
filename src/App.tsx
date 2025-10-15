import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MapPractice } from "./pages/MapPractice";
import DropDownPage from "./pages/DropDownPage";
import CardsPage from "./pages/CardsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/mapPractice" element={<MapPractice />} />
        <Route path="/dropDownPage" element={<DropDownPage />} />
        <Route path="/" element={<CardsPage />} />
      </Routes>
    </>
  );
}

export default App;
