import React, { useState } from "react";
import "../MenuGameSelect/MenuGameSelect.css";

interface MenuGameSelectProps {
  onTypeChange: (
    type: "priceReduction" | "topSale" | "newGame" | "recommendedGames"
  ) => void;
}

export default function MenuGameSelect({ onTypeChange }: MenuGameSelectProps) {
  const [selectedType, setSelectedType] = useState<
    "priceReduction" | "topSale" | "newGame" | "recommendedGames"
  >();

  const handleClick = (
    type: "priceReduction" | "topSale" | "newGame" | "recommendedGames"
  ) => {
    setSelectedType(type);
    onTypeChange(type);
  };

  return (
    <div className="MenuGame_select">
      <ul className="select flex flex-row justify-center gap-5">
        <div
          className={`link ${
            selectedType === "priceReduction" ? "active" : ""
          }`}
        >
          <button onClick={() => handleClick("priceReduction")}>
            <li className="MenuGame__title">Снижение цен</li>
          </button>
          {selectedType === "priceReduction" && (
            <div className="indicator"></div>
          )}
        </div>

        <div className={`link ${selectedType === "topSale" ? "active" : ""}`}>
          <button onClick={() => handleClick("topSale")}>
            <li className="MenuGame__title">Лидеры продаж</li>
          </button>
          {selectedType === "topSale" && <div className="indicator"></div>}
        </div>

        <div className={`link ${selectedType === "newGame" ? "active" : ""}`}>
          <button onClick={() => handleClick("newGame")}>
            <li className="MenuGame__title">Новые игры</li>
          </button>
          {selectedType === "newGame" && <div className="indicator"></div>}
        </div>

        <div
          className={`link ${
            selectedType === "recommendedGames" ? "active" : ""
          }`}
        >
          <button onClick={() => handleClick("recommendedGames")}>
            <li className="MenuGame__title">Рекомендованные игры</li>
          </button>
          {selectedType === "recommendedGames" && (
            <div className="indicator"></div>
          )}
        </div>
      </ul>
    </div>
  );
}
