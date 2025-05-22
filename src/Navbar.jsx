import React from 'react'
import { NavItems } from './constants'

export default function Navbar() {
  return (
    <div className='h-12 w-full flex justify-between items-center px-[3rem] py-[2.1rem]'>
     <h3 className='text-3xl font-bold'>ochi</h3>
     <ul className='flex gap-5 ml-[23rem]'>
        {NavItems.map(item => (
        <li className='text-[1.1rem] NeueMontreal'>{item}</li>
     ))}
     </ul>
     <button className='text-[1.1rem] NeueMontreal'>Contact Us</button>
    </div>
  )
}
