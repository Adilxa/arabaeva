import React from 'react';
import css from "./ourInstitus.module.scss";
import { circle } from '../../constants/OurInstitutes';

export default function OurInstitutes() {
  return (
    <div className={css.main}>
      <h3>НАШИ ИНСТИТУТЫ И ФАКУЛЬТЕТЫ</h3>
      <div className={css.circles}>
        {
          circle.map((el) => (
            <div key={el.id} className={css.item}>
              <div className={css.circle}></div>
              <p>{el.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
