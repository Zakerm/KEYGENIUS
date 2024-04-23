import React, { useState } from "react";
// import { IGameInfo } from "../../../../models/GameInfoModels";
import { IGameCards } from "../../../../models/GameCardsModels";
import styles from "./PageInfo.module.css";
import PageInfoSlider from "./PageInfoSlider/PageInfoSlider";

interface GameInfo {
  info: IGameCards;
}

export default function PageInfo(props: GameInfo) {
  const bgStyle: React.CSSProperties = {
    background: `linear-gradient(rgba(255, 255, 255, 0.8), rgb(103 96 96 / 50%)),  url(${props.info.bgImage} ) no-repeat   `,
    backgroundSize: `cover`,
  };

  return (
    <div className={styles.bg} style={bgStyle}>
      <section className="section">
        <div className="container">
          <div className={`${styles.game_page} flex flex-col`}>
            <div className={styles.game_title}>
              <h2>{props.info.title}</h2>
            </div>
            <div className={`${styles.game} flex`}>
              <div className={styles.video_container}>
                <iframe
                  className={styles.game_trailer}
                  src={props.info.trailer}
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
              <div
                className={`${styles.game_about} ${styles.game_about_left} game_about flex`}
              >
                <div className={styles.about}>
                  <p className={styles.about_text}>Регион:</p>
                  <p className={styles.about_text}>Язык: </p>
                  <p className={styles.about_text}>Наличие: </p>
                  <div className={styles.platform}>
                    <div>Активация:</div>
                    <img
                      className={styles.img_platform}
                      src={props.info.platform}
                      alt="platform"
                    />
                  </div>
                  <div className={`${styles.rating}`}>
                    <div>Рейтинг игры: {props.info.filter?.rating}</div>
                  </div>
                </div>
                <div className={styles.about}>
                  <p
                    className={`${styles.about_info} ${styles.about_info_left}`}
                  >
                    {props.info.region}
                  </p>
                  <p
                    className={`${styles.about_info} ${styles.about_info_left}`}
                  >
                    {props.info.language}
                  </p>
                  <p
                    className={`${styles.about_info} ${styles.about_info_left}`}
                  >
                    {props.info.availability}
                  </p>
                </div>
              </div>
              <div
                className={`${styles.game_price} flex flex-col items-center`}
              >
                <p className={styles.game_price_text}>
                  {props.info.price} {props.info.currency}
                </p>

                <a href="#!" className={styles.game_price_btn}>
                  <div className={styles.price_btn}>Купить</div>
                </a>
              </div>
            </div>

            <div className={`${styles.game_description} ${styles.bg_text}`}>
              <p>{props.info.description}</p>
            </div>
          </div>
          <PageInfoSlider sliderImages={props.info.sliderImg || []} />
          <div className={`${styles.game_about}  flex flex-col`}>
            <h2 className={styles.game_about_min}>
              Минимальные системные требования
            </h2>
            <div className={`${styles.bg_text}  flex `}>
              <div className={`${styles.about}  `}>
                <p className={styles.about_text}>ОС:</p>
                <p className={styles.about_text}>Процессор: </p>
                <p className={styles.about_text}>Оперативная память: </p>
                <p className={styles.about_text}>Видеокарта: </p>
                <p className={styles.about_text}>DirectX: </p>
              </div>
              <div className={styles.about}>
                <p className={styles.about_info}>
                  {props.info.characteristics.os}
                </p>
                <p className={styles.about_info}>
                  {props.info.characteristics.cpu}
                </p>
                <p className={styles.about_info}>
                  {props.info.characteristics.ram}
                </p>
                <p className={styles.about_info}>
                  {props.info.characteristics.videocard}
                </p>
                <p className={styles.about_info}>
                  {props.info.characteristics.DirectX}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
