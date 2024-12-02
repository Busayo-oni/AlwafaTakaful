import React from 'react'
import TestSamp from './TestSamp'
import Image from '../assets/16Image.png'


const Testimonial = () => {
  return (
    <>
<section className='font-Matter lg:p-[50px] p-4 text-center'>
  <p className='font-[400] text-[18px] text-[#684B06]'>Testimonial</p>
  <h1 className='font-[600] lg:text-[44px] text-[24px] text-[#101010]'>
    Hear From Our Esteemed Customers
  </h1>
  <section>
    <div className='flex lg:flex-row items-center flex-col gap-'>
      <div className='lg:w-1/2 w-full text-left'>
        <TestSamp />
      </div>
      <div className='lg:w-1/2 w-full'>
        <img src={Image} alt="Customer Image" className="w-full object-cover" />
        <button className='text-[18px] w-1/2 lg:w-auto bg-[#501720] text-white p-[8px_20px] mt-10 font-[600] rounded-full cursor-pointer'>
          <a href="/">WATCH MORE</a>
        </button>
      </div>
    </div>
  </section>
</section>
    </>
  )
}
export default Testimonial