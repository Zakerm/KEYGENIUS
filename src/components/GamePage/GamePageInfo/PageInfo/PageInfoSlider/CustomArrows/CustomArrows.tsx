// CustomArrows.tsx
import React from "react";
import styles from "./CustomArrows.module.css";
import "./CustomArrows.css";

// Компонент для кастомной стрелки "назад"
const SamplePrevArrow: React.FC<{
  className: string;
  onClick: () => void;
}> = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="customPrevArrow">{"<"}</span>
    </div>
  );
};

// Компонент для кастомной стрелки "вперед"
const SampleNextArrow: React.FC<{
  className: string;
  onClick: () => void;
}> = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="customNextArrow">{">"}</span>
    </div>
  );
};

export { SamplePrevArrow, SampleNextArrow };
