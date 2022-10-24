import React from 'react';
import css from "./cooperate.module.scss";

export default function Coopearate() {
  return (
    <div className={css.main}>
      <p>С НАМИ СОТРУДНИЧАЮТ</p>
      <div className={css.circles}>
        {
          [0, 0, 0, 0, 0].map((el, index) => (
            <div key={index} className={css.item}>
              <div className={css.circle}></div>
              <h2 className={css.college}>Университеты и колледжи</h2>
            </div>
          ))
        }
      </div>
      <div className={css.circle}>
        {
          [0, 0, 0, 0].map((el, index) => (
            <div key={index} className={css.item}>
              <div className={css.circle}></div>
              <h2 className={css.college}>Университеты и колледжи</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}
