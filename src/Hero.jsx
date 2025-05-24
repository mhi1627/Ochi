import React from 'react'
import Navbar from './Navbar'
import { contentImg } from '../public'
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Hero() {
  return (
    <div className='relative w-full mt-8 overflow-hidden '>
      <div id='headings' className='px-3 xl:p-16 xl:mt-0 lg:mt-10 '>
        {["We create", "Eye-opening", "presentations"].map((heading,index)=>(
          <div className=''>
            {index === 1 ?
            <span className='relative before:absolute flex gap-0 items-end '>
             <div className='rounded-lg overflow-hidden xl:w-1/10 w-0'>
              <img src={contentImg} alt="" className=' object-cover lg:h-[4rem] md:h-[3.6rem] sm:h-[3.6rem] h-[2.5rem] xl:h-[5rem]' />
              </div> 
            <h1 className=' text-nowrap text-[4rem] leading-12 sm:text-[6rem] sm:leading-16 md:text-[6rem] md:leading-18  lg:text-[6rem] lg:leading-18 xl:text-[8.5rem] xl:leading-24  uppercase foundersGrotesk  '>{heading}</h1>
            </span> :
            <h1 className='text-[4rem] leading-12 sm:text-[6rem] sm:leading-16 md:text-[6rem] md:leading-18  lg:text-[6rem] lg:leading-18 xl:text-[8.5rem]  xl:leading-24 uppercase foundersGrotesk  '>{heading}</h1>
            }
          </div>
        ))}
      </div>
      <div className='md:flex items-center gap-5 justify-between mt-[9.5rem] xl:mt-[5rem] border-t  border-gray-400 lg:px-[4rem] px-5  py-[1.4rem]'>
          <h3 className=' xl:text-[1.3rem]  mb-6 NeueMontreal'>For public and private companies</h3>
          <h3 className='xl:text-[1.3rem] mb-6 NeueMontreal'>From the first pitch to IPO</h3>
         <span className='flex  items-center gap-2 mb-6 '>
         <button className='uppercase xl:text-[1.2rem] rounded-4xl border p-1 px-3 border-black NeueMontreal  '>
          Start the Project
         </button>
           <span className='border items-center hidden md:flex border-black rounded-full '>
           <IoIosArrowRoundForward className='w-9 h-9 -rotate-45'/>
           </span>
         </span>
      </div>
    </div>
  )
}
 