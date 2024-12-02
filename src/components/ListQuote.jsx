import React from 'react'

const ListQuote = (props) => {
  return (
    <div className='p-5 flex font-Matter flex-col items-start justify-between h-fit border-[1px] border-[#212121] rounded-xl '>
        <img className='w-screen rounded-lg ' src={props.image} alt="" />
        <h2 className='font[600] text-[24px] text-[#101010] lg:pb-2 '>{props.title}</h2>
        <p className='font[400] text-[16px] text-[#212121] lg:pb-4 '>{props.content} </p>
        <button className=' text-[18px]  text-[#501720] font-[600] ' ><a href="/">GET A FREE QUOTE &#11111;</a></button>
    </div>
  )
}
export default ListQuote