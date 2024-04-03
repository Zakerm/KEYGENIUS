import React from "react";
// import "../Subscription/Subscription.css";
import styles from "./Subscription.module.css";

export default function Subscription() {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <div className="section">
      <div className="container">
        <div
          className={`${styles.center} ${styles.subscription}  w-full flex flex-col`}
        >
          <div className={styles.subscription_title}>Подпишись!</div>
          <div className={styles.subscription_info}>
            Новинки, предварительные заказы, скидки и лучшие предложения!
          </div>
          <form className="flex" onSubmit={handleSubmit}>
            <p className={styles.subscription_text}>Рассылка</p>
            <input
              className={`${styles.subscription_input} border-2`}
              type="email"
              name="email"
              // onChange={handleChange}
              placeholder="Укажите e-mail"
            />
            <input
              className={styles.subscription_btn}
              type="submit"
              value="подписаться"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
