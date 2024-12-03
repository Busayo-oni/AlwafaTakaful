import React from 'react';
import shipping from '../../assets/shipping.jpeg'
const Hero = () => {
  const HeroBackgr = shipping
    return (
      <div className="relative h-[600px]  text-white pt-16 bg-cover bg-center"
      style={{backgroundImage: `url(${HeroBackgr})` }}
      >
         {/* Overlay with semi-transparent background */}
        <div className="absolute inset-0 bg-[rgba(80,23,32,0.7)]"></div>

        <div className="absolute inset-0 ">
          <div className="container mx-auto px-4 py-20">
            <h1 className="text-5xl font-bold mb-4">Protect Your Goods, Secure Your Business</h1>
            <p className="text-lg mb-8 max-w-2xl">
             Get comprehensive coverage for your cargo with Alwafa Marine Cargo Takaful. Safeguard your shipments against loss, damage, and unexpected risks, ensuring your business stays on course, no matter the journey.
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