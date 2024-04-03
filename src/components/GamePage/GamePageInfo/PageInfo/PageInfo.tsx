import React from "react";
import { IGameInfo } from "../../../../models/GameInfoModels";
import { IGameCards } from "../../../../models/GameCardsModels";
import styles from "./PageInfo.module.css";

interface GameInfo {
  info: IGameCards;
}

export default function PageInfo(props: GameInfo) {
  return (
    <section className="section">
      <div className="container">
        <div className="game_page flex flex-col">
          <div className={styles.game_title}>
            <h2>{props.info.title}</h2>
          </div>
          <div className={`${styles.game} flex`}>
            <div className={styles.game_img}>
              <img
                className={styles.game_img_img}
                src={props.info.image}
                alt=""
              />
            </div>
            <div className={`${styles.game_price} flex flex-col items-center`}>
              <p className={styles.game_price_text}>
                {props.info.price} {props.info.currency}
              </p>

              <a href="#!" className={styles.game_price_btn}>
                <div className={styles.price_btn}>Купить</div>
              </a>
            </div>
          </div>
          <div className={`${styles.game_about} game_about flex`}>
            <div className={styles.about}>
              <p className={styles.about_text}>Регион:</p>
              <p className={styles.about_text}>Язык: </p>
              <p className={styles.about_text}>Наличие: </p>
            </div>
            <div className={styles.about}>
              <p className={styles.about_info}> {props.info.region}</p>
              <p className={styles.about_info}>{props.info.language}</p>
              <p className={styles.about_info}>{props.info.availability}</p>
            </div>
          </div>

          <div className={styles.game_description}>
            <p>{props.info.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
