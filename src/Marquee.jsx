import React from 'react'

 
export default function Marquee() {
  return (
    <div id='marqee' className='min-h-[16rem] xl:h-[41rem] relative overflow-x-hidden flex items-center  bg-[#004D43] text-white rounded-xl overflow-hidden mt-16 xl:mt-24 ' >
      <div className='w-full h-[1px] opacity-30 bg-current absolute left-0 top-18 md:top-18 xl:top-28 '></div>
      <div className='w-full h-[1px] opacity-30 bg-current absolute left-0 bottom-16 xl:bottom-[16rem] '></div>
     <div className='flex  md:mt-0 '>
         {['We are Ochi', 'We are Ochi', 'We are Ochi'].map((item, index)=> (
       <div className='animate-[crawl_10s_linear_infinite] '>
        <h1 className='text-[7.5rem] sm:text-[14rem] lg:text-[18rem] xl:text-[25rem] md:-mt-6 xl:-mt-[12rem] 2xl:text[40rem]  text-nowrap uppercase ml-[2.5rem]  foundersGrotesk '>{item}</h1>
       </div>
    ))
}
     </div>
   </div>
  )
}
