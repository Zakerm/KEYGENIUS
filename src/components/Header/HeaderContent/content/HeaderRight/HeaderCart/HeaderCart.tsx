import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./HeaderCart.module.css";
import { useCart } from "./CartContext";

export default function HeaderCart() {
  const { cart, removeFromCart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className={styles.cart}>
      <div>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen) => !cartOpen)}
          className={`${styles.cart_img} ${cartOpen ? styles.active : ""}`}
        />
        {cartOpen && (
          <div className={styles.shop_cart}>
            {cart.length > 0 ? (
              <React.Fragment>
                {cart.map((item) => (
                  <div key={item.id} className={styles.cart_item}>
                    <Link to={`/game/${item.id}`} className={styles.cart_link}>
                      <img src={item.image} alt={item.title} />
                      <div className={styles.card_content}>
                        <p>{item.title}</p>
                        <p>
                          {item.discount?.percent ? (
                            <span className={styles.discountedPrice}>
                              {Math.ceil(
                                item.price * (1 - item.discount.percent / 100)
                              )}{" "}
                              {item.currency}
                              <span className={styles.discountPercent}>
                                {item.discount.percent}%
                              </span>
                            </span>
                          ) : (
                            <span>
                              {item.price} {item.currency}
                            </span>
                          )}
                        </p>
                      </div>
                    </Link>
                    <div className={styles.button}>
                      <button
                        onClick={() => removeFromCart(item.id.toString())}
                      >
                        Удалить из корзины
                      </button>
                    </div>
                  </div>
                ))}
                <div className={styles.buy}>
                  <button>Купить все</button>
                </div>
              </React.Fragment>
            ) : (
              <p className={styles.cartIN}>Корзина пуста</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
