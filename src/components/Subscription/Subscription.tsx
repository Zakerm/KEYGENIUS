import React from "react";
// import "../Subscription/Subscription.css";
import styles from "./Subscription.module.css";
import { NavLink } from "react-router-dom";
import SubscriptionContacts from "./SubscriptionContacts/SubscriptionContacts";

export default function Subscription() {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <div className="section">
      <div className="container">
        <div
          className={`${styles.center} ${styles.subscription}  w-full flex flex-row`}
        >
          <div>
            <div className={styles.subscription_title}>Подпишись!</div>
            <div className={styles.subscription_info}>
              Новинки, предварительные заказы, скидки и лучшие предложения!
            </div>
            <form className={`${styles.form} flex`} onSubmit={handleSubmit}>
              <p className={`${styles.subscription_text} ${styles.form_wr}`}>
                Рассылка
              </p>

              <input
                className={`${styles.subscription_input} ${styles.form_wr} border-2`}
                type="email"
                name="email"
                // onChange={handleChange}
                placeholder="Укажите e-mail"
              />

              <input
                className={`${styles.subscription_btn} ${styles.form_wr}`}
                type="submit"
                value="подписаться"
              />
            </form>
          </div>
          <SubscriptionContacts />
        </div>
      </div>
    </div>
  );
}
