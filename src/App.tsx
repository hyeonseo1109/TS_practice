import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MapPractice } from "./pages/MapPractice";
import DropDownPage from "./pages/DropDownPage";
import CardsPage from "./pages/CardsPage";
import ToastPage from "./pages/ToastPage";
import ToastContainer from "./commonComponent/toast/ToastContainer";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./api/queryClient";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Routes>
          <Route path="/mapPractice" element={<MapPractice />} />
          <Route path="/dropDownPage" element={<DropDownPage />} />
          <Route path="/" element={<CardsPage />} />
          <Route path="/toastPage" element={<ToastPage />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
