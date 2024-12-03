import React from "react";
import hero1 from '../../assets/shipping4.png'
import save from '../../assets/save.png'
import healthicons from '../../assets/healthicons.png'
import streamline from '../../assets/streamline.png'
import scalability from '../../assets/scalability.png'
import learnMoreButton from '../../assets/learnMoreButton.png'
import Ellipse2 from '../../assets/Ellipse2.png'
import Ellipse3 from '../../assets/Ellipse3.png'
import Ellipse4 from '../../assets/Ellipse4.png'

const KeyFeatures = () => {
  return (
    <div className="py-16 bg-amber-50 pt-8 px-4 md:px-16 ">
      <div className="text-center md:text-start lg:text-left grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h5 className="text-[16px] text-[rgba(104,75,6,1)] font-medium mb-2">Key Features</h5>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-4 text-gray-800 ">
            Key Features of Alwafa Comprehensive Marine Takaful
          </h2>
          <p className="text-gray-600 mb-8 text-[16px]">
            Protect Your Financing and Secure Your Future
          </p>
          {/* Features Section */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="bg-[rgba(243,194,130,1)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                   <img src={streamline} alt="Claims Processed" className="w-[50%] " />
                  </div>
              <div className="flex items-center mb-2">
               
                   
                
                <h3 className="text-lg font-semibold">
                  Coverage Options
                </h3>
              </div>
              <p className="text-sm text-gray-500">
                The Clause (A) Offers the broadest protection against a variety of risks, including theft, fire, and water damage..
Clauses (B) and (C)  Focus on specific risks such as fire, capsizing, and jettison, safeguarding against common  hazards.
              </p>
              
            </div>
            
            <div className="bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
               <div className="bg-[rgba(243,194,130,1)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                   <img src={save} alt="Claims Processed" className="w-[50%] " />
                  </div>
              <div className="flex items-center mb-2">
               
                <h3 className="text-lg font-semibold ">Professional Underwriting Support</h3>
              </div>
              <p className="text-sm text-gray-500">
                Benefit from our expert underwriting team, which evaluates your specific risk exposure and provides personalized guidance to tailor your policy according to your cargo’s unique requirements.
                
              </p>
            </div>
            <div className="bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="bg-[rgba(243,194,130,1)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                   <img src={healthicons} alt="Claims Processed" className="w-[50%] " />
                  </div>
              <div className="flex items-center mb-2">
               
                <h3 className="text-lg font-semibold ">Flexible Policy Duration</h3>
              </div>
              <p className="text-sm text-gray-500">
                Enjoy the flexibility of a policy that commences from the time your goods leave the warehouse and concludes upon delivery at the final destination, providing comprehensive coverage throughout the transportation process.
                
              </p>
            </div>
            <div className="bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className=" bg-[rgba(243,194,130,1)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                   <img src={scalability} alt="Claims Processed" className="w-[50%] "/>
                  </div>
              <div className="flex items-center mb-2">
                
                <h3 className="text-lg font-semibold ">Contribution amount</h3>
              </div>
              <p className="text-sm text-gray-500 ">
                With an annual contribution starting at a minimum of N7,500.00, our Marine Cargo Takaful offers competitive pricing without compromising on coverage, making it accessible for businesses of all sizes.
               
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative h-[100%] lg:w-[100%] text-center w-[80%] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img
            src={ hero1 }
            alt="Coins in a jar"
            className="rounded-lg shadow-lg object-cover object-center w-full h-full "
          />
         

        

{/*CustomerCard */}
    <div className="bg-white p-4 rounded-lg shadow-lg w-[70%] absolute bottom-0 right-[-40px]">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Our Lovely Customer</h4>
          <div className="flex items-center space-x-2 mt-2">
            {/* Profile Images */}
            <div className="flex -space-x-2">
              <img
                src={Ellipse2}
                alt="Customer 1"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
              <img
                src={Ellipse3}
                alt="Customer 2"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
              <img
                src={Ellipse4}
                alt="Customer 3"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
             
              
            </div>
            
            {/* Arrow Icon */}
            <div className="text-blue-500 pl-[-10px]">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
        {/* Reviews */}
        <div className="text-right">
          <p className="text-[21px] text-[rgba(225,135,18,1)]">2k+</p>
          <p className="text-[10px] text-gray-400 w-[60px]">View more reviews</p>
        </div>
      </div>
      {/* Divider */}
      <hr className="my-4" />
      {/* Satisfaction Rate */}
      <div>
        <p className="text-sm text-gray-500 mb-2">Satisfaction rate</p>
         <p className="text-sm text-orange-500 text-right mt-[-25px] mb-8">89.78%</p>
        <div className="relative w-[50%] h-2 bg-gray-200 rounded-full">
          <div
            className="absolute h-full bg-orange-500 rounded-full"
            style={{ width: "89.78%" }}
          ></div>
        </div>
       
      </div>
    </div>

        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;