import React from "react";
import hero1 from '../../assets/money3.png'
import save from '../../assets/save.png'
import healthicons from '../../assets/healthicons.png'
import streamline from '../../assets/streamline.png'
import scalability from '../../assets/scalability.png'
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
            Protect Your Money, Secure Your Future
          </h2>
          <p className="text-gray-600 mb-8 text-[16px]">
          Safeguard your funds in transit, on your premises, or in a safe, and enjoy peace of mind knowing you're protected against unexpected losses.
          </p>
          {/* Features Section */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="bg-[rgba(243,194,130,1)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                   <img src={streamline} alt="Claims Processed" className="w-[50%] " />
                  </div>
              <div className="flex items-center mb-2">
               
                   
                
                <h3 className="text-lg font-semibold">
                 Comprehensive Coverage
                </h3>
              </div>
              <p className="text-sm text-gray-500">
                Enjoy comprehensive coverage for a full year, with a simple annual renewal process to keep your protection uninterrupted.
              </p>
              
            </div>
            
            <div className="bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
               <div className="bg-[rgba(243,194,130,1)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                   <img src={save} alt="Claims Processed" className="w-[50%] " />
                  </div>
              <div className="flex items-center mb-2">
               
                <h3 className="text-lg font-semibold ">Affordable Contribution Rates</h3>
              </div>
              <p className="text-sm text-gray-500">
                Enjoy peace of mind with a comprehensive protection plan that offers competitive contribution rates, starting at just N7,500.

                
              </p>
            </div>
            <div className="bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="bg-[rgba(243,194,130,1)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                   <img src={healthicons} alt="Claims Processed" className="w-[50%] " />
                  </div>
              <div className="flex items-center mb-2">
               
                <h3 className="text-lg font-semibold ">Tailored to Your Needs</h3>
              </div>
              <p className="text-sm text-gray-500">
                With flexible options based on your risk exposure, Alwafa Money Takaful allows you to choose a plan that best fits your business requirements.
                
              </p>
            </div>
            <div className="bg-white p-4 border rounded-lg shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className=" bg-[rgba(243,194,130,1)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                   <img src={scalability} alt="Claims Processed" className="w-[50%] "/>
                  </div>
              <div className="flex items-center mb-2">
                
                <h3 className="text-lg font-semibold ">Policy Duration</h3>
              </div>
              <p className="text-sm text-gray-500 ">
               The policy covers you for a period of one year. It must be renewed annually for continued protection.
               
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
