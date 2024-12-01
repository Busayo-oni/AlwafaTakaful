import React from 'react'
import TestSamp from './TestSamp'
import Image from '../assets/16Image.png'


const Testimonial = () => {
  return (
    <>
    <section className='font-Matter lg:p-[50px_100px] p-4 text-center '>
    <p className='font-[400] text-[18px] text-[#684B06] '>Testimonial</p>
    <h1 className='font-[600] lg:text-[44px] text-[24px] text-[#101010] '>Hear From Our Esteemed Customers</h1>
    <section >
        <div className='flex lg:flex-row flex-col '>
            <div className='lg:w-1/2 text-left'>
            <TestSamp />

            </div>
            <div>
                <img src={Image} alt="" />
                <button className=' text-[18px] w-1/2 lg:w-auto bg-[#501720] text-white p-[8px_20px] mt-10 font-[600] rounded-full cursor-pointer ' ><a href="/">WATCH MORE</a></button>

            </div>
        </div>
    </section>
    </section>
    </>
  )
}
export default Testimonial