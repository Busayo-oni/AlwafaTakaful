import React from 'react';
import hero1 from '../../assets/hero1.png';
import handImage from '../../assets/handImage.png';
import customerService from '../../assets/customerService.png';
import save from '../../assets/save.png';
import TakafulInsurance from './TakefulInsurance';

const OurStory = () => {
  return (
    <div className="">
      {/* Use the imported image as a background */}
      <div
        className="relative h-[40vh] md:h-[50vh] lg:h-[70vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        {/* Overlay with semi-transparent background */}
        <div className="absolute inset-0 bg-[rgba(80,23,32,0.7)]"></div>

        {/* Content */}
        <div className="relative  text-white  p-4 md:p-8 lg:p-12 max-w-4xl mx-auto text-center lg:text-center">
          <h1 className="text-2xl md:text-3xl lg:text-[60px] lg:leading-[77px] font-bold">
  Ethical Insurance, Built on Trust and Values
</h1>

          <p className="text-sm md:text-base lg:text-lg my-4 md:py-[20px] lg:py-[20px] ">
            At Alwafa, we offer Sharia-compliant Takaful insurance that protects your future with integrity. 
            Rooted in mutual cooperation and transparency, our mission is to provide coverage that aligns 
            with your faith and empowers you to live confidently.
          </p>
          <button className="px-6 py-2 bg-white hover:bg-[rgba(80,23,32,0.7)] hover:text-white text-[rgba(80,23,32,0.7)] font-semibold rounded-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            GET A FREE QUOTE
          </button>
        </div>
      </div>
      <section className='bg-[rgba(255,238,208,1)] flex flex-col   py-12 px-6 md:px-16 gap-8  lg:flex-row'>
        <img src={handImage} className='py-[rem] pl-[rem] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'/>
        <div>
            <div className=" ">
      {/* Section Title */}
      <div className="text-center md:text-left">
        <h5 className="text-lg text-gray-600 font-medium mb-2">Our Story</h5>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Your Success, Our Pride
        </h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto md:mx-0">
          Founded on the principles of Islamic finance, Alwafa was established to fill a gap in the insurance
          industry for products that align with Islamic values. We recognized the need for ethical, transparent
          insurance options that put the policyholder first, while ensuring compliance with Sharia law. Over the
          years, we have grown into a trusted provider, serving thousands of families and businesses, and we
          continue to expand our reach across West Africa.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4 max-w-4xl mx-auto md:mx-0">
          Our journey began with a small team of dedicated professionals committed to creating a fair,
          risk-sharing model that provides real protection. Today, Alwafa is known for its customer-first
          approach, offering Takaful solutions that cover everything from family needs to large business
          operations, all with a focus on trust, fairness, and community-driven risk sharing.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="flex flex-col md:flex-row justify-center md:justify-start mt-12 gap-8">
        {/* Mission */}
        <div className="flex flex-col items-start">
            <div className='flex align-center justify-center pb-4'>
                 <div className="bg-[#8A602B] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mr-4 mt-[-10px]">
            🎓
          </div>
          
            <h3 className="font-semibold text-lg">Our Mission</h3>
            </div>
         <div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              To provide ethical, inclusive, and Sharia-compliant Takaful insurance solutions that empower individuals and businesses to safeguard their futures with trust, transparency, and compassion.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col items-start">
            <div className='flex align-center justify-center pb-4'>
                <div className="bg-[#8A602B] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mr-4 mt-[-10px]">
            🎯
          </div>
          
            <h3 className="font-semibold text-lg ">Our Vision</h3>
            </div>
          <div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              To be the leading provider of innovative and socially responsible Takaful insurance in West Africa, fostering financial security and community well-being through mutual cooperation and shared prosperity.
            </p>
          </div>
        </div>
      </div>
    </div>
  
        </div>



      </section>


      <TakafulInsurance />
      <section className="flex  flex-col items-start lg:flex-row lg:items-center justify-center gap-2 lg:px-14 px-4 py-10">
  <div className="text-center md:text-start lg:text-left mb-8 lg:mb-0">
    <h5 className="text-lg text-[rgba(104,75,6,1)] font-medium mb-2">Stat</h5>
    <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-6">Let Our Numbers do the Talking</h2>
  </div>

  {/* Stat Item 1 */}
  <div className="flex items-center justify-center gap-2 ">
    <div className="bg-[rgba(243,194,130,1)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
      <img src={customerService} alt="Customer Service" />
    </div>
    <h3 className="font-semibold text-lg">X2</h3>
    <p className="text-sm text-center">Faster than any other insurance services</p>
  </div>

  {/* Stat Item 2 */}
  <div className="flex  items-center justify-center gap-2 ">
    <div className="bg-[rgba(243,194,130,1)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
      <img src={customerService} alt="Customer Service" />
    </div>
    <h3 className="font-semibold text-lg">99%</h3>
    <p className="text-sm text-center">Customer Satisfaction</p>
  </div>

  {/* Stat Item 3 */}
  <div className="flex  items-center justify-center gap-2 ">
    <div className="bg-[rgba(243,194,130,1)] text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold mb-2">
      <img src={save} alt="Claims Processed" />
    </div>
    <h3 className="font-semibold text-lg">5000+</h3>
    <p className="text-sm text-center">Claims Processed</p>
  </div>
</section>

    </div>
  );
};

export default OurStory;