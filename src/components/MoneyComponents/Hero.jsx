import React from 'react';
import Moneyhero from '../../assets/Moneyhero.jpeg'
const Hero = () => {
  const HeroBackgr = Moneyhero
    return (
      <div className="relative h-[600px]  text-white pt-16 bg-cover bg-center"
      style={{backgroundImage: `url(${HeroBackgr})` }}
      >
         {/* Overlay with semi-transparent background */}
        <div className="absolute inset-0 bg-[rgba(80,23,32,0.7)]"></div>

        <div className="absolute inset-0 ">
          <div className="container mx-auto px-4 py-20">
            <h1 className="text-[40px] font-bold mb-4">Protect Your Money with Alwafa Money Takaful</h1>
            <p className="text-lg mb-8 max-w-2xl">
           Safeguard your finances against unforeseen losses with comprehensive coverage for cash in transit, on your premises, or in your safe. Enjoy peace of mind knowing your funds are protected with Alwafa Money Takaful.
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