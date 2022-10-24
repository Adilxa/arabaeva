import React from 'react';
import { left, mid, rigth } from '../../constants/columns';
import ColoumnItem from './columnItem/ColoumnItem';
import css from "./columnNews.module.scss";

export default function ColumnNews() {
  return (
    <div className={css.colums}>
      <div className={css.left}>
        <header>
          <p>МААНИЛУУ МАТЕРИАЛДАР</p>
        </header>
        <div className={css.news}>
          {left.map((el) => (
            <ColoumnItem el={el} />
          ))}
        </div>
        <footer>
          <h4>ЕЩЕ БОЛЬШЕ НОВОСТЕЙ</h4>
          <img src="./images/arrwLeftSmall.png" alt="" />
        </footer>
      </div>
      <div className={css.mid}>
        <header>
          <p>КУЛАКТАНДЫРУУ</p>
        </header>
        <div className={css.news}>
          {mid.map((el) => (
            <ColoumnItem el={el} />
          ))}
        </div>
        <footer>
          <h4>ЕЩЕ БОЛЬШЕ НОВОСТЕЙ</h4>
          <img src="./images/arrwLeftSmall.png" alt="" />
        </footer>
      </div>
      <div className={css.rigth}>
        <header>
          <p>КМУнун ТУЗУМДОРУНДОГУ ЖАНЫЛЫКТАР</p>
        </header>
        <div className={css.news}>
          {rigth.map((el => (
            <ColoumnItem el={el} />
          )))}
        </div>
        <footer>
          <h4>ЕЩЕ БОЛЬШЕ НОВОСТЕЙ</h4>
          <img src="./images/arrwLeftSmall.png" alt="" />
        </footer>
      </div>
    </div>
  )
}
