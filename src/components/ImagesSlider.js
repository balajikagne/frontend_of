import React, { useState, useEffect } from "react";
import { slideImages } from "./Imagses";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function ImagesSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    // Function to transition to the next slide every 10 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 10000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [current, length]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {slideImages.map((slide, index) => (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.images} alt="travel images" className="Imageslide" />
            )}
          </div>
        ))}
      </section>
    </>
  );
}

