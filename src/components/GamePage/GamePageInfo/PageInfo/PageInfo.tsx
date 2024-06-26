import React, { useState, useEffect } from "react";
// import { IGameInfo } from "../../../../models/GameInfoModels";
import { IGameCards } from "../../../../models/GameCardsModels";
import styles from "./PageInfo.module.css";
import PageInfoSlider from "./PageInfoSlider/PageInfoSlider";
import { useCart } from "../../../Header/HeaderContent/content/HeaderRight/HeaderCart/CartContext";

interface GameInfo {
  info: IGameCards;
}

export default function PageInfo(props: GameInfo) {
  const { cart, addToCart, removeFromCart } = useCart();

  const isItemInCart = cart.some((item) => item.id === props.info.id);

  const handleAddToCart = () => {
    if (!isItemInCart) {
      addToCart(props.info);
    } else {
      alert("Товар уже добавлен в корзину");
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(props.info.id.toString());
  };

  const calculateDiscountedPrice = (): number | undefined => {
    if (props.info.discount && props.info.discount.percent !== undefined) {
      const discountedPrice =
        props.info.price * (1 - props.info.discount.percent / 100);
      return Math.ceil(discountedPrice);
    }
    return undefined;
  };

  const renderDiscount = () => {
    if (props.info.discount && props.info.discount.percent !== undefined) {
      return (
        <div className={styles.discount}>
          <p className={styles.discont}>-{props.info.discount.percent}%</p>
        </div>
      );
    }
    return null; // скрыть блок скидки, если скидки нет или отсутствует процент скидки
  };

  useEffect(() => {
    document.title = `Купить ${props.info.title}`;
  }, [props.info.title]);
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
                  {calculateDiscountedPrice() !== undefined
                    ? calculateDiscountedPrice()
                    : props.info.price}{" "}
                  {props.info.currency}
                </p>
                {renderDiscount()}{" "}
                {/* Вызов функции для отображения блока скидки */}
                <a href="#!" className={styles.game_price_btn}>
                  <div className={styles.price_btn}>Купить</div>
                </a>
                {isItemInCart ? (
                  <a
                    href="#!"
                    className={styles.game_price_btn}
                    onClick={handleRemoveFromCart}
                  >
                    <div className={styles.price_btn}>Удалить из корзины</div>
                  </a>
                ) : (
                  <a
                    href="#!"
                    className={styles.game_price_btn}
                    onClick={handleAddToCart}
                  >
                    <div className={styles.price_btn}>Добавить в корзину</div>
                  </a>
                )}
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
