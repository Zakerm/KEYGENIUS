import React from "react";

export default function CatalogSorting() {
  return (
    <div className="catalog_sorting">
      <div className="catalog_sorting__title">Все игры</div>
      <div className="sorting">
        <select>
          <option value="option1">Популярности</option>
          <option value="option2">Дата выхода,новые</option>
          <option value="option3">Дата выхода,старые</option>
          <option value="option4">Цене, дешевые</option>
          <option value="option5">Цене, дорогие</option>
        </select>
      </div>
    </div>
  );
}
