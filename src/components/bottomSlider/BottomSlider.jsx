import React, { memo } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../bottomSlider/bottomSlider.scss";
import { bottomSlider } from "../../constants/bottomSlider";
import BottomSliderCard from './bottomSliderCard/BottomSliderCard';

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div className='next'
      style={{
        ...style,
        height: '100%',
        width: '70px',
        background: 'brown',
        marginLeft: '50px'
      }}
      onClick={onClick}>
      <h3>ЕЩЕ БОЛЬШЕ НОВОСТЕЙ</h3>
    </div>
  );
}

function SamplePrevArrow() {
  return (
    <div></div>
  );
}

export default memo(function mainSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  return (
    <>
      <div className='shade'></div>
      <div className="slider">
        <Slider {...settings}>
          {
            bottomSlider.map((el) => (
              <BottomSliderCard
                title={el.title}
                id={el.id}
                views={el.views}
                date={el.date} />
            ))
          }
        </Slider>
      </div>
      <hr />
    </>
  )
})
