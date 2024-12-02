import React from 'react'
import Nav from '../nav';
import hero1 from '../../assets/hero1.png';
import adekunle from '../../assets/adekunle.png';
import makkiyu from '../../assets/makkiyu.png';
import nuhu from '../../assets/nuhu.png';
import ridwan from '../../assets/ridwan.png';
import john from '../../assets/john.png';
import johnK from '../../assets/johnK.png';

const BoardOfDirectors = () => {
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
  Our Leadership Team: Visionaries Guiding Alwafa’s Mission
</h1>

          <p className="text-sm md:text-base lg:text-lg my-4 md:py-[20px] lg:py-[20px] ">
            Meet the dedicated board of directors steering Alwafa Takaful toward excellence, ethical growth, and unwavering commitment to our community
          </p>
         
        </div>
      </div>

       <div className=''>
    <div className="bg-[rgba(255,238,208,1)] pb-[2rem] flex flex-col items-start justify-center gap-[2rem] px-[2rem] text-[rgba(80,23,32,1)] sm:px-[3rem] py-14 lg:px-[5rem]">
  {/* Categories Section */}
 
    <h2 className=' w-full text-center lg:text-[44px]'>Board of Directors</h2>
   
    
 

  {/* Grid Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
    {[adekunle, makkiyu, nuhu, ridwan, john, johnK].map((image, index) => (
      <div key={index} className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ">
        <img src={image} alt={`img-${index + 1}`} className="w-full h-auto object-cover rounded-lg " />
        <h2 className=" w-full text-center p-4">{["Alh. Adekunle Kasim", "Dr. Makkiyu Abubakar Dan Yaya", "Dr. Nuhu Abdullahi Usman", "Mr. Ridwan Migdad", "John Doe", "John Kelly"][index]}</h2>
        <p className=" w-full text-center ">{["Director", "Role", "Role", "Director", "Ibrahim Tekena", "Ilari Oyo"][index]}</p>
      </div>
    ))}
  </div>

  
</div>
   </div>
    </div>
  )
}

export default BoardOfDirectors;