import React, { useState } from "react";
import ListQuote from "./ListQuote";
import Image1 from '../assets/13Image.png'
import Image2 from '../assets/14Image.png'


const CardSlider = () => {
  const cards = [
    {
      title: <ListQuote image={Image1}
      title='Group Family Takaful'
      content=' It offers comprehensive coverage in the event of death from any cause, ensuring the financial security of the member’s family or dependents.' />
},
    {
        title: <ListQuote image={Image2}
         title='Motor Takaful'
         content=' Enjoy extensive protection against a wide range of risks, including accidents, fire damage, theft, and third-party liabilities.' />
  },
    {
      title: <ListQuote image={Image1}
      title='Credit Takaful'
      content=' The Alwafa Credit Takaful Plan offers comprehensive coverage for outstanding financing in the event of death, ensuring that your loved ones are not burdened with debt.' />
},
    {
      title: <ListQuote image={Image1}
      title='Credit Takaful'
      content=' The Alwafa Credit Takaful Plan offers comprehensive coverage for outstanding financing in the event of death, ensuring that your loved ones are not burdened with debt.' />
},
    {
      title: <ListQuote image={Image1}
      title='Credit Takaful'
      content=' The Alwafa Credit Takaful Plan offers comprehensive coverage for outstanding financing in the event of death, ensuring that your loved ones are not burdened with debt.' />
},
    {
      title: <ListQuote image={Image1}
      title='Credit Takaful'
      content=' The Alwafa Credit Takaful Plan offers comprehensive coverage for outstanding financing in the event of death, ensuring that your loved ones are not burdened with debt.' />
},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3; // Number of cards visible at a time

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards >= cards.length ? 0 : prevIndex + visibleCards
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - visibleCards : prevIndex - visibleCards
    );
  };

  return (
    <div className="relative  w-full mx-auto pb-20 overflow-hidden">
      {/* Slider */}
      <div
        className="flex  transition-transform duration-500"
        style={{
          transform: `translateX(-${(currentIndex / cards.length) * 100}%)`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className=" w-full flex-shrink-0  px-4"
            style={{ flexBasis: "33.3333%" }}
          >
            <div className="lg:w-full w-1/2 overflow-hidden items-start gap- justify-center flex ">
              <div className="flex items-start justify-center">{card.title}</div>

            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="absolute left-1/2 ml-1 -mt-5 bottom-2 transform -translate-y-1/2 bg-white border-2 border-[#501720] text-[#501720] p-[4px_8px] rounded-full hover:bg-[#501720] hover:text-white"
        onClick={handlePrev}
      >
        &#129104;
      </button>
      <button
        className="absolute right-1/2 mr-1 -mt-5 bottom-2 transform -translate-y-1/2 bg-white border-2 border-[#501720] text-[#501720] p-[4px_8px] rounded-full hover:bg-[#501720] hover:text-white"
        onClick={handleNext}
      >
        &#129106;
      </button>
    </div>
  );
};

export default CardSlider;
