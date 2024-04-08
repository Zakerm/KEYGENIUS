import React from "react";
import CatalogCard from "./CatalogCard/CatalogCard";
import CatalogFilter from "./CatalogFilter/CatalogFilter";
import { GameCards } from "../../../../data/MenuGameCards";
import styles from "./CatalogContentMiddle.module.css";

export default function CatalogContentMiddle() {
  return (
    <div className={`${styles.catalog_content_middle}`}>
      <div className={styles.catalog_cards}>
        {GameCards.map((card) => (
          <CatalogCard card={card} key={card.id} />
        ))}
      </div>
      <CatalogFilter />
    </div>
  );
}
