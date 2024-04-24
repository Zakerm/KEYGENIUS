import React, { useState } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import styles from "./PageInfoSlider.module.css";
import { SampleNextArrow, SamplePrevArrow } from "./CustomArrows/CustomArrows";

interface PageInfoSliderProps {
  sliderImages: string[]; // Принимаем массив изображений в props
}

export default function PageInfoSlider(props: PageInfoSliderProps) {
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

  const settings = {
    dots: false,
    infinite: true,

    // prevArrow: <SamplePrevArrow className="prev-arrow" onClick={() => {}} />, // Указываем компонент для кастомной стрелки "назад"
    //nextArrow: <SampleNextArrow className="next-arrow" onClick={() => {}} />, // Указываем компонент для кастомной стрелки "вперед"
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const customArrows = {
    prevArrow: <SamplePrevArrow className="" onClick={() => {}} />,
    nextArrow: <SampleNextArrow className="" onClick={() => {}} />,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings} {...customArrows}>
        {props.sliderImages.map((image, index) => (
          <div
            key={index}
            className={styles.sliderImageWrapper}
            onClick={() => openModal(image)}
          >
            <img
              className={styles.sliderImage}
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>

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
