import GamePage from "./components/GamePage/GamePage";
import MainPage from "./components/MainPage/MainPage";
import GameCatalog from "./components/GameСatalog/GameCatalog";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Support from "./components/Support/Support";
import SupportProductsComp from "./components/Support/MainSupport/Content/SupportProducts/SupportProductsComp";
import SupportPaymentsComp from "./components/Support/MainSupport/Content/SupportPayments/SupportPaymentsComp";
import SupportProblemsComp from "./components/Support/MainSupport/Content/SuppportProblems/SupportProblemsComp";
import SupportEllipsisComp from "./components/Support/MainSupport/Content/SupportEllipsis/SupportEllipsisComp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/game/:id" element={<GamePage />} />
      <Route path="/catalog" element={<GameCatalog />} />
      <Route path="/support" element={<Support />} />
      <Route path="/support/products" element={<SupportProductsComp />} />
      <Route path="/support/payments" element={<SupportPaymentsComp />} />
      <Route path="/support/problems" element={<SupportProblemsComp />} />
      <Route path="/support/ellipsis" element={<SupportEllipsisComp />} />
    </Routes>
  );
}

export default App;
