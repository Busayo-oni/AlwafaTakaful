import React, { useState, useEffect } from "react";
import Header from "./Header";
import Header2 from "./Header2";
import Header3 from "./Header3";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      content: <Header />,
    },
    {
      id: 2,
      content: <Header2 />,
    },
    {
      id: 3,
      content: <Header3 />,
    },
  ];

  // Auto slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [slides.length]);

  // Manual navigation
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full bg-[#501720] lg:h-screen h-[80vh] overflow-hidden">
      {/* Slide Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide
                ? "translate-x-0 opacity-100 z-0"
                : index < currentSlide
                ? "-translate-x-full opacity-0 z-0"
                : "translate-x-full opacity-0 z-0"
            }`}
          >
            {slide.content}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-[1px_4px] border-white border-[1px] rounded-full shadow-lg hover:bg-[#8a646a]"
      >
        &#11104;
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-[1px_4px] border-white border-[1px] rounded-full shadow-lg hover:bg-[#8a646a]"
      >
        &#11106;
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
