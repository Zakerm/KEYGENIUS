import React from "react";
import ImgBanner from "../../img/Banner/Ban.jpg";
import style from "./Banner.module.css";

export default function Banner() {
  return (
    <div className="w-full">
      <img className={style.ImgBanner} src={ImgBanner} alt="ImgBanner" />
    </div>
  );
}
