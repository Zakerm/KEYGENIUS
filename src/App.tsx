import GamePage from "./components/GamePage/GamePage";
import MainPage from "./components/MainPage/MainPage";
import GameCatalog from "./components/GameСatalog/GameCatalog";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Support from "./components/Support/Support";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/game/:id" element={<GamePage />} />
      <Route path="/catalog" element={<GameCatalog />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default App;
