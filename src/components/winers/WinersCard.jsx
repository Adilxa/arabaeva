import React from 'react'
import css from "./winers.module.scss";

export default function WinersCard({ id, title }) {
  return (
    <div key={id} className={css.item}>
      <div></div>
      <h1>
        <i>
          {
            title
          }
        </i>
      </h1>
    </div>
  )
}
