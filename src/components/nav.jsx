import React, { useState } from "react";
import Logo from '../assets/AlwafaLogo.png'
import Search from '../assets/search-normal.png'
import User from '../assets/user.png'
import { Link } from 'react-router-dom';



const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");
  const [submenuState, setSubmenuState] = useState({
    Services: false,
    Products: false,
  });

  const handleMouseEnter = (menu) => {
    setSubmenuState((prevState) => ({
      ...prevState,
      [menu]: true,
    }));
  };

  const handleMouseLeave = (menu) => {
    setSubmenuState((prevState) => ({
      ...prevState,
      [menu]: false,
    }));
  };

  return (
    <nav className="font-Matter bg-white text-[#212121]">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        <div ><img className="w-[100px] lg:block hidden object-contain " src={Logo} alt="alwafa logo" /></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <button 
          onClick={() => setActiveMenu("Home")}
          className={`font-Matter hover:text-[#501720] hover:font-[600] ${
            activeMenu === "Home" ? "text-[#501720] font-[600] " : ""
          }`}
          ><Link to="/HomeAll">HOME</Link> </button>

          {/* Services Menu */}
          <div
            className="relative group "
            onMouseEnter={() => handleMouseEnter("Services")}
            onMouseLeave={() => handleMouseLeave("Services")}
          >
            <button onClick={() => setActiveMenu("About")}
              aria-haspopup="true"
              className={`flex items-center hover:text-[#501720] hover:font-[600] ${
                activeMenu === "About" ? "text-[#501720] font-[600]" : ""
              }`}
            >
              ABOUT US
              <span className="ml-1">{submenuState.Services ? "▲" : "▼"}</span>
            </button>
            {submenuState.Services && (
              <div className="absolute top-1/2 mt-2 w-[15rem] bg-white rounded shadow-lg z-50">
                <Link to="/OurStory"   className="block px-4 py-2 hover:bg-gray-100 ">OUR STORY  </Link> 
                <Link to="/BoardOfDirectors" className="block px-4 py-2 hover:bg-gray-100 border-t-[0.5px] border-[rgba(80,23,32,1)]">BOARD OF DIRECTORS </Link>
                <Link to="/AdvisoryTeam" className="block px-4 py-2 hover:bg-gray-100 border-t-[0.5px] border-[rgba(80,23,32,1)]">ADVISORY TEAM </Link>
                <Link to="/ManagementStaff" className="block px-4 py-2 hover:bg-gray-100 border-t-[0.5px] border-[rgba(80,23,32,1)]">MANAGEMENT STAFF </Link>
                
              </div>
            )}
          </div>

          {/* Products Menu */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("Products")}
            onMouseLeave={() => handleMouseLeave("Products")}
          >
            <button onClick={() => setActiveMenu("Products")}
              aria-haspopup="true"
              className={`flex items-center hover:text-[#501720] hover:font-[600] ${
                activeMenu === "Products" ? "text-[#501720] font-[600]" : ""
              }`}>
              PRODUCTS
              <span className="ml-1">{submenuState.Products ? "▲" : "▼"}</span>
            </button>
            {submenuState.Products && (
              <div className="absolute top-1/2 mt-2  w-[10rem] bg-white rounded shadow-lg z-50">
                {/* Nested Side Menu */}
                <div
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter("SubProducts")}
                  onMouseLeave={() => handleMouseLeave("SubProducts")}
                >
                  <button className="block px-2 py-1 border-b-2 flex items-center hover:bg-gray-600">
                     FAMILY TAKAFUL &#11166;
                  </button>
                  {submenuState.SubProducts && (
                    <div className="absolute left-full top-0 mt-0 ml-1 w-[15rem] bg-white rounded shadow-lg">
                      <Link to="/ProductAll" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        GROUP FAMILY TAKAFUL
                      </Link>
                      <Link to="/Credit" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        CREDIT TAKAFUL
                      </Link>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        ENDOWMENT TAKAFUL
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        GROUP TUITION PLAN
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        LEGACY INVESTMENT PLAN
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        INVESTMENT SAVING PLAN
                      </a>
                    </div>
                  )}
                </div>
                <div
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter("SubProduct")}
                  onMouseLeave={() => handleMouseLeave("SubProduct")}
                >
                  <button className="block px-2 py-1 flex items-center hover:bg-gray-600">
                     FAMILY TAKAFUL &#11166;
                  </button>
                  {submenuState.SubProduct && (
                    <div className="absolute left-full top-0 mt-0 ml-1 w-[20rem] bg-white rounded shadow-lg">
                      <Link to="/ProductAll" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        FIRE/SPECIAL PERIL TAKAFUL
                      </Link>
                      <Link to="/Education" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        EDUCATION
                      </Link>

                       <Link to="/MarineAll" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        MARINE CARGO TAKAFUL
                      </Link>

                      <Link to="/FidelityAll" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                         FIDELITY GUARANTEE TAKAFUL
                      </Link>
                     
                      <Link to="/MoneyAll" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                         MONEY TAKAFUL
                      </Link>
                      
                      <Link to="/Motor" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        COMPREHENSIVE MOTOR TAKAFUL
                      </Link>
                       <Link to="/TravelAll" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        TRAVEL TAKAFUL
                      </Link>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        CONSEQUENTIAL LOSE TAKAFUL
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        GOOD IN TRANSIT (GIT)
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        ENGINEERING CONTRACTOR ALL RISK
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        GROUP PERSONAL ACCIDENT 
                      </a>
                     
                      
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        PUBLIC LIABILITY TAKAFUL
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        EMPLOYERS LIABILITY TAKAFUL
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        BURGLARY PRIVATE
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        BURGLARY BUSINESS
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        PROFESSIONAL INDEMNITY
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        ELECTRONIC ALL RISK
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <button 
          onClick={() => setActiveMenu("Contact")}
          className={`font-Matter pr-14 hover:text-[#501720] hover:font-[600] ${
            activeMenu === "Contact" ? "text-[#501720] font-[600] " : ""
          }`}
          ><Link to="/Contact">CONTACT US</Link></button>



        <button 
          onClick={() => setActiveMenu("Cal")}
          className={`font-Matter hover:text-[#501720] hover:font-[600] ${
            activeMenu === "Cal" ? "text-[#501720] font-[600] " : ""
          }`}
          ><Link to="/Calculator">TAKAFUL CALCULATOR</Link></button>
          <button 
          onClick={() => setActiveMenu("faq")}
          className={`font-Matter hover:text-[#501720] hover:font-[600] ${
            activeMenu === "faq" ? "text-[#501720] font-[600] " : ""
          }`}
          ><Link to="/Faq">FAQ</Link></button>

        </div>
        <div>
            <button className="hidden lg:block md:block p-[8px_15px] bg-[#501720] rounded-full text-white font-Matter "><Link to="/ClaimSection">REPORT A CLAIM</Link></button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className=" md:hidden pb-5">
        <button
          className="md:hidden absolute left-3 "
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? <span>&times;</span> : <span>&#9776;</span>}
        </button>
        <div className="flex gap-5">
        <a href="/"><img src={Search} alt="" /></a>

          <a href=""><img src={User} alt="" /></a>
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div>
          <button 
          onClick={() => setActiveMenu("Home")}
          className={`block px-4 py-2 font-Matter hover:text-[#501720] hover:font-[600] ${
            activeMenu === "Home" ? "text-[#501720] font-[600] " : ""
          }`}
          ><Link to="/HomeAll">HOME</Link></button>

            {/* Services Menu */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("Services")}
              onMouseLeave={() => handleMouseLeave("Services")}
            >
              <button onClick={() => setActiveMenu("About")}
              aria-haspopup="true"
              className={`flex w-full relative px-4 py-2 justify-between items-center hover:text-[#501720] hover:font-[600] ${
                activeMenu === "About" ? "text-[#501720] font-[600]" : ""
              }`}
            >
              ABOUT US
              <span className="ml-1">{submenuState.Services ? "▲" : "▼"}</span>
            </button>
            {submenuState.Services && (
              <div className="absolute -top-1 left-[7rem] mt-2  w-[12rem] bg-white rounded shadow-lg z-50">
                <Link to="/OurStory"   className="block px-4 py-2 hover:bg-gray-100 ">OUR STORY  </Link> 
                <Link to="/BoardOfDirectors" className="block px-4 py-2 hover:bg-gray-100 border-t-[0.5px] border-[rgba(80,23,32,1)]">BOARD OF DIRECTORS </Link>
                <Link to="/AdvisoryTeam" className="block px-4 py-2 hover:bg-gray-100 border-t-[0.5px] border-[rgba(80,23,32,1)]">ADVISORY TEAM </Link>
                <Link to="/ManagementStaff" className="block px-4 py-2 hover:bg-gray-100 border-t-[0.5px] border-[rgba(80,23,32,1)]">MANAGEMENT STAFF </Link>
                
              </div>
            )}
          </div>

            {/* Products Menu */}
            <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("Products")}
            onMouseLeave={() => handleMouseLeave("Products")}
          >
            <button onClick={() => setActiveMenu("Products")}
              aria-haspopup="true"
              className={`flex w-full py-2 px-4 justify-between items-center hover:text-[#501720] hover:font-[600] ${
                activeMenu === "Products" ? "text-[#501720] font-[600]" : ""
              }`}>
              PRODUCTS
              <span className="ml-1">{submenuState.Products ? "▲" : "▼"}</span>
            </button>
            {submenuState.Products && (
              <div className="relative top-1/2 mt-2  w-[12rem] bg-white rounded shadow-lg z-50">
                {/* Nested Side Menu */}
                <div
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter("SubProducts")}
                  onMouseLeave={() => handleMouseLeave("SubProducts")}
                >
                  <button className="block px-2 py-1 border-b-2 ml-4 flex items-center hover:bg-gray-600">
                     FAMILY TAKAFUL &#11166;
                  </button>
                  {submenuState.SubProducts && (
                    <div className="absolute left-full top-0  mt-0 ml-1 w-[15rem] bg-white rounded shadow-lg">
                      <Link to="/ProductAll" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        GROUP FAMILY TAKAFUL
                      </Link>
                      <Link to="/Credit" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        CREDIT TAKAFUL
                      </Link>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        ENDOWMENT TAKAFUL
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        GROUP TUITION PLAN
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        LEGACY INVESTMENT PLAN
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        INVESTMENT SAVING PLAN
                      </a>
                    </div>
                  )}
                </div>
                <div
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter("SubProduct")}
                  onMouseLeave={() => handleMouseLeave("SubProduct")}
                >
                  <button className="block px-2 py-1 ml-4 flex items-center hover:bg-gray-600">
                     FAMILY TAKAFUL &#11166;
                  </button>
                  {submenuState.SubProduct && (
                    <div className="absolute left-full top-0 mt-0 ml-1 w-[20rem] bg-white rounded shadow-lg">
                      <Link to="/ProductAll" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        FIRE/SPECIAL PERIL TAKAFUL
                      </Link>
                      <Link to="/Education" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        EDUCATION
                      </Link>
                      <Link to="/" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        MARINE CARGO TAKAFUL
                      </Link>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        FIDELITY GUARANTEE TAKAFUL
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        MONEY TAKAFUL
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        COMPREHENSIVE MOTOR TAKAFUL
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        CONSEQUENTIAL LOSE TAKAFUL
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        GOOD IN TRANSIT (GIT)
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        ENGINEERING CONTRACTOR ALL RISK
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        GROUP PERSONAL ACCIDENT 
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        TRAVEL TAKAFUL
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        PUBLIC LIABILITY TAKAFUL
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        EMPLOYERS LIABILITY TAKAFUL
                      </a>
                      <a href="#" className="block px-4 py-1 border-b-2 hover:bg-gray-500">
                        BURGLARY PRIVATE
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <button 
          onClick={() => setActiveMenu("Contact")}
          className={`font-Matter py-2 px-4 hover:text-[#501720] hover:font-[600] ${
            activeMenu === "Contact" ? "text-[#501720] font-[600] " : ""
          }`}
          ><Link to="/Contact">CONTACT US</Link></button>
          <button 
          onClick={() => setActiveMenu("Cal")}
          className={`block py-2 px-4 font-Matter hover:text-[#501720] hover:font-[600] ${
            activeMenu === "Cal" ? "text-[#501720] font-[600] " : ""
          }`}
          ><Link to="/Calculator">TAKAFUL CALCULATOR</Link></button>
            <button 
          onClick={() => setActiveMenu("faq")}
          className={`py-2 px-4 font-Matter hover:text-[#501720] hover:font-[600] ${
            activeMenu === "faq" ? "text-[#501720] font-[600] " : ""
          }`}
          ><Link to="/Faq">FAQ</Link></button>
          <div>
            <button className="block lg:block md:block mx-4 p-[8px_15px] bg-[#501720] rounded-full mb-4 text-white font-Matter "><Link to="/ClaimSection">REPORT A CLAIM</Link></button>
        </div>
          </div>
          

        </div>
      )}
    </nav>
  );
};

export default Nav;
