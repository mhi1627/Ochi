import React from 'react'
import Navbar from './Navbar'
import { contentImg } from '../public'

export default function Hero() {
  return (
    <div className=' relative h-screen w-full mt-8 p-8 bg-lime-400'>
      <div className='p-5 w-full bg-fuchsia-300'>
          {['we create', 'eye-opening', 'presentations'].map((item,index) =>  
        <>
           {index === 1 ?    <div className='flex items-end overflow-hidden w-full' >
              <div className='bg-red-300 rounded-lg w-[8.6rem] h-[5.6rem] overflow-hidden '><img src={contentImg} alt=""  className='w-full h-full object-cover'/></div>   <h1 className='text-nowrap text-[8.5rem] foundersGrotesk uppercase leading-[6.5rem] tracking-normal ml-3'>{item}</h1>
            </div> :   
             <div className='bg-red-500 w-full' >
                <h1 className='text-[8.5rem]  foundersGrotesk uppercase leading-[6.5rem] tracking-normal text-nowrap'>{item}</h1>
            </div>}  
        </> 
          )}
      </div>
      <div>

      </div>
    </div>
  )
}
