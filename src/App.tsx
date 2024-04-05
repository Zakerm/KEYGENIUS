import GamePage from "./components/GamePage/GamePage";
import MainPage from "./components/MainPage/MainPage";
import GameCatalog from "./components/GameСatalog/GameCatalog";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/game/:id" element={<GamePage />} />
      <Route path="/catalog" element={<GameCatalog />} />
    </Routes>
  );
}

export default App;
