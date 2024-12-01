import React, { useState, useEffect } from "react";
import Header from './Header'
import Header2 from './Header2'
import Header3 from './Header3'




const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      title: <Header />
    },
    {
        id: 2,
        title: <Header2 />
      },
      {
        id: 3,
        title: <Header3 />
      }
  ];

  // Auto slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  // Manual navigation
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full lg:h-screen h-[50vw] overflow-hidden">
      {/* Slide Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}

            className={` absolute h-full flex flex-col overflow-hidden justify-center items-center text-white  transition-all duration-1000 ease-in-out transform ${
                index === currentSlide
                  ? "translate-x-0 opacity-100 z-0 "
                  : index < currentSlide
                  ? "-translate-x-full opacity-0 z-0 "
                  : "translate-x-full opacity-0 z-0 "
                  
              } ${slide.bgColor}`}
                       >
            <div className=""
            
            >{slide.title}</div>
          </div>
        ))}
      </div>

      

      {/* Indicator Dots */}
    <div className="absolute lg:bottom-6 bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
    <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white  p-[1px_4px] border-white border-[1px] rounded-[100%] shadow-lg hover:bg-[#8a646a]"
        onClick={handlePrevSlide}
      >
        &#11104;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white  p-[1px_4px] border-white border-[1px] rounded-[100%] shadow-lg hover:bg-[#8a646a]"
        onClick={handleNextSlide}
      >
        &#11106;
      </button>
      </div>
    </div>
  );
};

export default HeroSection;
