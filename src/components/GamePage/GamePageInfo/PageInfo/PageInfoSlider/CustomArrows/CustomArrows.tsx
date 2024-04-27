// CustomArrows.tsx
import React from "react";
import styles from "./CustomArrows.module.css";
import img from "../../../../../../img/Slider/DeadCells-sp-banner.webp";

interface CustomArrowProps {
  onClick: () => void;
  direction: "left" | "right"; // Направление стрелки
}

function CustomLeftArrow({ onClick }: CustomArrowProps) {
  return (
    // <button onClick={onClick} className={styles.customLeftArrow}>
    //   &lt;
    // </button>
    <img src={img} alt="" />
  );
}

function CustomRightArrow({ onClick }: CustomArrowProps) {
  return (
    <button onClick={onClick} className={styles.customRightArrow}>
      &gt;
    </button>
  );
}

export { CustomLeftArrow, CustomRightArrow };
