import React from 'react'
import SBSC from '../assets/SBSC.png'
import Hype from '../assets/Hype.png'

const Partner = () => {
  return (
    <>
    <section className='font-Matter flex items-center lg:flex-row flex-col gap-20 p-[50px_100px] '>
        <div className='lg:w-1/3 lg:text-left text-center '>
            <p className='text-[#684B06] font-400 text-[18px] '>Our Partner</p>
            <h1 className='font-[600] text-[44px] text-[#101010] '>Trusted By Businesses Across Africa</h1>
            <button className=' text-[18px]  bg-[#501720] text-white p-[8px_20px] font-[600] rounded-full ' ><a href="/">LEARN MORE</a></button>

        </div>
        <img className='lg:w-1/4' src={SBSC} alt="SBSC LOGO" />
        <img className='lg:w-1/4' src={Hype} alt="Hypeplog LOGO" />

    </section>
    </>
  )
}
export default Partner