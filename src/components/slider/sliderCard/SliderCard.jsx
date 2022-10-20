import React from 'react'
import css from "./slidercard.module.scss";

export default function SliderCard({title, id}) {
  return (
    <div key={id} className={css.wrapper}>
      <div className={css.box}></div>
      <h2>{title}</h2>
    </div>
  )
}
