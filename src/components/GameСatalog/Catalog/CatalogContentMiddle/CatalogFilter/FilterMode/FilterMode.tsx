import React from "react";
import ISingle from "../../../../../../img/Filter/mode/svg/single.svg";
import IСooperative from "../../../../../../img/Filter/mode/svg/cooperative.svg";
import INetwork from "../../../../../../img/Filter/mode/svg/network.svg";
import "./FilterMode.css"; // Подключаем CSS-стили для компонента

export default function FilterMode() {
  return (
    <div className="filter_mode">
      <div className="filter_mode_name">Режимы игры</div>
      <div className="mode">
        {/* Один из вариантов реализации */}
        <div className="mode-checkbox">
          <input type="checkbox" id="single-mode" className="hidden-checkbox" />
          <label htmlFor="single-mode" className="mode-label">
            <img src={ISingle} className="mode-img" alt="" />
            <p className="mode-text">Одиночная</p>
          </label>
        </div>

        {/* Другой вариант реализации */}
        <div className="mode-checkbox">
          <input
            type="checkbox"
            id="cooperative-mode"
            className="hidden-checkbox"
          />
          <label htmlFor="cooperative-mode" className="mode-label">
            <img src={IСooperative} className="mode-img" alt="" />
            <p className="mode-text">Кооператив</p>
          </label>
        </div>

        {/* Ещё один вариант реализации */}
        <div className="mode-checkbox">
          <input
            type="checkbox"
            id="network-mode"
            className="hidden-checkbox"
          />
          <label htmlFor="network-mode" className="mode-label">
            <img src={INetwork} className="mode-img" alt="" />
            <p className="mode-text">Сетевая</p>
          </label>
        </div>
      </div>
    </div>
  );
}
