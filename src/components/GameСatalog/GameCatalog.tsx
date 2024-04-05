import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Catalog from "./Catalog/Catalog";

export default function GameCatalog() {
  return (
    <div className="w-full">
      <Header />
      <Catalog />
      <Footer />
    </div>
  );
}
