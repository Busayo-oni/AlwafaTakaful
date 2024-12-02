import React from 'react';
import HeroBg from '../../assets/Hero-Section.png'
const Hero = () => {
  const HeroBackgr = HeroBg
    return (
      <div className="relative h-[600px]  text-white pt-16 bg-cover "
      style={{backgroundImage: `url(${HeroBackgr})` }}
      >
        <div className="absolute inset-0 ">
          <div className="container mx-auto px-4 py-20">
            <h1 className="text-5xl font-bold mb-4">Group Family Takaful</h1>
            <p className="text-lg mb-8 max-w-2xl">
              Group Family Takaful is a purely humanitarian Family Takaful solution designed to provide 
              financial protection and reassurance for family members.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
                GET A FREE QUOTE
              </button>
              <button className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10">
                DOWNLOAD BROCHURE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Hero;