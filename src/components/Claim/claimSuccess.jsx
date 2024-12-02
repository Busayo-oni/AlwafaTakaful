import React from "react";
import Image from "../../assets/covered.jpeg";
import Footer from '../Footer'
import Nav from '../nav'
import { useNavigate } from "react-router-dom";

const ClaimSuccess = ({ phoneNumber = "+234 810 000 0000" }) => {
  const background = Image || "/fallback-image.jpg";
  const navigate = useNavigate();

  return (
    <>
    <Nav />
      {/* Hero Section */}
      <div
        className="lg:h-80 h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
<div className="lg:h-80 h-[50vh] flex items-center justify-center bg-[#50172080]">
          <h1 className="font-Matter font-[600] text-white lg:text-[64px] text-[40px] ">File Your Claims</h1>
        </div>      </div>

      {/* Main Content */}
      <div className="bg-[#FFEED0] min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-3xl">
          <h1 className="text-4xl font-bold text-[#1E1E1E]">
          Thank You for Submitting Your Claim!
          </h1>
          <p className="text-lg text-gray-700">
          We have received your claim and our team is already working to process it. Your trust in us is important, and we are committed to resolving your claim as efficiently as possible. If you need any further assistance or have questions during the review process, please don’t hesitate to reach out. <br />
          Thank you for choosing Alwafa Takaful for your insurance needs.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#501720] text-white px-6 py-2 rounded-lg hover:bg-[#40141a] transition-all duration-300"
            aria-label="Go back to the homepage"
          >
            GO BACK HOME
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClaimSuccess;
