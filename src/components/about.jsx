import React from 'react'
import Image1 from '../assets/thirdImage.png'
import Play from '../assets/play.png'

const about = () => {
  return (
    <>
    <div className='flex gap-10 items-center lg:h-[85vh] bg-[#FFEED0] lg:flex-row flex-col p-6 lg:p-[100px_120px] '>
        <div className='relative lg:w-1/2 '>
          <img className='relative w-full h-screen object-contain lg:object-fill lg:h-[70vh] -mb-20 lg:-mb-0 ' src={Image1} alt="" />
          <img className='absolute top-1/2 left-1/2 ' src={Play} alt="" />
        </div>
        <div className='lg:w-1/2 flex flex-col gap-5 items-start '>
        <p className='font-[400] text-[18px] text-[#684B06] ' >About Us</p>
        <h1 className='font-[600] lg:text-[44px] text-[25px] text-[#101010] '>Trusted Takaful Insurance for Your Peace of Mind</h1>
        <p className='font-[500] text-[18px] text-[#212121]'>To provide accessible and ethical insurance solutions rooted in Islamic finance principles to families and businesses across Nigeria and West Africa.</p>
        <p className='font-[400] text-[18px] text-[#212121]'>At Alfawa, we believe in offering insurance that aligns with your values. As a fully Sharia-compliant Takaful provider, we’re committed to offering financial protection that is based on ethical principles. Whether you’re seeking coverage for your family, business, or property, our Takaful solutions ensure you’re protected without compromising your beliefs.</p>
        <button className=' text-[18px]  bg-[#501720] text-white p-[8px_20px] font-[600] rounded-full ' ><a href="/">LEARN MORE</a></button>


        </div>
    </div>
    </>
  )
}
export default about