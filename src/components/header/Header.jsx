import React from "react";
import css from "./header.module.scss";
import { topHeader, mainHeader, bottomHeader } from "../../constants/header";

const Header = () => {
  return (
    <>
      <header>
        <div className={css.topHeader}>
          <div className={css.left}>
            {topHeader.map((el) => (
              <img key={el.id} src={el.img} alt="imgs" />
            ))}
          </div>
          <div className={css.center}>
            <h3>ректорат</h3>
            <h3>и.арабаев-первый учитель</h3>
            <h3>фотогалерея</h3>
            <h3>вестник кгу</h3>
            <h3>пресс-служба</h3>
          </div>
          <div className={css.rigth}>
            <p>KG</p>
            <p>ENG</p>
            <p>RUS</p>
          </div>
        </div>
        <div className={css.mainHeader}>
          <div className={css.left}>
            <img src="./images/logo.png" alt="logo" />
          </div>
          <div className={css.rigth}>
            {mainHeader.map((el) => (
              <div key={el.id} id={css.mainHeaderElement}>
                <img className={css.l} src={el.img} alt="" />
                <div className={css.r}>
                  <p>{el.title}</p>
                  <h4>{el.number}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={css.bottomHeader}>
          {bottomHeader.map((el) => (
            <div key={el.id}>
              {el.arrow &&
                <img src="./images/arrow.png" alt="" />
              }
              <h1>{el.title}</h1>
            </div>
          ))}
        </div>
      </header>
    </>
  )
}
export default Header;