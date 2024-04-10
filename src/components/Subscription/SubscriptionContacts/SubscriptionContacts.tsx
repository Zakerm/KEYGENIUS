import React from "react";
import styles from "./SubscriptionContacts.module.css";
import { NavLink } from "react-router-dom";

export default function SubscriptionContacts() {
  return (
    <div>
      <div className={styles.contacts}>Контакты</div>
      <div className={styles.contacts_content}>
        <div className={styles.mail_tittle}>
          Техническая поддержка по общим вопросам:
        </div>
        <div>
          <div className={`${styles.mail_link}`}>
            <NavLink
              className={`${styles.widget_contact__email} flex flex-row`}
              to={`mailto:kep-02@bk.ru`}
            >
              <svg
                width={25}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={styles.svg}
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <div className={styles.mail}>kep-02@bk.ru</div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className={styles.social_network}>
        <a href="https://vk.com/club205559985">
          <img
            src="https://steambuy.com/_templates/img/svg/VK.svg"
            alt="vk"
            width={50}
          />
        </a>
      </div>
    </div>
  );
}
