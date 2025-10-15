import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MapPractice } from "./pages/MapPractice";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/mapPractice" element={<MapPractice />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
