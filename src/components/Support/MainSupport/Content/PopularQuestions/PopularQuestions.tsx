import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./PopularQuestions.module.css";
import { IPopularQuestions } from "../../../../../models/PopularQuestionsDate";

interface PopularQuestionsProps {
  cards: IPopularQuestions;
}

export default function PopularQuestions(props: PopularQuestionsProps) {
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);

  const toggleMenu1 = () => {
    setIsMenuOpen1((prev) => !prev);
  };

  return (
    <div
      className={`${styles.faq_container} ${isMenuOpen1 ? styles.open : ""}`}
      onClick={toggleMenu1}
    >
      <div className={styles.title_card}>
        <h1>{props.cards.question}</h1>
        {/* <button className={styles.faq_button}></button> */}
        <div className={styles.arrow}></div>
      </div>
      <CSSTransition
        in={isMenuOpen1}
        timeout={300}
        classNames={{
          enter: styles.menu_enter,
          enterActive: styles.menu_enter_active,
          exit: styles.menu_exit,
          exitActive: styles.menu_exit_active,
        }}
        unmountOnExit
      >
        <div className={styles.faq_menu}>
          <div key={props.cards.id} className={styles.faq_item}>
            <div className={styles.faq_answer}>{props.cards.answer}</div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
