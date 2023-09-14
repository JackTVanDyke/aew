import React from 'react'
import { AiOutlineSolution } from 'react-icons/ai'

export default function Pricing() {
  return (
    <section id='pricing'>
      <div className='div-container bg-1'>
        <h2 className=''>Pricing</h2>
        <div className='col-container'>
          <h3 className=''>4 Hour Express Service</h3>
          <div className='col-container md:row-container'>
            <div className='card'>
              <AiOutlineSolution className='react-icon' />
              <div className=''>
                <h3 className=''>Two Page Double-Spaced Essay</h3>
                <p className=''>$39.99</p>
              </div>
            </div>

            <div className='card'>
              <AiOutlineSolution className='react-icon' />
              <div className=''>
                <h3 className=''>Four Page Double-Spaced Essay</h3>
                <p className=''>$79.99</p>
              </div>
            </div>
            <div className='card'>
              <AiOutlineSolution className='react-icon' />
              <div className=''>
                <h3 className=''>Eight Page Double-Spaced Essay</h3>
                <p className=''>$139.99</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-container'>
          <h3 className=''>1 Day Speedy Service</h3>
          <div className='col-container md:row-container'>
            <div className='card'>
              <AiOutlineSolution className='react-icon' />
              <div className=''>
                <h3 className=''>Two Page Double-Spaced Essay</h3>
                <p className=''>$19.99</p>
              </div>
            </div>
            <div className='card'>
              <AiOutlineSolution className='react-icon' />
              <div className=''>
                <h3 className=''>Four Page Double-Spaced Essay</h3>
                <p className=''>$34.99</p>
              </div>
            </div>
            <div className='card'>
              <AiOutlineSolution className='react-icon' />
              <div className=''>
                <h3 className=''>Eight Page Double-Spaced Essay</h3>
                <p className=''>$49.99</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-container'>
          <h3 className=''>3 Day No-Rush Service</h3>
          <div className='col-container md:row-container'>
            <div className='card'>
              <AiOutlineSolution className='react-icon' />
              <div className=''>
                <h3 className=''>Two Page Double-Spaced Essay</h3>
                <p className=''>$14.99</p>
              </div>
            </div>
            <div className='card'>
              <AiOutlineSolution className='react-icon' />
              <div className=''>
                <h3 className=''>Four Page Double-Spaced Essay</h3>
                <p className=''>$29.99</p>
              </div>
            </div>
            <div className='card'>
              <AiOutlineSolution className='react-icon' />
              <div className=''>
                <h3 className=''>Eight Page Double-Spaced Essay</h3>
                <p className=''>$44.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
