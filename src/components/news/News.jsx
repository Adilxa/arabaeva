import React from 'react'
import { arabaevPress, centerNews, links, categhory } from '../../constants/news';
import ArabaevPress from './arabaevPress/ArabaevPress';
import CenterNews from './centerNews/CenterNews';
import css from "./news.module.scss";

export default function News() {
  return (
    <div className={css.allNews}>
      <div className={css.arabaevPress}>
        {
          arabaevPress.map((el) => (
            <ArabaevPress el={el} />
          ))
        }
      </div>
      <div className={css.center}>
        {centerNews.map((el) => (
          <CenterNews el={el} />
        ))}
      </div>
      <div className={css.line}></div>
      <div className={css.akipress}>
        <div className={css.akipres}>
          <h2>AKIpress</h2>
        </div>
        <div className={css.portal}>
          <h3>ПОРТАЛ ДИСТАНЦИОННОГО ОБУЧЕНИЯ</h3>
          <h1>AVN SOFT</h1>
          <section>
            <h3>КАТЕГОРИИ</h3>
            <ul>
              {
                categhory.map((el) => (
                  <li key={el.id}><h5>{el.title}</h5></li>
                ))
              }
            </ul>
          </section>
          <section>
            <h3>ПОЛЕЗНЫЕ ССЫЛКИ</h3>
            <ul>
              {
                links.map((el) => (
                  <li key={el.id}><h5>{el.title}</h5></li>
                ))
              }
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
