import React, { useState } from "react";
import ISingle from "../../../../../../img/Filter/mode/svg/single.svg";
import IСooperative from "../../../../../../img/Filter/mode/svg/cooperative.svg";
import INetwork from "../../../../../../img/Filter/mode/svg/network.svg";
import "./FilterMode.css";

interface FilterModeProps {
  onFilterChange: (filterName: string, value: string[]) => void;
}

const FilterMode: React.FC<FilterModeProps> = ({ onFilterChange }) => {
  const [selectedModes, setSelectedModes] = useState<string[]>([]);

  const handleModeChange = (mode: string, checked: boolean) => {
    let updatedModes = [...selectedModes];
    if (checked) {
      updatedModes.push(mode);
    } else {
      updatedModes = updatedModes.filter((m) => m !== mode);
    }
    setSelectedModes(updatedModes);
    onFilterChange("modes", updatedModes);
  };

  return (
    <div className="filter_mode">
      <div className="filter_mode_name">Режимы игры</div>
      <div className="mode">
        <div className="mode-checkbox">
          <input
            type="checkbox"
            id="single-mode"
            className="hidden-checkbox"
            onChange={(e) => handleModeChange("singleplayer", e.target.checked)}
            checked={selectedModes.includes("singleplayer")}
          />
          <label htmlFor="single-mode" className="mode-label">
            <img src={ISingle} className="mode-img" alt="" />
            <p className="mode-text">Одиночная</p>
          </label>
        </div>

        <div className="mode-checkbox">
          <input
            type="checkbox"
            id="cooperative-mode"
            className="hidden-checkbox"
            onChange={(e) => handleModeChange("cooperative", e.target.checked)}
            checked={selectedModes.includes("cooperative")}
          />
          <label htmlFor="cooperative-mode" className="mode-label">
            <img src={IСooperative} className="mode-img" alt="" />
            <p className="mode-text">Кооператив</p>
          </label>
        </div>

        <div className="mode-checkbox">
          <input
            type="checkbox"
            id="network-mode"
            className="hidden-checkbox"
            onChange={(e) => handleModeChange("network", e.target.checked)}
            checked={selectedModes.includes("network")}
          />
          <label htmlFor="network-mode" className="mode-label">
            <img src={INetwork} className="mode-img" alt="" />
            <p className="mode-text">Сетевая</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterMode;
