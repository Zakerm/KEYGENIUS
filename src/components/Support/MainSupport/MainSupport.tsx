import React from "react";
import SupportMenu from "./SupportMenu/SupportMenu";
import styles from "./MainSupport.module.css";
import { Route, Routes } from "react-router-dom";
import PopularQuestions from "./Content/PopularQuestions/PopularQuestions";

export default function MainSupport() {
  return (
    <div className={`${styles.main_support} flex-col`}>
      <SupportMenu />
      {/* <Routes>
        <Route path="/support/products" element={<PopularQuestions />} />
      </Routes> */}
      <PopularQuestions />
    </div>
  );
}
