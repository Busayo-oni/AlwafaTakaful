import React from 'react';
import HeroBg from '../../assets/cartakaful.jpeg'
const Hero = () => {
  const HeroBackgr = HeroBg  
    return (
      <div className="relative h-[600px]  text-white pt-16 bg-cover bg-no-repeat "
      style={{backgroundImage: `url(${HeroBackgr})` }}
      >
        <div className="absolute inset-0 bg-[#50172080] ">
          <div className="container w-1/2  lg:px-10 py-20">
            <h1 className="text-5xl font-bold mb-4">Alwafa Comprehensive Private Car Takaful</h1>
            <p className="text-lg mb-8 max-w-2xl">
            Experience peace of mind on the road with Alwafa Comprehensive Private Car Takaful. This Takaful Policy offers robust coverage for liabilities, protecting you against injury or death to third parties, property damage, and loss or damage to your vehicle due to accidents, fire, theft, and more.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100">
                GET A FREE QUOTE
              </button>
              <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white/10">
                DOWNLOAD BROCHURE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Hero;