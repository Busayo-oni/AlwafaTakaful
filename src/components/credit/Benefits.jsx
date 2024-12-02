import React from 'react';
import Image1 from '../../assets/coins1.png'
import Image2 from '../../assets/pig1.png' 
import Image3 from '../../assets/graduate.png'
import pattern from '../../assets/Pattern.png'
import rectangle from '../../assets/Rectangl.png'


const Benefits = () => {
    const benefits = [
      "Death Benefit Coverage: Upon the participant's death, the outstanding financing amount is fully covered, relieving the burden of debt from loved ones.",
      "Distributable Mortality Surplus: upon expiration of the Certificate, the distributable mortality surplus in the Participant Risk Fund (PRF), if any, will be shared on annual basis in the proportion of 80% to the participant and 20% to Alwafa Takaful based on the principle of Jualah.",
      "Optional Riders: Add-on coverage for burial expenses, critical illness, and total permanent disability, providing additional layers of protection."
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
              Shariah-Compliant Financial Protection for Your Peace of Mind
              </h2>
              <p className="text-[#212121] mb-6">
              The Alwafa Credit Takaful Plan offers comprehensive coverage for outstanding financing in the event of death, ensuring that your loved ones are not burdened with debt. Rooted in Islamic finance principles, the plan provides flexibility, profit-sharing opportunities, and optional riders for additional protection.
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