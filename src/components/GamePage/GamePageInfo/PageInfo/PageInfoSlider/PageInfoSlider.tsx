import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./PageInfoSlider.module.css";

interface PageInfoSliderProps {
  sliderImages: string[]; // Принимаем массив изображений в props
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
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

export default function SliderCarousel({ sliderImages }: PageInfoSliderProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
    document.body.style.overflow = "hidden"; // Убираем скролл у body при открытии модального окна
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto"; // Восстанавливаем скролл у body при закрытии модального окна
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      // Если клик произошел на .modalBackdrop, а не на вложенных элементах, закрываем модальное окно
      closeModal();
    }
  };

  return (
    <div className={styles.parent}>
      <Carousel
        responsive={responsive}
        swipeable={true}
        autoPlay={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImages.map((imageUrl, index) => {
          return (
            <div
              className={styles.slider}
              key={index}
              onClick={() => openModal(imageUrl)}
            >
              <img src={imageUrl} alt="slider" />
            </div>
          );
        })}
      </Carousel>

      {modalOpen && (
        <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={closeModal}></span>
            <img
              src={selectedImage}
              alt="Enlarge"
              className={styles.enlargedImg}
            />
          </div>
        </div>
      )}
    </div>
  );
}
