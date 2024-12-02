import React from 'react';
import Image1 from '../../assets/happycar.png'
import Image2 from '../../assets/pablocar.png' 
import Image3 from '../../assets/graduate.png'
import pattern from '../../assets/Pattern.png'
import rectangle from '../../assets/Rectangl.png' 


const Benefits = () => {
    const benefits = [
      "Comprehensive Coverage: Enjoy extensive protection against a wide range of risks, including accidents, fire damage, theft, and third-party liabilities. Drive knowing that you and your vehicle are well-protected.",
      "Peace of Mind: With coverage for both personal and third-party damages, you can focus on your journey without worrying about unexpected financial burdens. Our Takaful policy ensures you're covered in times of need.",
      "Tailored Optional Benefits: Customize your policy with optional benefits such as coverage for natural disasters, civil disturbances, and passenger liability. Ensure your protection fits your unique driving circumstances.",
      "No-Claim Discount (NCD): Benefit from discounts on your Takaful contributions for each claim-free year, rewarding responsible driving and helping you save on future premiums."
    ];
  
    return (
      <div className="py-16 px-4 pb-32">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 pb-32 gap-4 relative">
              <div className="bg-gray-200 rounded-lg  lg:h-64"><img className=' ' src={Image1} alt="" /></div>
              <div className="rounded-lg w-1/3 -z-20 top-10 left-[13rem] mt-8 absolute"><img src={pattern} alt="" /></div>
              <div className="rounded-lg w-[45%] -z-20 top-20 left-[7rem] mt-8 absolute"><img src={rectangle} alt="" /></div>
              <div className="bg-gray-200 rounded-lg w-1/3 lg:top-48 top-[10rem] left-48 mt-8 absolute"><img src={Image2} alt="" /></div>
            </div>
            <div>
              <p className="text-sm text-[#684B06] mb-2">Overview & Benefits</p>
              <h2 className="text-3xl font-bold mb-4 text-[#212121] ">
              Drive with Confidence: Alwafa Comprehensive Car Takaful
              </h2>
              <p className="text-[#212121] mb-6">
              Enjoy peace of mind with robust coverage for third-party liabilities, vehicle theft, and damage from accidents, fires, and natural disasters.
              </p>
              <div className="space-y-3">
                <b className="text-[#212121] mb-6"><img src={Image3} className='inline pr-4' alt="" />Key Benefits</b>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-yellow-500">★</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Benefits;