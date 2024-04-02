import React from "react";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import MenuGame from "../MenuGame/MenuGame";
import Banner from "../Banner/Banner";
import Subscription from "../Subscription/Subscription";
import Footer from "../Footer/Footer";

export default function MainPage() {
  return (
    <div>
      <Header />
      <Slider />
      <MenuGame />
      <Banner />
      <Subscription />
      <Footer />
    </div>
  );
}
