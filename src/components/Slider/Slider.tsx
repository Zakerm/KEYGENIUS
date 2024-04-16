import React from "react";
import styles from "./Slider.module.css";
import SliderCarousel from "./SliderCarousel/SliderCarousel";
import Imetal from "../../img/Slider/metal-gear-banner.webp";
import IElex from "../../img/Slider/elex2-banner-sp.webp";
import IBamco from "../../img/Slider/bamco-sp-banner.webp";
import IElite from "../../img/Slider/elite-dangerous-banner2.jpg";
import IDead from "../../img/Slider/DeadCells-sp-banner.webp";
import ISurvaival from "../../img/Slider/survaival-sp-banner.webp";

export default function Slider() {
  const images = [ISurvaival, IElex, IDead, IBamco, IElite, Imetal];

  return (
    <div className={styles.slider}>
      <SliderCarousel images={images} />
    </div>
  );
}
