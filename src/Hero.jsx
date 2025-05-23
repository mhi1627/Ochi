import React from 'react'
import Navbar from './Navbar'
import { contentImg } from '../public'
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Hero() {
  return (
    <div className='relative h-screen w-full mt-8 overflow-hidden '>
      <div id='headings' className='px-3 xl:p-16 xl:mt-7  '>
        {["We create", "Eye-opening", "presentations"].map((heading,index)=>(
          <div className=''>
            {index === 1 ?
            <span className='relative before:absolute flex gap-2 items-end '>
             <div className='rounded-lg overflow-hidden w-1/10'>
              <img src={contentImg} alt="" className=' object-cover lg:h-[5.6rem] md:h-[5rem] sm:h-[3.6rem] h-[2.5rem] xl:h-[7.3rem]' />
              </div> 
            <h1 className=' text-nowrap text-[4rem] leading-12 sm:text-[6rem] sm:leading-16 md:text-[8rem] md:leading-23  lg:text-[9rem] lg:leading-26 xl:text-[11rem] xl:leading-33  uppercase foundersGrotesk  '>{heading}</h1>
            </span> :
            <h1 className='text-[4rem] leading-12 sm:text-[6rem] sm:leading-16 md:text-[8rem] md:leading-23  lg:text-[9rem] lg:leading-26 xl:text-[11rem]  xl:leading-33 uppercase foundersGrotesk  '>{heading}</h1>
            }
          </div>
        ))}
      </div>
      <div className='lg:flex justify-between mt-[9.5rem] xl:mt-[5rem] border-t  border-gray-400 px-[4rem] py-[1.4rem]'>
          <h3 className='text-[1.3rem]'>For public and private companies</h3>
          <h3 className='text-[1.3rem]'>From the first pitch to IPO</h3>
         <span className='flex items-center gap-2'>
         <button className='uppercase text-[1.2rem] rounded-4xl border p-1 px-3 border-black '>
          Start the Project
         </button>
           <span className='border flex items-center  border-black rounded-full '>
           <IoIosArrowRoundForward className='w-9 h-9 -rotate-45'/>
           </span>
         </span>
      </div>
    </div>
  )
}
 