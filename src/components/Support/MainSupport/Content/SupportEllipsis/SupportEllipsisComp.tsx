import React from "react";
import styles from "../../MainSupport.module.css";
import SupportMenu from "../../SupportMenu/SupportMenu";
// import SupportProducts from "./SupportProducts";
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";
import { Ellipsis } from "../../../../../data/support/EllipsisData";
import SupportEllipsis from "./SupportEllipsis";

export default function SupportEllipsisComp() {
  return (
    <div>
      <Header />
      <div className={`${styles.main_support} flex-col`}>
        <SupportMenu />
        <div className={styles.support_tittle}>
          <h2>Другое</h2>
        </div>
        <div>
          {Ellipsis.map((card) => (
            <SupportEllipsis card={card} key={card.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
