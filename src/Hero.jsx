import React from 'react'
import Navbar from './Navbar'
import { contentImg } from '../public'

export default function Hero() {
  return (
    <div className='relative h-screen w-full mt-8 overflow-hidden p-2 bg-lime-400'>
      <div id='headings'>
        {["We create", "Eye-opening", "presentations"].map(heading=>(
          <div className='bg-red-50 mt'>
            <h1 className='text-[4rem] leading-12 sm:text-[6rem] sm:leading-16 md:text-[8rem] md:leading-23  lg:text-[9rem] lg:leading-26  uppercase foundersGrotesk  '>{heading}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}
 