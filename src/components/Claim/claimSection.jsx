import React from "react";
import Nav from "../nav";
import Image from '../../assets/covered.jpeg';
import Footer from '../Footer'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ClaimSection = () => {

  const background = Image
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/ClaimSuccess");
  };

  return (
    <>
      <Nav />
      {/* Hero Section */}
      <div
        className="lg:h-80 h-[50vh] bg-cover bg-center "
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="lg:h-80 h-[50vh] flex items-center justify-center bg-[#50172080]">
          <h1 className="font-Matter font-[600] text-white lg:text-[64px] text-[40px] ">File Your Claims</h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-[#FFEED0] min-h-screen flex items-center justify-center py-10">
     

          {/* Contact Form */}
          <div className="bg-white w-full md:w-1/2 p-8 space-y-6">
            <form onSubmit={handleSubmit}>
              

              {/* Phone */}
              <label htmlFor="policy">Policy Number</label>
              <input
                type="text"
                placeholder="Policy Number"
                className="w-full border rounded-lg px-4 py-2 mb-4"
              />

              {/* Issue Type */}
              <label htmlFor="type">Claim Type</label>
              <select
                className="w-full text-[#A4A4A4] border rounded-lg px-4 py-2 mb-4"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Claim Type
                </option>
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Other</option>
              </select>


              <label htmlFor="Date">Incident Date</label>
              <input
                type="Date"
                placeholder="Date"
                className="w-full border text-[#A4A4A4] rounded-lg px-4 py-2 mb-4"
              />

              {/* Message */}
              <textarea
                placeholder="Message"
                className="w-full border rounded-lg px-4 py-2 h-32 mb-4"
                required
              ></textarea>

              {/* File Upload */}
              <div className="border-dashed border-2 border-gray-400 rounded-lg p-4 flex items-center justify-center text-gray-500 mb-4">
                <label
                  className="cursor-pointer bg-gray-300 border rounded-lg px-4 py-2"
                >
                  <input type="file" className="hidden" />
                  Select Files
                </label>
                <div className="ml-4">
                  Drag and drop files here to upload
                </div>
              </div>


              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#501720] text-white text-sm font-semibold py-2 rounded-lg hover:bg-maroon-dark"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      
      <Footer />
    </>
  );
};

export default ClaimSection;
