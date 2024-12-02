import React, {useState}from 'react'
import { useNavigate } from 'react-router-dom';

const Generate = () => {
  const navigate = useNavigate();

  const handleDownload =() => {
    navigate("/")
  }
  const [showQuote, setShowQuote] = useState(false);

  const handleGenerate = () => {
    setShowQuote(true);

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8EAD8]">
      {!showQuote ? (
        <div className="bg-[#FDF6E3] border border-[#4A1A1A] rounded-lg shadow-md p-8 max-w-lg w-full">
          <h1 className="text-[#4A1A1A] text-2xl font-bold mb-4">Generate a Quote</h1>
          <button
            type="submit"
            className="w-full bg-[#501720] text-white py-2 rounded-lg hover:bg-[#7a2431] transition duration-200 font-semibold"
            onClick={handleGenerate}
          >
            GENERATE QUOTE
          </button>
        </div>
      ) : (
        <div className="bg-[#FDF6E3] border border-[#4A1A1A] rounded-lg shadow-md p-8 max-w-lg w-full">
          <h1 className="text-[#4A1A1A] text-2xl font-bold mb-4">Your Quote Is Ready!!!</h1>
          <h2 className="text-[#4A1A1A] text-xl font-semibold mb-6">Family Takaful</h2>
          <p className="text-[#4A1A1A] text-sm mb-2">Your Monthly Financial Budget is</p>
          <p className="text-[#4A1A1A] text-2xl font-bold mb-4">₦ 500,000</p>
          <p className="text-[#4A1A1A] text-sm mb-6">
            The rule of thumb is 10% of your income is utilized for the purposes of takaful
          </p>
          <p className="text-[#4A1A1A] text-sm mb-2">
            Your estimated <span className="font-semibold">monthly</span> takaful based on your income is
          </p>
          <p className="text-[#4A1A1A] text-2xl font-bold mb-4">
            ₦ 50,000 <span className="text-sm font-normal">/ monthly</span>
          </p>
          <p className="text-[#4A1A1A] text-sm mb-2">
            Your estimated <span className="font-semibold">premium rider</span> takaful based on your income is
          </p>
          <p className="text-[#4A1A1A] text-2xl font-bold mb-4">
            ₦ 50,000 <span className="text-sm font-normal">/ monthly</span>
          </p>
          <p className="text-[#4A1A1A] text-sm mb-2">
            Your estimated <span className="font-semibold">annual</span> takaful based on your income is
          </p>
          <p className="text-[#4A1A1A] text-2xl font-bold mb-6">
            ₦ 600,000 <span className="text-sm font-normal">/ yearly</span>
          </p>
          <button className="w-full bg-[#4A1A1A] text-white py-3 rounded-md font-semibold hover:bg-[#3B1515] transition duration-300"
          onClick={handleDownload}>
            DOWNLOAD RESULT
          </button>
        </div>
      )}
    </div>
  );
};

export default Generate;