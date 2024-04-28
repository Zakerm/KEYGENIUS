import React, { useEffect } from "react";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import MenuGame from "../MenuGame/MenuGame";
import Banner from "../Banner/Banner";
import Subscription from "../Subscription/Subscription";
import Footer from "../Footer/Footer";
import styles from "./MainPage.module.css";

export default function MainPage() {
  useEffect(() => {
    document.title = `KEYGENIUS`;
  });
  return (
    <div className={styles.main_page}>
      <Header />
      <Slider />
      <MenuGame />
      <Banner />
      <Subscription />
      <Footer />
    </div>
  );
}
