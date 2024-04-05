import React from "react";
import styles from "./FilterGenre.module.css";

export default function FilterGenre() {
  return (
    <div className={`${styles.filter_genre} `}>
      <div className="filter__unit flex flex">
        <label className="filter__checkbox">
          <input
            type="checkbox"
            className="filter__control"
            id="mlt-action"
            data-data="action"
          />
          <span className="filter_genre__label">Экшены</span>
        </label>
      </div>
      {/* action */}
      <div className="filter__unit">
        <label className="filter__checkbox">
          <input
            type="checkbox"
            className="filter__control"
            id="mlt-race"
            data-data="race"
          />
          <span className="filter_genre__label">Гонки</span>
        </label>
      </div>
      {/* race */}
      <div className="filter__unit">
        <label className="filter__checkbox">
          <input
            type="checkbox"
            className="filter__control"
            id="mlt-strategies"
            data-data="strategies"
          />
          <span className="filter_genre__label">Гонки</span>
        </label>
      </div>
      {/* strategies */}
      <div className="filter__unit">
        <label className="filter__checkbox">
          <input
            type="checkbox"
            className="filter__control"
            id="mlt-rpg"
            data-data="rpg"
          />
          <span className="filter_genre__label">RPG</span>
        </label>
      </div>
      {/* RPG */}
      <div className="filter__unit">
        <label className="filter__checkbox">
          <input
            type="checkbox"
            className="filter__control"
            id="mlt-simulator"
            data-data="simulator"
          />
          <span className="filter_genre__label">Симуляторы</span>
        </label>
      </div>
      {/* simulator */}
      <div className="filter__unit">
        <label className="filter__checkbox">
          <input
            type="checkbox"
            className="filter__control"
            id="mlt-adventures"
            data-data="adventures"
          />
          <span className="filter_genre__label">Приключения</span>
        </label>
      </div>
      {/* adventures */}
      <div className="filter__unit">
        <label className="filter__checkbox">
          <input
            type="checkbox"
            className="filter__control"
            id="mlt-sport"
            data-data="sport"
          />
          <span className="filter_genre__label">Спорт</span>
        </label>
      </div>
      {/* sport */}
      <div className="filter__unit">
        <label className="filter__checkbox">
          <input
            type="checkbox"
            className="filter__control"
            id="mlt-casual"
            data-data="casual"
          />
          <span className="filter_genre__label">Казуальные</span>
        </label>
      </div>
    </div>
  );
}
