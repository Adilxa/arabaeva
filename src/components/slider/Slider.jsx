import React, { memo } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slider/Slider.scss";
import { Slide } from "../../constants/slider";
import Slider from "react-slick";
import SliderCard from "./sliderCard/SliderCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img src="./images/11.png"
      alt="Стрелка"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img src="./images/10.png"
      alt="Стрелка"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export default memo(function mainSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  return (
    <div className="wrapper">
      <Slider {...settings}>
          {
            Slide.map((el) => (
              <SliderCard title={el.title} id={el.id} />
            ))
          }
      </Slider>
    </div>
  )
})