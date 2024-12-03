import React from 'react';
import Image1 from '../../assets/fidelity1.png'
import Image2 from '../../assets/fidelity2.png'
import Image3 from '../../assets/graduate.png'
import pattern from '../../assets/Pattern.png'
import rectangle from '../../assets/Rectangl.png'


const Benefits = () => {
    const benefits = [
      'Comprehensive Fraud Protection: Safeguard your business from financial losses caused by employee dishonesty, fraud, or theft with coverage tailored to protect against internal risks.',
      'Peace of Mind for Employers: Rest easy knowing your business assets and finances are protected from unforeseen acts of dishonesty, enabling you to focus on growth and success.',
      'Easy Claims Process: Benefit from a straightforward claims procedure, with prompt assessment and settlement, ensuring minimal disruption to your operations.',
      'Sharia-Compliant Coverage: Enjoy the assurance of ethical, Sharia-compliant Takaful coverage, adhering to the principles of donation, profit sharing, and solidarity, with no compromise on your values.'
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
                Protect Your Business, Secure Your Future
              </h2>
              <p className="text-[#212121] mb-6">
                Discover how Alwafa Fidelity Guarantee Takaful can help you mitigate risks by offering protection against employee fraud and dishonesty, ensuring your business remains financially secure.
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