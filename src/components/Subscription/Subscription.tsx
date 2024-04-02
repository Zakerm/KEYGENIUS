import React from "react";
import "../Subscription/Subscription.css";

export default function Subscription() {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <div className="section">
      <div className="container">
        <div className="subscription w-full flex flex-col center">
          <div className="subscription_title">Подпишись!</div>
          <div className="subscription_info">
            Новинки, предварительные заказы, скидки и лучшие предложения!
          </div>
          <form className="flex" onSubmit={handleSubmit}>
            <p className="subscription_text">Рассылка</p>
            <input
              className="subscription_input border-2"
              type="email"
              name="email"
              // onChange={handleChange}
              placeholder="Укажите e-mail"
            />
            <input
              className="subscription_btn"
              type="submit"
              value="подписаться"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
