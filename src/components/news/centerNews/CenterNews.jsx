import React from 'react';
import css from "./centerNews.module.scss";

export default function CenterNews({ el }) {
  return (
    <div className={css.centerNews}>
      <div className={css.box}></div>
      <div className={css.title}>
        <h2>
          {el.title}
        </h2>
        <p><i>{el.name}</i></p>
        <div>
          <p>{el.date}</p>
          <p>{el.views} Просмотров</p>
        </div>
      </div>
    </div>
  )
}
