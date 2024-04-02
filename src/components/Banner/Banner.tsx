import React from "react";
import ImgBanner from "../../img/Banner/Ban.jpg";
import "../Banner/Banner.css";

export default function Banner() {
  return (
    <div className="w-full">
      <img className="ImgBanner" src={ImgBanner} alt="ImgBanner" />
    </div>
  );
}
