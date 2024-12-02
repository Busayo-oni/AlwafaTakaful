import React from 'react'
import { Link } from 'react-router-dom';

const calculatorhero = () => {
  return (
    <div>
       <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between"></div>
        <div className="flex items-center">
          <img src="/Asset.jpg" alt="Alwafa Logo" className="h-8" />
        </div>

        
        <div className="flex space-x-6 text-gray-700">
          <Link to="/" className="hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-900">
            About
          </Link>
          <div className="relative group">
            <a href="#" className="hover:text-gray-900">
              Products
            </a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2 mt-1">
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Product 1
              </a>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Product 2
              </a>
            </div>
          </div>
          <Link to="/contact" className="hover:text-gray-900">
            Contact Us
          </Link>
          <Link to="/takaful-calculator" className="hover:text-gray-900">
            Takaful Calculator
          </Link>
          <Link to="/faq" className="hover:text-gray-900">
            FAQ
          </Link>
        </div>

       
        <div>
          <a
            href="#"
            className="bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-red-800"
          >
            Report a Claim
          </a>
        </div>
      </div>
    </div>
  );
};
export default calculatorhero
