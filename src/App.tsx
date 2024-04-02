import GamePage from "./components/GamePage/GamePage";
import MainPage from "./components/MainPage/MainPage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/game/:id" element={<GamePage />} />
    </Routes>
  );
}

export default App;
