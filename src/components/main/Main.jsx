import React from "react";
import Slider from "../slider/Slider"
import Header from "../header/Header";
import css from "./main.module.scss";

const Main = () => {
  return (
    <>
      <div className={css.main}>
        <Header />
        <Slider />
        
      </div>
    </>
  )
}

export default Main;