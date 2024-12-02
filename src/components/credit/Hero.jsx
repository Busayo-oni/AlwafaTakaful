import React from 'react';
import HeroBg from '../../assets/coins.jpeg'
const Hero = () => {
  const HeroBackgr = HeroBg 
    return (
      <div className="relative h-[600px]  text-white pt-16 bg-cover bg-no-repeat "
      style={{backgroundImage: `url(${HeroBackgr})` }}
      >
        <div className="absolute inset-0 bg-[#501720B2] ">
          <div className="container w-1/2  lg:px-10 py-20">
            <h1 className="text-5xl font-bold mb-4">Secure Your Financing with Shariah-Compliant Protection</h1>
            <p className="text-lg mb-8 max-w-2xl">
            The Alwafa Credit Takaful Plan offers peace of mind by safeguarding your financing with comprehensive protection in case of unforeseen events. In the event of death, the outstanding financing amount is covered, ensuring your loved ones are not burdened with the liability.            </p>
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