import React from "react";
import { IGameInfo } from "../../../../models/GameInfoModels";
import { IGameCards } from "../../../../models/GameCardsModels";
import "../GamePageInfo.css";

interface GameInfo {
  info: IGameCards;
}

export default function PageInfo(props: GameInfo) {
  return (
    <section className="section">
      <div className="container">
        <div className="game_page flex flex-col">
          <div className="game_title">
            <h2>{props.info.title}</h2>
          </div>
          <div className="game flex">
            <div className="game_img">
              <img className="game_img-img" src={props.info.image} alt="" />
            </div>
            <div className="game_price flex flex-col items-center">
              <p className="game_price-text">
                {props.info.price} {props.info.currency}
              </p>

              <a href="#!" className="game_price-btn">
                <div className="price-btn">Купить</div>
              </a>
            </div>
          </div>
          <div className="game_about flex">
            <div className="about">
              <p className="about_text">Регион:</p>
              <p className="about_text">Язык: </p>
              <p className="about_text">Наличие: </p>
            </div>
            <div className="about">
              <p className="about_info"> {props.info.region}</p>
              <p className="about_info">{props.info.language}</p>
              <p className="about_info">{props.info.availability}</p>
            </div>
          </div>

          <div className="game_description">
            <p>{props.info.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
