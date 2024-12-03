import React from 'react';
import Image1 from '../../assets/shipping2.png'
import Image2 from '../../assets/shipping3.png'
import Image3 from '../../assets/graduate.png'
import pattern from '../../assets/Pattern.png'
import rectangle from '../../assets/Rectangl.png'


const Benefits = () => {
    const benefits = [
      'All-Risk Protection: Enjoy peace of mind with our all-risk policy that safeguards against a wide array of potential losses, including theft, fire, and water damage, minimizing your financial exposure.',
      'Customizable Add-Ons: Enhance your policy with optional coverage for war risks and strikes, providing extra protection against unforeseen circumstances that could impact your cargo.',
      'Professional Underwriting Support: Benefit from our expert underwriting team, which evaluates your specific risk exposure and provides personalized guidance to tailor your policy according to your cargo’s unique requirements.',
      'Commitment to Shariah Compliance: Our Takaful scheme operates in accordance with Shariah principles, ensuring that your coverage aligns with ethical and moral standards.'
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
              <p className="text-sm text-[#684B06] mb-2">Coverage & Benefits</p>
              <h2 className="text-3xl font-bold mb-4 text-[#212121] ">
                Comprehensive Protection Tailored for You and Yours
              </h2>
              <p className="text-[#212121] mb-6">
                With Alwafa Marine Cargo Takaful, you’re covered from all angles. From all-risk coverage to specific protection against fire, collision, and more, ensure your goods reach their destination safely with tailored coverage options that suit your needs.
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