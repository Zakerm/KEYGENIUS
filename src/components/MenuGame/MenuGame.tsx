import React, { useState } from "react";
import "../../css/general.css";
import styles from "./MenuGame.module.css";
import MenuGameSelect from "./MenuGameSelect/MenuGameSelect";
import { Link, NavLink } from "react-router-dom";
import PriceReduction from "./MenuGameCards/PriceReduction";
import TopSale from "./MenuGameCards/TopSale";
import NewGame from "./MenuGameCards/NewGame";
import RecommendedGames from "./MenuGameCards/RecommendedGames";
import "./menuGameTransition.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function MenuGame() {
  const [selectedType, setSelectedType] = useState<
    "priceReduction" | "topSale" | "newGame" | "recommendedGames"
  >("priceReduction");

  const handleTypeChange = (
    type: "priceReduction" | "topSale" | "newGame" | "recommendedGames"
  ) => {
    setSelectedType(type);
  };

  let selectedComponent;
  switch (selectedType) {
    case "priceReduction":
      selectedComponent = <PriceReduction />;
      break;
    case "topSale":
      selectedComponent = <TopSale />;
      break;
    case "newGame":
      selectedComponent = <NewGame />;
      break;
    case "recommendedGames":
      selectedComponent = <RecommendedGames />;
      break;
    default:
      selectedComponent = <PriceReduction />;
  }

  return (
    <section className="section">
      <div className="container">
        <div className="MenuGame">
          <MenuGameSelect onTypeChange={handleTypeChange} />
          {/* <TransitionGroup>
            <CSSTransition key={selectedType} classNames="fade" timeout={900}> */}
          {selectedComponent}
          {/* </CSSTransition>
          </TransitionGroup> */}
          <p className={styles.see_more}>
            <NavLink to={`/catalog`}>Показать больше →</NavLink>
          </p>
        </div>
      </div>
    </section>
  );
}
