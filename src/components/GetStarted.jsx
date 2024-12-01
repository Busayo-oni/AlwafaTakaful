import React from 'react'
import sirpoint from '../assets/dontPoint.png'

const GetStarted = () => {
  return (
    <>
    <section className='font-Matter flex lg:flex-row flex-col items-center lg:gap-10 bg-[#fde1b1] lg:p-[50px] p-5 '>
        <img src={sirpoint} alt="" />
        <div className='lg:text-left text-center'>
            <h1 className='font-[700] lg:text-[80px] text-[#501720] text-[40px] '>Ready to Get Started?</h1>
            <p className='font-[400] text-[18px] pb-4 text-[#212121] '>Secure your future with a trusted, Sharia-compliant insurance solution. Whether you’re looking for family, health, or property insurance, we have you covered.</p>
            <button className=' text-[18px]  bg-[#501720] lg:w-auto w-1/2 text-white p-[8px_20px] font-[600] rounded-full ' ><a href="/">LEARN MORE</a></button>

        </div>
    </section>
    </>
  )
}
export default GetStarted