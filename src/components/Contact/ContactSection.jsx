import React from "react";
import Nav from "../nav";
import Image from '../../assets/fourhead.jpeg';
import Footer from '../Footer'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {

  const background = Image
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Thankyou");
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
          <h1 className="font-Matter font-[600] text-white lg:text-[64px] text-[40px] ">Get In Touch</h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-[#FFEED0] min-h-screen flex items-center justify-center py-10">
        <div className="w-full max-w-6xl flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
          {/* Contact Info */}
          <div className="bg-[#501720] text-white w-full md:w-1/2 p-12 space-y-6">
            <h2 className="text-3xl font-bold">HELLO!</h2>
            <p>
              We'd love to hear from you! Send us a message using the form
              opposite or send us a mail.
            </p>

            <div className="space-y-4">
              <div>
                <p className="font-semibold">Email</p>
                <p>info@alwafa.com</p>
              </div>

              <div>
                <p className="font-semibold">Phone</p>
                <p>+234 810 000 0000</p>
              </div>

              <div>
                <p className="font-semibold">Location</p>
                <p>13, Alwafa Street, Abuja, Nigeria</p>
              </div>
            </div>

            <div>
              <p className="font-semibold">Connect With Us</p>
              <div className="flex space-x-2 mt-2">
                <a href="#" className="text-xl hover:text-gray-300">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-xl hover:text-gray-300">
                  <FaTwitter />
                </a>
                <a href="#" className="text-xl hover:text-gray-300">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="text-xl hover:text-gray-300">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white w-full md:w-1/2 p-8 space-y-6">
            <form onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full md:w-1/2 border rounded-lg px-4 py-2 mb-4 md:mb-0"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full md:w-1/2 border rounded-lg px-4 py-2"
                  required
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-2 mb-4"
                required
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-2 mb-4"
              />

              {/* Issue Type */}
              <select
                className="w-full border rounded-lg px-4 py-2 mb-4"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Issue Type
                </option>
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Other</option>
              </select>

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

              {/* Captcha */}
              <div className="flex items-center space-x-4 mb-4">
                <input type="checkbox" id="captcha" required />
                <label htmlFor="captcha">I'm not a robot</label>
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
      </div>
      <Footer />
    </>
  );
};

export default ContactSection;
