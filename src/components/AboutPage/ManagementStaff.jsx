import React from 'react'
import hero1 from '../../assets/hero1.png';
import Nav from '../nav';
import Footer from '../Footer'
import lara from '../../assets/lara.png';
import Adjohn from '../../assets/AdJohn.png';
import AdjohnK from '../../assets/AdJohnK.png';

const ManagementStaff = () => {
  return (
    <div>
      <Nav />
         {/* Use the imported image as a background */}
      <div
        className="relative h-[40vh] md:h-[50vh] lg:h-[70vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        {/* Overlay with semi-transparent background */}
        <div className="absolute inset-0 bg-[rgba(80,23,32,0.7)]"></div>

        {/* Content */}
        <div className="relative  text-white  p-4 md:p-8 lg:p-12 max-w-4xl mx-auto text-center lg:text-center">
          <h1 className="text-2xl mt-[10%] md:text-3xl lg:text-[60px] lg:leading-[77px] font-bold">
  The Driving Force Behind Alwafa’s Success
</h1>

          <p className="text-sm md:text-base lg:text-lg my-4 md:py-[20px] lg:py-[20px] ">
            Our dedicated management team combines experience and passion to deliver exceptional Takaful services, ensuring trust and reliability for our valued customers
          </p>
         
        </div>
      </div>

       <div className=''>
    <div className="bg-[rgba(255,238,208,1)] pb-[2rem] flex flex-col items-start justify-center gap-[2rem] px-[2rem] text-[rgba(80,23,32,1)] sm:px-[3rem] py-14 lg:px-[5rem]">
  {/* Categories Section */}
 
    <h2 className=' w-full text-center lg:text-[44px]'>Management Staffs</h2>
   
    
 

  {/* Grid Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[lara, Adjohn, AdjohnK, lara, Adjohn, AdjohnK].map((image, index) => (
      <div key={index} className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <img src={image} alt={`img-${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
        <h2 className=" w-full text-center p-4">{["Lara George", "John Doe", "John Kelly", "Lara George", "John Doe", "John Kelly"][index]}</h2>
        <p className=" w-full text-center ">{["Director", "brahim Tekena", "Ilari Oyo", "Director", "Ibrahim Tekena", "Ilari Oyo"][index]}</p>
      </div>
    ))}
  </div>

  
</div>
   </div>
   <Footer />
    </div>
  )
}

export default ManagementStaff;