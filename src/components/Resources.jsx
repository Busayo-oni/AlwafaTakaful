import React from "react";

import CardSlider from './sample'



const Resources = () => {
    
  return (
    <>
    <section className='font-Matter lg:p-[50px_50px] p-10 overflow' >
        <section className='flex lg:flex-row flex-col gap-5 '>
        <div className='lg:w-1/2 flex flex-col gap-5 items-start '>
        <p className='font-[400] text-[18px] text-[#684B06] ' >Resources</p>
        <h1 className='font-[600] lg:text-[44px] text-[25px] text-[#101010] '>Unlock the World of Takaful</h1>
        <p className='font-[400] text-[18px] text-[#212121]'>Explore our comprehensive collection of articles, videos, and guides to deepen your understanding of Takaful and Sharia-compliant insurance. Whether you're a beginner or looking to expand your knowledge, we provide easy-to-access resources to help you make informed decisions.</p>
        <button className=' text-[18px]  bg-[#501720] text-white p-[8px_20px] font-[600] rounded-full ' ><a href="/">VIEW ALL RESOURCES</a></button>
        </div>
        <div className="overflow-hidden lg:block hidden  ">
    <CardSlider />

        </div>
    </section>
    </section>
    
    </>
  )
}
export default Resources