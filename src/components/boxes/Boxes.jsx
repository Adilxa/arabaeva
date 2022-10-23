import React from 'react';
import css from './boxes.module.scss';

export default function Boxes() {
  return (
    <div className={css.boxes}>
      <div className={css.container}>
        {[0, 1, 0, 0].map((el) => (
          <div className={css.box}></div>
        ))}
      </div>
    </div>
  )
}
