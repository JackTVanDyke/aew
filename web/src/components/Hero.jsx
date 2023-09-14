import React from 'react'
import hero from '../assets/hero.jpg'

export default function Hero() {
  return (
    <section>
      <div
        className='div-container bg-cover bg-no-repeat overflow-hidden h-[600px]'
        style={{
          backgroundPosition: 'top right',
          backgroundImage: `url(${hero})`,
          height: '800px',
          width: '100%',
        }}
      >
        <div
          className='col-container w-[80%] md:w-fit max-h-[400px] rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12 mt-[300px] border border-white bg-gradient-to-br from-secondary via-primary to-tertiary text-center'
          style={{
            backdropFilter: 'blur(30px)',
          }}
        >
          <h1 className='text-5xl md:text-6xl xl:text-7xl text-white'>#1 Essay Writer Service</h1>
          <h2 className='text-white italic'>
            Delivering high-quality essays in as little as four hours
          </h2>
          <button className='cta-button'>Start Now</button>
        </div>
      </div>
    </section>
  )
}
