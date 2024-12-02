import React from 'react';
import HeroBg from '../../assets/teacherStudent.jpeg'
const Hero = () => {
  const HeroBackgr = HeroBg
    return (
      <div className="relative h-[600px]  text-white pt-16 bg-cover "
      style={{backgroundImage: `url(${HeroBackgr})` }}
      >
        <div className="absolute inset-0 bg-[#501720B2] ">
          <div className="container w-1/2  lg:px-10 py-20">
            <h1 className="text-5xl font-bold mb-4">Secure Your Child’s Future with the Alwafa Endowment Plan</h1>
            <p className="text-lg mb-8 max-w-2xl">
            Invest in your child’s education with a comprehensive plan that combines savings, investment, and Takaful protection. Whether you're there or not, ensure their financial security and a brighter tomorrow.            </p>
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