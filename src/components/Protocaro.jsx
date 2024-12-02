import React from 'react'
import Image from '../assets/17Image.png'

export const Protocaro = () => {
  return (
    <>
    <div className='flex lg:flex-row flex-col  gap-4 items-start justify-between '>
                <img className='w-screen lg:w-auto' src={Image} alt="" />
                <div>
                <p className='font-[400] text-[16px] text-[#684B06] '>31st March 2023</p>
                <b className='font-[700] text-[24px] text-[#212121] '>Great Service</b>
                <p className='font-[400] text-[16px] text-[#4E4E4E] '>
                I'm so glad I decided to join Alwafa Takaful's Insurance family! When my dog had an unexpected injury, I was so worried about the cost of treatment. But with Alwafa TakafulInsurance, I didn't have to worry about a thing.
                </p>
                <p>&#11088; &#11088; &#11088; &#11088; &#11088;</p>
                <b className='font-[700] text-[16px] text-[#212121] '>Monalisa , 21</b>
                <p className='font-[500] text-[16px] text-[#8E8E8E] '>Medical Doctor</p>
                </div>
    </div>
    </>
  )
}
