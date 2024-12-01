import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Header = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={ logo } alt="Alwafa Logo" className="h-10 lg:h-20 mb-2 mr-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
          
         
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex gap-6 items-center">
          <a href="#" className="hover:text-[rgba(104,75,6,1)] text-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">HOME</a>

          {/* About Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="hover:text-[rgba(104,75,6,1)] text-gray-800 flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              ABOUT <span className="ml-1">&#9662;</span>
            </button>
            {isAboutOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg border rounded-md text-sm w-[11vw]">
                <Link to="/OurStory"   className="block px-4 py-2 hover:bg-gray-100 ">Our Story  </Link> 
                <Link to="/BoardOfDirectors" className="block px-4 py-2 hover:bg-gray-100 border-t-[0.5px] border-[rgba(80,23,32,1)]">Board of Directors </Link>
                <Link to="/AdvisoryTeam" className="block px-4 py-2 hover:bg-gray-100 border-t-[0.5px] border-[rgba(80,23,32,1)]">Advisory Team </Link>
                <Link to="/ManagementStaff" className="block px-4 py-2 hover:bg-gray-100 border-t-[0.5px] border-[rgba(80,23,32,1)]">Management Staff </Link>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="hover:text-[rgba(104,75,6,1)] text-gray-800 flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              PRODUCTS <span className="ml-1">&#9662;</span>
            </button>
            {isProductsOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg border rounded-md text-sm">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Product 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product 3</a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-[rgba(104,75,6,1)] text-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">CONTACT US</a>
          <a href="#" className="hover:text-[rgba(104,75,6,1)] text-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">TAKAFUL CALCULATOR</a>
          <a href="#" className="hover:text-[rgba(104,75,6,1)] text-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">FAQ</a>
        </nav>

        {/* Report a Claim Button */}
        <a
          href="#"
          className="hidden lg:block bg-[rgba(80,23,32,1)] text-white py-2 px-4 rounded-full font-semibold hover:bg-[rgba(80,23,32,1)] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          REPORT A CLAIM
        </a>

        {/* Mobile Menu Button */}
        <button className="lg:hidden"
        onClick={toggleMenu}
          aria-label="Toggle Menu"
          >
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>
       {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <Link to="/HOME" className="hover:text-[rgba(104,75,6,1)] text-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">HOME</Link> 

            {/* About Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="hover:text-[rgba(104,75,6,1)] text-gray-800 flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              ABOUT <span className="ml-1">&#9662;</span>
            </button>
            {isAboutOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg border rounded-md text-sm sm:w-[20vw] z-10">
                <Link to="/OurStory"   className="block px-4 py-2 hover:bg-gray-100 ">Our Story  </Link> 
                <Link to="/BoardOfDirectors" className="block px-4 py-2 hover:bg-gray-100 border-t-[0.5px] border-[rgba(80,23,32,1)]">Board of Directors </Link>
                <Link to="/AdvisoryTeam" className="block px-4 py-2 hover:bg-gray-100 border-t-[0.5px] border-[rgba(80,23,32,1)]">Advisory Team </Link>
                <Link to="/ManagementStaff" className="block px-4 py-2 hover:bg-gray-100 border-t-[0.5px] border-[rgba(80,23,32,1)]">Management Staff </Link>
              </div>
            )}
          </div>
            {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="hover:text-[rgba(104,75,6,1)] text-gray-800 flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              PRODUCTS <span className="ml-1">&#9662;</span>
            </button>
            {isProductsOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg border rounded-md sm:w-[20vw] text-sm z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Product 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product 2</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product 3</a>
              </div>
            )}
          </div>

          <Link to="/CONTACT-US"  className="hover:text-[rgba(104,75,6,1)] text-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">CONTACT US</Link> 
          <Link to="/TAKEFUL"  className="hover:text-[rgba(104,75,6,1)] text-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">TAKAFUL CALCULATOR</Link> 
          <Link to="/FAQ"  className="hover:text-[rgba(104,75,6,1)] text-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">FAQ</Link> 

          {/* Report a Claim Button */}
        <a
          href="#"
          className="sm:block lg:block bg-[rgba(80,23,32,1)] text-white py-2 px-4 rounded-full font-semibold hover:bg-[rgba(80,23,32,1)] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          REPORT A CLAIM
        </a>
          </nav>
          
        </div>
      )}
    </header>
  );
};

export default Header;