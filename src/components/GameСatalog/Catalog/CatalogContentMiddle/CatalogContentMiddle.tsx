import React from "react";
import CatalogCard from "./CatalogCard/CatalogCard";
import CatalogFilter from "./CatalogFilter/CatalogFilter";
import { GameCards } from "../../../../data/MenuGameCards";

export default function CatalogContentMiddle() {
  return (
    <div className="catalog_content_middle flex flex-row">
      <div className="catalog_cards">
        {GameCards.map((card) => (
          <CatalogCard card={card} key={card.id} />
        ))}
      </div>
      <CatalogFilter />
    </div>
  );
}
