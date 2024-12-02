import React from 'react'

import { useNavigate } from "react-router-dom";

const CalculatorSection = () => {
  const navigate = useNavigate(); 

  const handleGenerate = (event) => {
    event.preventDefault();
    navigate("/generate"); 
  };

  return (
    <div>
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/calculator.jpg')" }}
      ></div>
      <div className="bg-[#FFEED0] min-h-screen flex items-center justify-center py-10">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <form className="space-y-4" onSubmit={handleGenerate}>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#501720]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#501720]"
              />
            </div>

            <div>
              <input
                type="date"
                placeholder="Date of Birth"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#501720]"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#501720]"
              />
            </div>

            <div>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#501720]"
                defaultValue=""
              >
                <option value="" disabled>
                  Insurance Type
                </option>
                <option value="life">Life Insurance</option>
                <option value="health">Health Insurance</option>
                <option value="car">Car Insurance</option>
              </select>
            </div>

            <div>
              <input
                type="number"
                placeholder="Coverage Amount"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#501720]"
              />
            </div>

            <div>
              <select
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#501720]"
                defaultValue=""
              >
                <option value="" disabled>
                  Policy Term
                </option>
                <option value="1">1 Year</option>
                <option value="5">5 Years</option>
                <option value="10">10 Years</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#501720] text-white py-2 rounded-lg hover:bg-[#7a2431] transition duration-200 font-semibold"
            >
              GENERATE QUOTE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSection;