import React from 'react';
import Image1 from '../assets/thirdImage.png';
import Play from '../assets/play.png';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:h-[100vh] bg-[#FFEED0] p-6 lg:p-[100px_120px]">
      {/* Image Section */}
      <div className="relative lg:w-1/2">
        <img
          className="relative w-full h-auto lg:h-[70vh] object-contain lg:object-cover"
          src={Image1}
          alt="A representation of Takaful insurance"
        />
        <img
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20"
          src={Play}
          alt="Play button icon"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 flex flex-col gap-5 items-start">
        <p className="font-[400] text-[18px] text-[#684B06]">About Us</p>
        <h1 className="font-[600] text-[25px] lg:text-[44px] text-[#101010]">
          Trusted Takaful Insurance for Your Peace of Mind
        </h1>
        <p className="font-[500] text-[16px] lg:text-[18px] text-[#212121]">
          To provide accessible and ethical insurance solutions rooted in Islamic finance principles to families and businesses across Nigeria and West Africa.
        </p>
        <p className="font-[400] text-[16px] lg:text-[18px] text-[#212121]">
          At Alwafa, we believe in offering insurance that aligns with your values. As a fully Sharia-compliant Takaful provider, we’re committed to offering financial protection that is based on ethical principles. Whether you’re seeking coverage for your family, business, or property, our Takaful solutions ensure you’re protected without compromising your beliefs.
        </p>
        <button className="text-[18px] bg-[#501720] text-white p-[8px_20px] font-[600] rounded-full">
          <a href="/">LEARN MORE</a>
        </button>
      </div>
    </div>
  );
};

export default About;
