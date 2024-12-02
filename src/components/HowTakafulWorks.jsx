import React from 'react';
import Image1 from '../assets/15Image.png';

const HowTakafulWorks = () => {
  return (
    <section className="bg-[#FFEED0] p-5 lg:p-[50px] font-Matter text-center">
      {/* Title Section */}
      <p className="font-[400] text-[18px] text-[#684B06]">How Takaful Works</p>
      <h1 className="font-[600] text-[24px] lg:text-[44px] text-[#501720] leading-snug lg:leading-normal">
        Risk Sharing, Not Risk Shifting – The Ethical Way to <br className="hidden lg:block" /> 
        Protect What Matters
      </h1>

      {/* Image Section */}
      <img
        className="cursor-pointer lg:py-8 py-6 mx-auto"
        src={Image1}
        alt="Illustration of risk sharing in Takaful: a person holding a jar of coins"
      />

      {/* Button Section */}
      <button className="text-[18px] bg-[#501720] text-white p-[8px_20px] font-[600] rounded-full cursor-pointer w-full lg:w-auto">
        <a href="/">WATCH MORE</a>
      </button>
    </section>
  );
};

export default HowTakafulWorks;
