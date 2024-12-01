import React from 'react'
import XMark from '../assets/x.png'
import Facebook from '../assets/f.png'
import Instagram from '../assets/i.png'
import LinkedIn from '../assets/l.png'
import YouTube from '../assets/y.png'
import Logo from '../assets/FooterLogo.png'



const Footer = () => {
  return (
    <>
    <section className='flex text-[#C9C9C9] lg:flex-row flex-col gap-6 justify-between lg:p-[50px_100px] p-8 bg-[#501720] '>
        <div>
            <img className='pb-5' src={Logo} alt="Alwafa Logo" />
            <p className='text-white text-[14px] font-[300] '>Your success is our pride</p>
        </div>
        <div className='flex justify-between lg:w-1/3 md:w-1/2'>
        <div>
            <b className='text-[18px] font-[500] '>Quick Links</b>
            <p className='text-[18px] font-[400] '><a href="">Home</a></p>
            <p className='text-[18px] font-[400] '><a href="">About</a></p>
            <p className='text-[18px] font-[400] '><a href="">Claim</a></p>
            <p className='text-[18px] font-[400] '><a href="">Investors</a></p>
            <p className='text-[18px] font-[400] '><a href="">Contact Us</a></p>
            <p className='text-[18px] font-[400] '><a href="">Claim</a></p>
            <p className='text-[18px] font-[400] '><a href="">FAQ</a></p>
        </div>
        <div>
        <b className='text-[18px] font-[500] '>Our Products</b>
            <p className='text-[18px] font-[400] '><a href="">Group Family</a></p>
            <p className='text-[18px] font-[400] '><a href="">Credit Takaful</a></p>
            <p className='text-[18px] font-[400] '><a href="">Education Takaful</a></p>
            <p className='text-[18px] font-[400] '><a href="">Marine Takaful</a></p>
            <p className='text-[18px] font-[400] '><a href="">Money Takaful</a></p>
            <p className='text-[18px] font-[400] '><a href="">Motor Takaful</a></p>
            <p className='text-[18px] font-[400] '><a href="">Travel Takaful</a></p>
            <p className='text-[18px] font-[400] '><a href="">Computer Takaful</a></p>
        </div>
        </div>
        <div>
            <b className='text-[18px] font-[700] text-white '>Connect With Us</b>
            <div className='flex  gap-4 '>
            <img src={Facebook} alt="facebook icon" /> 
            <img src={XMark} alt="x icon" /> 
            <img src={Instagram} alt="instagram icon" /> 
            <img src={LinkedIn} alt="linkedIn icon" /> 
            <img src={YouTube} alt="youTube icon" /> 
        </div>
        <p className='text-[18px] font-[500] text-white '>info@alwafatakafulinsurance.components</p>
        <p className='text-[18px] font-[500] text-white '>Customer Support</p>
        <p className='text-[18px] font-[500] text-white '>+234 909 0909 302</p>
        </div>
    </section>
    <section className='font-Matter bg-[#501720] lg:p-[50px_100px] p-8 border-t-2 border-[#C9C9C9]'>
        <div className='text-center'>
            <p className='text-white pb-5 text-[14px] font-[300] '>Trusted by thousands for Sharia-compliant protection, Alwafa Takaful offers peace of mind with ethical and reliable insurance solutions.</p>
        </div>
        <div className='flex lg:flex-row flex-col items-center gap-4  justify-between '>
            <p className='text-white  text-[16px] font-[500] '>&copy; Alwafa Takaful</p>
            <p className='flex gap-5'>
                <span className='text-white text-[16px] font-[500] underline ' >Privacy Policy</span><span className='text-white text-[16px] font-[500] underline '>Terms of Use</span>
            </p>
            <div className='flex  gap-4 '>
            <img src={Facebook} alt="facebook icon" /> 
            <img src={XMark} alt="x icon" /> 
            <img src={Instagram} alt="instagram icon" /> 
            <img src={LinkedIn} alt="linkedIn icon" /> 
            <img src={YouTube} alt="youTube icon" /> 
        </div>
        </div>
    </section>
    </>
  )
}
export default Footer