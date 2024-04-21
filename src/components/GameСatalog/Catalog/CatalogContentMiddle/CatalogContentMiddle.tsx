import React, { useState } from "react";
import CatalogCard from "./CatalogCard/CatalogCard";
import CatalogFilter from "./CatalogFilter/CatalogFilter";
import { GameCards } from "../../../../data/MenuGameCards";
import styles from "./CatalogContentMiddle.module.css";

export default function CatalogContentMiddle() {
  const [filters, setFilters] = useState({
    priceFrom: 0,
    priceTo: 5000,
    genres: [],
    modes: [],
  });

  const filteredGames = GameCards.filter((game) => {
    const meetsPrice =
      game.price >= filters.priceFrom && game.price <= filters.priceTo;
    const meetsGenres =
      filters.genres.length === 0 ||
      filters.genres.every((genre) => game.filter?.genre?.includes(genre));
    const meetsMode =
      filters.modes.length === 0 ||
      filters.modes.some((mode) => game.filter?.mode?.includes(mode));
    return meetsPrice && meetsGenres && meetsMode;
  });

  const handleFilterChange = (filterName: any, value: any) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    <div className={`${styles.catalog_content_middle}`}>
      <CatalogFilter onFilterChange={handleFilterChange} />
      <div className={styles.catalog_cards}>
        {filteredGames.map((card) => (
          <CatalogCard card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}
