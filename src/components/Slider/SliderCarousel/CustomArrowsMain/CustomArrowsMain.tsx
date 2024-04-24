// CustomArrows.tsx
import React from "react";
import styles from "./CustomArrowsMain.module.css";
import ArrowLeft from "../../../../img/Slider/arrow-left.png";
import ArrowRight from "../../../../img/Slider/arrow-right.png";

// Компонент для кастомной стрелки "назад"
const SamplePrevArrow: React.FC<{
  className: string;
  onClick: () => void;
}> = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className={styles.customPrevArrow}>
        <img src={ArrowLeft} alt="ArrowLeft" />
      </span>
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
      <span className={styles.customNextArrow}>
        <img src={ArrowRight} alt="ArrowRight" />
      </span>
    </div>
  );
};

export { SamplePrevArrow, SampleNextArrow };
