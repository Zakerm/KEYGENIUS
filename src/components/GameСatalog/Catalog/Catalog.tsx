import React from "react";
import CatalogSorting from "./CatalogSorting/CatalogSorting";
import CatalogContentMiddle from "./CatalogContentMiddle/CatalogContentMiddle";

export default function Catalog() {
  return (
    <section className="section">
      <div className="container">
        <div className="Catalog w-full flex flex-col">
          <CatalogSorting />
          <CatalogContentMiddle />
        </div>
      </div>
    </section>
  );
}
