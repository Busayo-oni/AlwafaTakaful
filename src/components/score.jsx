import React from 'react'
import setting from '../assets/setting.png'
import customer from '../assets/customer.png'
import note from '../assets/note.png'

const score = () => {
  return (
    <>
    <section className='bg-[#ffeed0] -mt-1 flex lg:flex-row flex-col justify-between lg:p-[20px_50px] '>
    <div className='flex  font-Matter items-center p-4 gap-4 '>
        <img className='lg:w-[56px] w-[30px] ' src={setting} alt="" />
        <h1 className='font-[700] lg:text-[32px] text-[22px]  '>2X</h1>
        <p className='font-[400] text-[14px] text-[#8A646A] '>Faster than any other insurance services</p>
    </div>

    <div className='flex  font-Matter items-center lg:border-t-0 lg:border-l-2 border-t-2 border-[#501720] p-4 gap-4 '>
        <img className='lg:w-[56px] w-[30px] ' src={customer} alt="" />
        <h1 className='font-[700] lg:text-[32px] text-[22px] '>90%</h1>
        <p className='font-[400] text-[14px] text-[#8A646A] '>Customer  Satisfaction</p>
    </div>

    <div className='flex lg:border-l-2 lg:border-t-0 border-t-2 border-[#501720] font-Matter items-center p-4 gap-4 '>
        <img className='lg:w-[56px] w-[30px] ' src={note} alt="" />
        <h1 className='font-[700] lg:text-[32px] text-[22px] '>5000+</h1>
        <p className='font-[400] text-[14px] text-[#8A646A] '>Claims  Processed</p>
    </div>
    </section>
    </>
  )
}
export default score