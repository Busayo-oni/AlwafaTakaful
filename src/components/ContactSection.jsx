import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thank-you');
  }
  return (
    <>
      <div
        className="h-80 bg-cover bg-center"
        style={{ backgroundImage: "url('/Image.jpg')" }}
      >
      </div>

      <div className="bg-[#FFEED0] min-h-screen flex items-center justify-center py-10">
        <div className="w-full max-w-6xl flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
         
          <div className="bg-[#501720] text-white w-full md:w-1/2 p-12 space-y-6 max-h-[600px]">
            <h2 className="text-3xl font-bold">HELLO!</h2>
            <p>
              We'd love to hear from you! Send us a message using the form opposite
              or send us a mail.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div>
                  <p className="font-semibold">Email</p>
                  <p>info@alwafa.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+234 810 000 0000</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div>
                  <p className="font-semibold">Location</p>
                  <p>13, Alwafa Street, Abuja, Nigeria</p>
                </div>
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

          <div className="bg-white w-full md:w-1/2 p-8 space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <input  type="text" placeholder="First Name" className="w-1/2 border rounded-lg px-4 py-2" /> 
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 border rounded-lg px-4 py-2"/>
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-2"/>

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-2" />

              <select className="w-full border rounded-lg px-4 py-2" defaultValue="">
                <option value="" disabled>
                  Issue Type
                </option>
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Other</option>
              </select>

              <textarea
                placeholder="Message"
                className="w-full border rounded-lg px-4 py-2 h-32" ></textarea>

              <div className="bg-[#FFFAF5] flex items-center space-x-4">
                <label className="bg-gray-300 border rounded-lg px-4 py-2">
                  <input type="file" className="hidden" />
                  Select Files
                </label>
                <div className="text-gray-500">
                  Drag and drop files here to upload
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <input type="checkbox" id="captcha" />
                <label htmlFor="captcha">I'm not a robot</label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#501720] text-white text-sm font-semibold py-2 rounded-lg hover:bg-maroon-dark" >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
 