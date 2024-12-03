import React from 'react';
import Image1 from '../../assets/travel1.png'
import Image2 from '../../assets/travel2.png'
import Image3 from '../../assets/graduate.png'
import pattern from '../../assets/Pattern.png'
import rectangle from '../../assets/Rectangl.png'


const Benefits = () => {
    const benefits = [
      'Accidental Death Coverage: In the unfortunate event of accidental death, the policy provides financial support to the beneficiary, ensuring their stability during difficult times.',
      'Permanent Disablement Benefits: Offers compensation for permanent total or partial disablement due to accidental injuries, helping you manage the financial impact of such life-changing events.',
      'Temporary Total Disability Protection: Provides financial assistance if you are temporarily unable to work due to an accident, ensuring that your income remains stable while you recover.',
      'Medical Expenses Coverage: Covers medical bills arising from accidents during your travels, reducing the financial burden of hospitalization, treatment, and recovery.'
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
                Comprehensive Coverage for a Safer Journey
              </h2>
              <p className="text-[#212121] mb-6">
                Designed to cover accidental injuries, medical expenses, and more, this policy ensures you and your group are financially secure in the event of emergencies.
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