import React from 'react'
import cta1 from '../assets/cta1.jpg'

export default function CTA2() {
  return (
    <section>
      <div className='div-container mx-auto cta-bg'>
        <div className='flex flex-wrap max-w-[80%]'>
          <div className='grow-0 shrink-0 basis-auto w-full lg:w-7/12'>
            <div className='bg-gradient-to-br from-secondary via-primary to-tertiary h-full rounded-lg p-6 lg:pl-12 text-white flex flex-col justify-center items-center text-center'>
              <h2 className='text-white'>A Brilliant Future Awaits</h2>
              <h3 className='italic text-white'>Be Top Of Your Class With AceEssayWriter</h3>
              <button className='cta-button'>Start Now</button>
            </div>
          </div>
          <div className='grow-0 shrink-0 basis-auto w-full lg:w-5/12 mt-12 lg:mb-0'>
            <div className='flex lg:py-12'>
              <img
                src={cta1}
                className='w-[60%] lg:w-full mx-auto rounded-lg shadow-lg z-10'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
