import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Button({children, className, white}) {
  return (
     <>
     {white ? 
    <button className={`${className} relative p-2 px-4 rounded-full border border-black hover:text-white flex items-center group justify-between gap-5 overflow-hidden`}>
     <p className='relative z-10 uppercase  '> {children}</p>
    <div className='w-8 h-8 relative z-10 bg-black rounded-full text-white flex items-center justify-center scale-[0.3] transition-all duration-300 group-hover:scale-[1] group-hover:bg-white  ' >
      <IoIosArrowRoundForward className='-rotate-45 h-8 w-8 hidden text-black transition-all group-hover:block'/>
    </div>
    <div className='absolute bottom-0 left-0 bg-black h-0 w-full group-hover:h-full  transition-all duration-300 ease-material' ></div>
   </button>  :
   
   <button className={`${className} relative p-2 px-4 rounded-full border bg-black border-black hover:text-black flex items-center group justify-between gap-5 overflow-hidden`}>
     <p className='relative z-10 uppercase text-white  '> {children}</p>
    <div className='w-8 h-8 relative z-10 bg-white rounded-full text-white flex items-center justify-center scale-[0.3] transition-all duration-300 group-hover:scale-[1] group-hover:bg-white  ' >
      <IoIosArrowRoundForward className='-rotate-45 h-8 w-8 hidden text-black transition-all group-hover:block'/>
    </div>
    <div className='absolute bottom-0 left-0 bg-black **: h-0 w-full group-hover:h-full  transition-all duration-300 ease-material' ></div>
   </button>
    }
     </>
  )
}
