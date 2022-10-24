import React from 'react';
import css from "./column.module.scss";

export default function ColoumnItem({ el }) {
  return (
    <div key={el.id} className={css.colItem}>
      <h4>{el.title}</h4>
      <div>
        <p>{el.date}</p>
        <p>{el.views} Промотры</p>
      </div>
    </div>
  )
}
