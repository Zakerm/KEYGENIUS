import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./SliderCarousel.css";

interface SliderCarouselProps {
  images: string[];
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const sliderImageUrl = [
  {
    url: "https://steampay.com/slider/DI2-sp-banner.png?1714045297",
  },
  {
    url: "https://steampay.com/slider/evil-west-banner.jpg",
  },

  {
    url: "https://steampay.com/slider/WHISKER-WATERS-1920x1080.jpg",
  },

  {
    url: "https://steampay.com/slider/QD-banner.png?1700571066",
  },

  {
    url: "https://steampay.com/slider/EGS_WarhorseStudios_KingdomComeDeliverance_S3-1360x766-1e8502930c6282cb34acf7add01c6832a5bc217e.jpg",
  },

  {
    url: "https://steampay.com/slider/FAR%20Changing%20Tides.jpg",
  },
];

export default function SliderCarousel({ images }: SliderCarouselProps) {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
