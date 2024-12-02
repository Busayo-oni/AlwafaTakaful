import React from 'react'
import Backg from '../assets/formbg.png'
import XMark from '../assets/x.png'
import Facebook from '../assets/f.png'
import Instagram from '../assets/i.png'
import LinkedIn from '../assets/l.png'
import YouTube from '../assets/y.png'



const Form = () => {
    const backbg = Backg
  return (
    <>
    <section className='font-Matter text-center text-white lg:p-[50px] bg-no-repeat bg-cover p-6 '
    style={{backgroundImage: `url(${backbg})` }}
    >
        <h1 className='text-[55px] font-[500] p-[] '>Stay Updated with Alwafa Takaful</h1>
        <p className='text[16px] font-[400] '>Join 5,000+ satisfied customers who receive weekly Takaful insights and tips!</p>
        <form className='flex flex-col gap-4 p-5 items-center' action="submit">
            <input className='lg:w-[35%] w-full p-1 rounded-[4px] bg-[#43131B] border-[1px] border-white ' type="text" placeholder='Name' />
            <input className='lg:w-[35%] w-full p-1 rounded-[4px] bg-[#43131B] border-[1px] border-white ' type="email" name="email" id="email" placeholder='Email Address' />
            <button onClick={SubmitEvent} className='bg-white  text-[#501720] p-1 lg:w-[30%] w-full rounded-full hover:text-white hover:border-white hover:border-[1px]  hover:bg-[#501720] ' >SUBSCRIBE TO NEWSLETTER </button>
                <label className='text-[16px] font-[400] text-[#FFDD44] ' htmlFor="checkbox"><input className='text-[#FFDD44]' type="checkbox" name="" id="" />I agree to receive promotional emails and updates from Alwafa Takaful.</label>
        </form>
        <div className='flex justify-center gap-4 '>
            <img src={Facebook} alt="facebook icon" /> 
            <img src={XMark} alt="x icon" /> 
            <img src={Instagram} alt="instagram icon" /> 
            <img src={LinkedIn} alt="linkedIn icon" /> 
            <img src={YouTube} alt="youTube icon" /> 
        </div>
    </section>
    </>
  )
}
export default Form