import React from 'react';
import css from "./footer.module.scss";

export default function Footer() {
  return (
    <>
      <div className={css.main}>
        <div className={css.content}>
          <div className={css.left}>
            <img src="./images/logo.png" alt="" />
          </div>
          <div className={css.mid}>
            <img src="./images/5.png" alt="" />
            <img src="./images/6.png" alt="" />
            <img src="./images/7.png" alt="" />
            <img src="./images/8.png" alt="" />
            <img src="./images/9.png" alt="" />
          </div>
          <div className={css.rigth}>
            <p>720026, Г. БИШКЕК, УЛ. РАЗЗАКОВА, 51А.
              ПРИЁМНАЯ РЕКТОРА: +(0312) 66-03-47
              ПРЕСС-СЛУЖБА: +(0312) 66-47-73
              I.ARABAEV@MAIL.RU WWW.YOURDOMAIN.COM</p>
          </div>
        </div>
      </div>
      <div className={css.footerBottom}>
        <div className={css.text}>
          <p>2015-2022 КГУ им. И.Арабаева ОИТ и ТОК . Все права защищены.</p>
        </div>
      </div>
    </>
  )
}
