import React, { useState } from "react";
import "./CarouselComponentStyles.scss";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    const index = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % slides.length;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <button className="carousel-prev" onClick={goToPrevSlide}>
        Prev
      </button>
      <ul className="carousel-slides">
        {slides.map((slide, index) => (
          <li
            key={index}
            className={index === currentIndex ? "active" : ""}
          >
            {slide}
          </li>
        ))}
      </ul>
      <button className="carousel-next" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
