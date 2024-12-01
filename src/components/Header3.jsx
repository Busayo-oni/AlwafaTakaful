import React from 'react'
import First from '../assets/9Image.png'
import Second from '../assets/11Image.png'
import Third from '../assets/10Image.png'
import Forth from '../assets/12Image.png'


const Header3 = () => {
  return (
    <>
    <section className='flex flex-col lg:flex-row bg-[#501720] lg:p-[40px_80px] py-[98px] px-10 gap-[50px]  '>
        <div className='lg:w-1/2  flex flex-col items-start justify-center '>
            <p className='font-Matter inline-block border-[1px] font-[400] text-[18px] text-white rounded-[4px] border-[#8a646a] bg-[#43131b] p-[12px] '>&#11088; Insurance You Can Trust, Values You Can Believe In &#11088;</p>
            <h1 className='font-Matter font-[600]  lg:text-[54px] text-white '>Ethical, Sharia-Compliant Insurance for Everyone.</h1>
            <p className='font-Matter font-[400] text-[14px] text-white '>Comprehensive, ethical, and reliable insurance solutions for families, businesses, and individuals across Nigeria and West Africa.</p>
            <div className='flex flex-col lg:flex-row font-Matter gap-[25px] pt-6 lg:w-[90%] w-full'>
            <button className='p-[3px_20px] w-full text-[#501720] rounded-full bg-white text-[18px] font-[600] '><a href="/">LEARN MORE</a></button>
            <button className='p-[5px_20px] w-full text-[18px] border-2 text-white border-white rounded-full font-[600] ' ><a href="/">GET A FREE QUOTE &#11111;</a></button>

            </div>
        </div>
        <div className='lg:w-1/2 hidden  lg:grid grid-cols-2 gap-7'>
            <img className='relative' src={First} alt="" />
            <img src={Third} alt="" />
            <img className='relative lg:-top-[103px] -top-[90px] -mb-[118px] ' src={Second} alt="" />
            <img src={Forth} alt="" />

        </div>
    </section>
    </>
  )
}
export default Header3