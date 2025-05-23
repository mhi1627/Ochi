import React from 'react'
import Navbar from './Navbar'
import { contentImg } from '../public'

export default function Hero() {
  return (
    <div className='relative  h-screen w-full mt-8 overflow-hidden '>
      <div id='headings' className='px-3 bg-red-500'>
        {["We create", "Eye-opening", "presentations"].map((heading,index)=>(
          <div className=''>
            {index === 1 ?
            <span className='relative before:absolute flex gap-2 items-end '>
             <div className='rounded-lg overflow-hidden'>
              <img src={contentImg} alt="" className=' object-cover lg:h-[5.6rem] md:h-[5rem] sm:h-[3.6rem] h-[2.5rem]' />
              </div> 
            <h1 className='text-nowrap text-[4rem] leading-12 sm:text-[6rem] sm:leading-16 md:text-[8rem] md:leading-23  lg:text-[9rem] lg:leading-26  uppercase foundersGrotesk  '>{heading}</h1>
            </span> :
            <h1 className='text-[4rem] leading-12 sm:text-[6rem] sm:leading-16 md:text-[8rem] md:leading-23  lg:text-[9rem] lg:leading-26  uppercase foundersGrotesk  '>{heading}</h1>
            }
          </div>
        ))}
      </div>
      <div className=' mt-[9.5rem] border-t  border-gray-400'>
         <h1>
          Lorem, ipsum dolor.
         </h1>
         <h1>
          Lorem, ipsum dolor.
         </h1>
      </div>
    </div>
  )
}
 