import React from "react";
import CatalogSorting from "./CatalogSorting/CatalogSorting";
import CatalogContentMiddle from "./CatalogContentMiddle/CatalogContentMiddle";
import styles from "./Catalog.module.css";

export default function Catalog() {
  return (
    <section className="section">
      <div className="container">
        <div className={`${styles.catalog} flex flex-col`}>
          <CatalogContentMiddle />
        </div>
      </div>
    </section>
  );
}
