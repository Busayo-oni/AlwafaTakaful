import React from 'react'
import Sample2 from './sample2'

const list = () => {
  return (
    <>
    <section className='font-Matter lg:p-[100px_120px] p-10 ' >
        
        <div className='lg:w-1/2 pb-5 '>
        <p className='font-[400] text-[14px] text-[#684B06] ' >Takaful Products</p>
        <h1 className='font-[600] lg:text-[36px] text-[25px] text-[#101010] '>Tailored Insurance Solutions for Your Needs</h1>
        <p className='font-[400] text-[14px] text-[#212121]'>Our Takaful products are designed to provide coverage for assets, liabilities, and businesses. They help protect individuals and companies from financial loss due to unforeseen incidents like accidents, theft, or natural disasters.</p>
        </div>
        <section className='w-full lg:block hidden '>
          <Sample2 />
      </section>
    </section>
    
    </>
  )
}
export default list