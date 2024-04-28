import React, { useState } from "react";
import CatalogCard from "./CatalogCard/CatalogCard";
import CatalogFilter from "./CatalogFilter/CatalogFilter";
import CatalogSorting from "../CatalogSorting/CatalogSorting";
import { GameCards } from "../../../../data/MenuGameCards";
import styles from "./CatalogContentMiddle.module.css";

interface CatalogContentMiddleProps {}

const CatalogContentMiddle: React.FC<CatalogContentMiddleProps> = () => {
  const [filters, setFilters] = useState({
    priceFrom: 0,
    priceTo: 5000,
    genres: [] as string[],
    modes: [] as string[],
  });

  const [sortBy, setSortBy] = useState<string>("");

  const handleFilterChange = (filterName: string, value: any) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  const sortedGames = GameCards.slice().sort((a, b) => {
    if (sortBy === "popularity") {
      return (b.filter?.rating || 0) - (a.filter?.rating || 0);
    } else if (sortBy === "dateNew") {
      return (b.filter?.release || 0) - (a.filter?.release || 0);
    } else if (sortBy === "dateOld") {
      return (a.filter?.release || 0) - (b.filter?.release || 0);
    } else if (sortBy === "priceLow") {
      const discountedPriceA =
        a.price - ((a.discount?.percent || 0) * a.price) / 100;
      const discountedPriceB =
        b.price - ((b.discount?.percent || 0) * b.price) / 100;
      return discountedPriceA - discountedPriceB;
    } else if (sortBy === "priceHigh") {
      const discountedPriceA =
        a.price - ((a.discount?.percent || 0) * a.price) / 100;
      const discountedPriceB =
        b.price - ((b.discount?.percent || 0) * b.price) / 100;
      return discountedPriceB - discountedPriceA;
    } else {
      return 0;
    }
  });

  const filteredGames = sortedGames.filter((game) => {
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

  return (
    <div className={`${styles.catalog_content_middle}`}>
      <div className={` flex flex-col`}>
        <div className={styles.comp}>
          <CatalogSorting onSortChange={handleSortChange} />
        </div>
        <div className="flex">
          <CatalogFilter onFilterChange={handleFilterChange} />
          <div className={styles.catalog_cards}>
            {filteredGames.map((card) => (
              <CatalogCard card={card} key={card.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogContentMiddle;
