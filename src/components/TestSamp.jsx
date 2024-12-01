import React, { useState } from "react";
import { Protocaro } from "./Protocaro";

const CardCarousel = () => {
  const cards = [
    {
      title: <Protocaro />
    },
    {
        title: <Protocaro />
    },
    {
        title: <Protocaro />
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      {/* Carousel */}
      <div
        className="flex wi transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-full overflow- flex-shrink-0"
            style={{ flexBasis: "33.3333%" }}

          >
            <div className="bg-white flex flex-col items-start  rounded-lg p-6">
              <h3 className="flex border-[1px] p-1 items-start justify-start">{card.title}</h3>
              <div>{card.buttonText}</div>
              <button className="px-4 py-6  text-white rounded-md">
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="absolute left-1/2 ml-1 -mt-5  transform -translate-y-1/2 bg-white border-2 border-[#501720] text-[#501720] p-[4px_8px] rounded-full hover:bg-[#501720] hover:text-white"
        onClick={handlePrev}
      >
        &#129104;
      </button>
      <button
        className="absolute right-1/2 mr-1 -mt-5  transform -translate-y-1/2 bg-white border-2 border-[#501720] text-[#501720] p-[4px_8px] rounded-full hover:bg-[#501720] hover:text-white"
        onClick={handleNext}
      >
        &#129106;
      </button>
    </div>
  );
};

export default CardCarousel;
