import React from 'react'
import cta from '../assets/cta.jpg'

export default function CTA1() {
  return (
    <section>
      <div className='div-container cta-bg mx-auto'>
        <div className='flex flex-wrap max-w-[80%]'>
          <div className='grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0'>
            <div className='flex lg:py-12'>
              <img
                src={cta}
                className='w-[60%] lg:w-full mx-auto rounded-lg shadow-lg z-10'
                alt=''
              />
            </div>
          </div>
          <div className='grow-0 shrink-0 basis-auto w-full lg:w-7/12'>
            <div className='bg-gradient-to-br from-secondary via-primary to-tertiary h-full rounded-lg p-6 lg:pl-12 text-white flex flex-col justify-center items-center text-center'>
              <h2 className='text-white'>What are you waiting for?</h2>
              <h3 className='italic text-white'>
                With AceEssayWriter, a good grade is just a click away.
              </h3>
              <button className='cta-button'>Start Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
