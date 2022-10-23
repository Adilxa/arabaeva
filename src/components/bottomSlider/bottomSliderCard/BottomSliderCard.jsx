import React from 'react'
import css from "../bottomSliderCard/bottomSliderCard.module.scss";

export default function BottomSliderCard({ title, id, views, date }) {
  return (
    <div key={id} className={css.wrapper}>
      <div className={css.box}></div>
      <div className={css.title}>
        <p>{title}</p>
        <div>
          <p>{date}</p>
          <span>{views} Просмотры</span>
        </div>
      </div>
    </div>
  )
}
