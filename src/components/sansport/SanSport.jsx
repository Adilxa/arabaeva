import React from 'react'
import css from "./sanSport.module.scss";

export default function SanSport() {
  return (
    <div className={css.all}>
      <div className={css.left}>
        <header>
          <p>ТЕЛЕСТУДИЯ 'SAN'</p>
        </header>
        {
          [1, 1, 1, 1, 1, 1, 1, 1].map((el, index) => (
            <div key={index} className={css.box}>
              <div className={css.circle}>
                <img src="./images/play.png" alt="" />
              </div>
            </div>
          ))
        }
        <footer>
          <p>ЕЩЕ БОЛЬШЕ НОВОСТЕЙ</p>
        </footer>
      </div>
      <div className={css.right}>
        <header>
          <p>СПОРТ</p>
        </header>
        {
          [1, 1, 1, 1, 1, 1, 1, 1].map((el, index) => (
            <div key={index} className={css.box}>
              <div className={css.square}></div>
              <p>ФАКУЛЬТЕТ ПЕДАГОГИКИ ПРОВЕЛ МЕРОПРИЯТИЕ, ПОСВЯЩЕННОЕ ВСЕМИРНОМУ ДНЮ СЛУХА</p>
              <div className={css.info}>
                <h6>2022-03-17</h6>
                <h6>94 ПРОСМОТРЫ</h6>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
