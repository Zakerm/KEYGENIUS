import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./SliderCarousel.css"; // Импорт стилей

import {
  SampleNextArrow,
  SamplePrevArrow,
} from "./CustomArrowsMain/CustomArrowsMain";
import CustomDots from "./CustomDotsMain/CustomDotsMain"; // Импорт компонента кастомных точек

interface SliderCarouselProps {
  images: string[];
}

const SliderCarousel: React.FC<SliderCarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0); // Состояние для текущего слайда

  const handleDotClick = (index: number) => {
    setCurrentSlide(index); // Обновляем текущий слайд при клике на точку
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true, // Теперь используем кастомные точки, поэтому этот параметр нужно убрать
  };

  const customArrows = {
    prevArrow: <SamplePrevArrow className="" onClick={() => {}} />,
    nextArrow: <SampleNextArrow className="" onClick={() => {}} />,
  };

  const customPaging = (i: number) => (
    <CustomDots
      key={i}
      onClick={() => handleDotClick(i)}
      active={i === currentSlide}
    />
  );

  return (
    <div className="slider-carousel">
      <Slider
        {...settings}
        {...customArrows}
        customPaging={customPaging}
        appendDots={(dots) => (
          <ul className="dots">
            <li className="dot">{dots}</li>
          </ul>
        )} // Используем appendDots для кастомных точек
      >
        {images.map((image, index) => (
          <div className="slide-item" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCarousel;
