import React from "react";
import hero1 from '../../assets/child.png'
import save from '../../assets/healthand.png'
import healthicons from '../../assets/period.png'
import streamline from '../../assets/helt.png'
import scalability from '../../assets/money.png'
import Ellipse2 from '../../assets/Ellipse2.png'
import Ellipse3 from '../../assets/Ellipse3.png'
import Ellipse4 from '../../assets/Ellipse4.png'

const TakafulInsurance = () => {
  return (
    <div className="bg-white pt-8 px-4 md:px-16 lg:pt-0">
      <div className="text-center md:text-start lg:text-left grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h5 className="text-[16px] text-[rgba(104,75,6,1)] font-medium mb-2">Why Choose Alwafa Takaful?</h5>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-4 text-gray-800 ">
          Key Benefits for Your Child’s Secure Future
          </h2>
          <p className="text-gray-600 mb-8 text-[16px]">
          Enjoy peace of mind with protection, savings, and investment benefits that ensure your child's education and financial security, no matter what life brings.
          </p>
          {/* Features Section */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="bg-[rgba(243,194,130,1)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                   <img src={streamline} alt="Claims Processed" className="w-full " />
                  </div>
              <div className="flex items-center mb-2">
               
                   
                
                <h3 className="text-lg font-semibold">
                Partial Maturity / Maturity Benefits
                </h3>
              </div>
              <p className="text-sm text-gray-500">
              At the end of 1/3 of the chosen term, 25% of the PIA balance is payable, followed by another 25% at 2/3 of the term. The balance, along with all accumulated profits, is payable at maturity, including the total due in the PIA and returns on investment.              </p>
            </div>
            
            <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
               <div className="bg-[rgba(243,194,130,1)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                   <img src={save} alt="Claims Processed" className="w-full " />
                  </div>
              <div className="flex items-center mb-2">
               
                <h3 className="text-lg font-semibold ">Supplementary Benefits</h3>
              </div>
              <p className="text-sm text-gray-500">
              In the event of death or total permanent disability while the certificate is active, 10% of the PIA balance will be paid annually to the beneficiary until one year before the maturity date.     
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="bg-[rgba(243,194,130,1)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                   <img src={healthicons} alt="Claims Processed" className="w-full " />
                  </div>
              <div className="flex items-center mb-2">
               
                <h3 className="text-lg font-semibold ">Period of Takaful/ Sum Covered</h3>
              </div>
              <p className="text-sm text-gray-500">
              Participants can choose a plan duration ranging from a minimum of 6 years to 18 years or more, depending on their age at entry. The plan includes an equal number of paid and unpaid Takaful installments from the start until the maturity date. 
              </p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className=" bg-[rgba(243,194,130,1)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                   <img src={scalability} alt="Claims Processed" className="w-full "/>
                  </div>
              <div className="flex items-center mb-2">
                
                <h3 className="text-lg font-semibold ">Installments amount / Mode of Payment</h3>
              </div>
              <p className="text-sm text-gray-500 ">
              The Takaful contribution is based on the participant's income, with a minimum monthly installment of N5,000, payable through flexible options such as monthly, quarterly, semi-annually, annually, or as a single contribution.               
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative h-[72%] lg:w-[100%] text-center w-[80%] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
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

export default TakafulInsurance;
