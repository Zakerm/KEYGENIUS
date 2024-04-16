import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderCarousel.css"; // Импорт наших стилей

interface SliderCarouselProps {
  images: string[];
}

const SliderCarousel: React.FC<SliderCarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    swipeToSlide: false,
  };

  return (
    <div className="slider-carousel">
      <Slider {...settings}>
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
