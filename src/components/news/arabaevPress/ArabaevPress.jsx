import React from 'react';
import css from './arabaevPress.module.scss';

export default function ArabaevPress({ el }) {
  return (
    <div className={css.content}>
      <header>
        <h4>{el.top}</h4>
      </header>
      <div>
      </div>
      <h5>
        {el.num}
      </h5>
    </div>
  )
}
