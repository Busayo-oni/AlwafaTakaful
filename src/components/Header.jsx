import React from "react";
import First from "../assets/firstImage.png";
import Second from "../assets/secondImage.png";
import Third from "../assets/thirdImage.png";
import Forth from "../assets/forthImage.png";

const Header = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row bg-[#501720] lg:p-[40px_80px] py-[28px] px-10 gap-[50px]">
        {/* Text Content */}
        <div className="lg:w-1/2 flex flex-col items-start justify-center">
          <p className="font-Matter inline-block border-[1px] font-[400] text-[18px] text-white rounded-[4px] border-[#8a646a] bg-[#43131b] p-[12px]">
            &#11088; Your Success is our Pride &#11088;
          </p>
          <h1 className="font-Matter font-[600] lg:text-[54px] text-[28px] text-white leading-snug">
            Protect Your Workers' Future with Sharia-Compliant Insurance.
          </h1>
          <p className="font-Matter font-[400] text-[14px] text-white">
            Comprehensive, ethical, and reliable insurance solutions for families, businesses, and individuals across Nigeria and West Africa.
          </p>
          <div className="flex flex-col lg:flex-row font-Matter gap-[25px] pt-6 lg:w-[70%] w-full">
            <button className="p-[3px_20px] text-[#501720] rounded-full bg-white text-[18px] font-[600] hover:bg-[#f0e6e6] transition-all duration-300">
              <a href="/">LEARN MORE</a>
            </button>
            <button className="p-[5px_20px] text-[18px] border-2 text-white border-white rounded-full font-[600] hover:bg-white hover:text-[#501720] transition-all duration-300">
              <a href="/">GET A FREE QUOTE &#11111;</a>
            </button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="lg:w-1/2 hidden lg:grid grid-cols-2 gap-7">
          <img className="relative" src={First} alt="Insurance coverage illustration 1" />
          <img src={Third} alt="Insurance coverage illustration 2" />
          <img
            className="relative lg:-top-[103px] -top-[90px] -mb-[118px]"
            src={Second}
            alt="Insurance coverage illustration 3"
          />
          <img src={Forth} alt="Insurance coverage illustration 4" />
        </div>
      </section>
    </>
  );
};

export default Header;
