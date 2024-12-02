import React from "react";
import Image from "../../assets/fourhead.jpeg";
import Footer from '../Footer'
import Nav from '../nav'
import { useNavigate } from "react-router-dom";

const ThankYou = ({ phoneNumber = "+234 810 000 0000" }) => {
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
          <h1 className="font-Matter font-[600] text-white lg:text-[64px] text-[40px] ">Get In Touch</h1>
        </div>      </div>

      {/* Main Content */}
      <div className="bg-[#FFEED0] min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-3xl">
          <h1 className="text-4xl font-bold text-[#1E1E1E]">
            Thank You for Contacting Us
          </h1>
          <p className="text-lg text-gray-700">
            Thank you for reaching out to Alwafa. We have received your message,
            and our team will get back to you as soon as possible. Your
            inquiries are important to us, and we are committed to providing you
            with the best support and information regarding our Takaful
            insurance solutions.
          </p>
          <p className="text-lg text-gray-700">
            If your matter is urgent, feel free to call us directly at{" "}
            <strong>{phoneNumber}</strong>. We look forward to assisting you!
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

export default ThankYou;
