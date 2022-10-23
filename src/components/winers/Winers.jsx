import React from 'react';
import css from './winers.module.scss';
import { winers } from '../../constants/winers';
import WinersCard from './WinersCard';

export default function Winers() {
  return (
    <div className={css.winer}>
      <div className={css.content}>
        <div className={css.text}>
          <div className={css.title}>
            {
              winers.map((el) => (
                <WinersCard id={el.id} title={el.title} />
              ))
            }
          </div>
          <div className={css.circle}>
            <h2>STOP</h2>
            <p>КОРРУПЦИЯ</p>
          </div>
        </div>
      </div>
    </div>
  )
}
