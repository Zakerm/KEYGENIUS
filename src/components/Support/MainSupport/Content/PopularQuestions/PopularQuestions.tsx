import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./PopularQuestions.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const PopularQuestions: React.FC = () => {
  const [isMenuOpen1, setIsMenuOpen1] = useState(false); // Состояние для первого меню
  const [isMenuOpen2, setIsMenuOpen2] = useState(false); // Состояние для второго меню

  const faqData: FAQItem[] = [
    {
      question: "Если игра мне не понравится, могу ли я вернуть свои деньги?",
      answer:
        "Это не представляется возможным. Товар, приобретенный покупателем, не подлежит возврату или обмену в случае, если товар был получен.",
    },

    {
      question: "?",
      answer:
        "Это не представляется возможным. Товар, приобретенный покупателем, не подлежит возврату или обмену в случае, если товар был получен.",
    },
  ];

  const toggleMenu1 = () => {
    setIsMenuOpen1((prev) => !prev);
    setIsMenuOpen2(false); // Закрыть второе меню при открытии первого
  };

  const toggleMenu2 = () => {
    setIsMenuOpen2((prev) => !prev);
    setIsMenuOpen1(false); // Закрыть первое меню при открытии второго
  };

  return (
    <div>
      <div className={styles.faq_container}>
        <h1>FAQ</h1>
        <button className={styles.faq_button} onClick={toggleMenu1}>
          {isMenuOpen1 ? "Закрыть меню" : "Открыть меню 1"}
        </button>
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
            {faqData.map((item) => (
              <div key={item.question} className={styles.faq_item}>
                <div className={styles.faq_question}>{item.question}</div>
                <div className={styles.faq_answer}>{item.answer}</div>
              </div>
            ))}
          </div>
        </CSSTransition>
      </div>
      <div className={styles.faq_container}>
        <h1>FAQ</h1>
        <button className={styles.faq_button} onClick={toggleMenu2}>
          {isMenuOpen2 ? "Закрыть меню" : "Открыть меню 2"}
        </button>
        <CSSTransition
          in={isMenuOpen2}
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
            {faqData.map((item) => (
              <div key={item.question} className={styles.faq_item}>
                <div className={styles.faq_question}>{item.question}</div>
                <div className={styles.faq_answer}>{item.answer}</div>
              </div>
            ))}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default PopularQuestions;
