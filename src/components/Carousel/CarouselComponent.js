import React, { useState } from 'react';
import {ReactComponent as ArrowIcon} from '../../assets/images/arrow.svg'
import { useTransition, animated } from 'react-spring';
import "./CarouselComponentStyles.scss";

const Carousel = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNextSlide = () => {
    setDirection(1);
    setActiveSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const goToPreviousSlide = () => {
    setDirection(-1);
    setActiveSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const transitions = useTransition(activeSlide, {
    from: { opacity: 1, transform: `translate3d(${direction * 100}%,0,0)` },
    enter: { opacity: 1, transform: 'translate3d(0px,0,0)' },
    to: { opacity: 1, transform: `translate3d(${direction * -100}%,0,0)` },
  });
  

  return (
    <div className="carousel-container">
      <button className="carousel-button previous" onClick={goToPreviousSlide}>
       <ArrowIcon className='arrow-icon previous'/>
      </button>
      {transitions((styles, item) => 
        <animated.div 
          style={styles} 
          className="carousel-slide"
        >
          {slides[item]}
        </animated.div>
      )}
      <button className="carousel-button next" onClick={goToNextSlide}>
      <ArrowIcon className='arrow-icon next'/>
      </button>
    </div>
  );
};

export default Carousel;
