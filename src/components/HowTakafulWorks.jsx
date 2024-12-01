import React from 'react'
import Image1 from '../assets/15Image.png'

const HowTakafulWorks = () => {
  return (
    <>
    <section className='bg-[#FFEED0] lg:p-[50px] p-5 font-Matter text-center '>
        <p className='font-[400] text-[18px] text-[#684B06] '>How Takaful Works</p>
        <h1 className='font-[600] lg:text-[44px] text-[24px] text-[#501720] '>Risk Sharing, Not Risk Shifting – The Ethical Way to <br /> Protect What Matters</h1>
        <img className='cursor-pointer py-8' src={Image1} alt="person holding jar coins hand" />
        <button className=' text-[18px] w-1/2 lg:w-auto bg-[#501720] text-white p-[8px_20px] font-[600] rounded-full cursor-pointer ' ><a href="/">WATCH MORE</a></button>

    </section>
    </>
  )
}
export default HowTakafulWorks