// CustomDotsMain.tsx

import React from "react";
import "./CustomDotsMain.css"; // Импорт стилей для кастомных точек

interface CustomDotsProps {
  onClick: () => void;
  active: boolean;
}

const CustomDots: React.FC<CustomDotsProps> = ({ onClick, active }) => (
  <li className={`custom-dot ${active ? "active" : ""}`} onClick={onClick}>
    {/* Добавляем класс "active", если точка активна */}
    <span className="dot"></span>
  </li>
);

export default CustomDots;
